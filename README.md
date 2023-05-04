# hoppysearch

hoppysearch - JavaScript client for hoppysearch

## Installation

### For [Node.js](https://nodejs.org/)

#### npm
Install it via:

```shell
npm install hoppysearch --save
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

#### Initial configuration:
```javascript
const HoppySearch = require('hoppysearch');
const indexId = YOUR_INDEX_ID
const apiKey = YOUR_API_KEY;
const hoppysearch = new HoppySearch(indexId, apiKey);
```

### index
Please add the below code after Initial configuration to index your data.

```javascript
documents = [
  {
      "Id": 101872,
      "ProductId": "B000DZH1D6",
      "UserId": "A1HKBX2L0DV258",
      "ProfileName": "Dena Leasure",
      "HelpfulnessNumerator": 0,
      "HelpfulnessDenominator": 0,
      "Score": 5,
      "Time": 1259625600,
      "Summary": "Gluten free cookies",
      "Text": "These are the best cookies I have found that are gluten free.  I love them!"
  }
]
optionals = {
  configType: "create",
  diag: "true"
}
hoppysearch.index(documents, optionals)
  .then(res => {
      console.log('statusCode:', res.status);
      console.log('response text:', res.body);
  })
  .catch(err => {
      console.log(err)
  })
```
The second argument of hoppysearch.index is not mandatory. You can skip it fully or you can skip any key value according to your requirement.

```javascript
// skip second argument
documents = [
  {
      "Id": 101872,
      "ProductId": "B000DZH1D6",
      "UserId": "A1HKBX2L0DV258",
      "ProfileName": "Dena Leasure",
      "HelpfulnessNumerator": 0,
      "HelpfulnessDenominator": 0,
      "Score": 5,
      "Time": 1259625600,
      "Summary": "Gluten free cookies",
      "Text": "These are the best cookies I have found that are gluten free.  I love them!"
  }
]
hoppysearch.index(documents)
  .then(res => {
      console.log('statusCode:', res.status);
      console.log('response text:', res.body);
  })
  .catch(err => {
      console.log(err)
  })
```
```javascript
// skip some key of second argument
documents = [
  {
      "Id": 101872,
      "ProductId": "B000DZH1D6",
      "UserId": "A1HKBX2L0DV258",
      "ProfileName": "Dena Leasure",
      "HelpfulnessNumerator": 0,
      "HelpfulnessDenominator": 0,
      "Score": 5,
      "Time": 1259625600,
      "Summary": "Gluten free cookies",
      "Text": "These are the best cookies I have found that are gluten free.  I love them!"
  }
]
optionals = {
  configType: "create"
}
hoppysearch.index(documents)
  .then(res => {
      console.log('statusCode:', res.status);
      console.log('response text:', res.body);
  })
  .catch(err => {
      console.log(err)
  })
```

### search
First add the configuration as mentioned above and then add below code to search.

```javascript
const query = "cookies"
const optionals = {
    searchableKeyList: "Summary, Text",
    diag: true,
    showStats: true,
    pageSize: 10,
    pageIndex: 0
}
hoppysearch.search(query, optionals)
    .then(res => {
        console.log('statusCode:', res.status);
        console.log('response text:', res.body);
    })
    .catch(err => {
        console.log(err)
    })
```
The second argument of hoppysearch.search is not mandatory. You can skip it fully or you can skip any key value according to your requirement.

```javascript
// skip second argument
const query = "cookies"
hoppysearch.search(query)
    .then(res => {
        console.log('statusCode:', res.status);
        console.log('response text:', res.body);
    })
    .catch(err => {
        console.log(err)
    })
```
```javascript
// skip some key of second argument
const query = "cookies"
const optionals = {
    showStats: true,
    pageSize: 10,
    pageIndex: 0
}
hoppysearch.search(query, optionals)
    .then(res => {
        console.log('statusCode:', res.status);
        console.log('response text:', res.body);
    })
    .catch(err => {
        console.log(err)
    })
```

### luceneSearch
First add the configuration as mentioned above and then add below code to perform search in advaced way.

```javascript
const luceneQuery = "Text: cookies"
const optionals = {
    defaultKeyNameToBeSearch: "Summary",
    analyzerClass: "org.apache.lucene.analysis.standard.StandardAnalyzer",
    diag: true,
    showStats: true,
    pageSize: 10,
    pageIndex: 0
}
hoppysearch.luceneSearch(luceneQuery, optionals)
    .then(res => {
        console.log('statusCode:', res.status);
        console.log('response text:', res.body);
    })
    .catch(err => {
        console.log(err)
    })
```
The second argument of hoppysearch.luceneSearch is not mandatory. You can skip it fully or you can skip any key value according to your requirement.

```javascript
// skip second argument
const luceneQuery = "Text: cookies"
hoppysearch.luceneSearch(luceneQuery)
    .then(res => {
        console.log('statusCode:', res.status);
        console.log('response text:', res.body);
    })
    .catch(err => {
        console.log(err)
    })
```
```javascript
// skip some key of second argument
const luceneQuery = "Text: cookies"
const optionals = {
    defaultKeyNameToBeSearch: "Summary",
    pageSize: 10,
    pageIndex: 0
}
hoppysearch.luceneSearch(luceneQuery, optionals)
    .then(res => {
        console.log('statusCode:', res.status);
        console.log('response text:', res.body);
    })
    .catch(err => {
        console.log(err)
    })
```

### stats
First add the configuration as mentioned above and then add below code to get stats.

```javascript
hoppysearch.stats()
    .then(res => {
        console.log('statusCode:', res.status);
        console.log('response text:', res.body);
    })
    .catch(err => {
        console.log(err)
    });
```


### delete
First add the configuration as mentioned above and then add below code to delete specific data from index.

```javascript
hs_guid = "15b522d8-1545-4dc9-9160-0b512f7d6997"
optionals = {
    diag: true,
    showStats: true
}
hoppysearch.delete(hs_guid, optionals)
    .then(res => {
        console.log('statusCode:', res.status);
        console.log('response text:', res.body);
    })
    .catch(err => {
        console.log(err)
    })
```
The second argument of hoppysearch.delete is not mandatory. You can skip it fully or you can skip any key value according to your requirement.

```javascript
// skip second argument
hs_guid = "15b522d8-1545-4dc9-9160-0b512f7d6997"
hoppysearch.delete(hs_guid)
    .then(res => {
        console.log('statusCode:', res.status);
        console.log('response text:', res.body);
    })
    .catch(err => {
        console.log(err)
    })
```
```javascript
// skip some key of second argument
hs_guid = "15b522d8-1545-4dc9-9160-0b512f7d6997"
optionals = {
    diag: true
}
hoppysearch.delete(hs_guid, optionals)
    .then(res => {
        console.log('statusCode:', res.status);
        console.log('response text:', res.body);
    })
    .catch(err => {
        console.log(err)
    })
```

### clearIndex
First add the configuration as mentioned above and then add below code to clear all data from your index.

```javascript
hoppysearch.clearIndex()
    .then(res => {
        console.log('statusCode:', res.status);
        console.log('response text:', res.body);
    })
    .catch(err => {
        console.log(err)
    });
```
