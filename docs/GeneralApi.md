# SearchHs.GeneralApi

All URIs are relative to *${BASE_URL}*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v1ClearIndexDelete**](GeneralApi.md#v1ClearIndexDelete) | **DELETE** /v1/clearIndex | /clearIndex
[**v1DeletePost**](GeneralApi.md#v1DeletePost) | **POST** /v1/delete | /delete
[**v1IndexPost**](GeneralApi.md#v1IndexPost) | **POST** /v1/index | /index
[**v1SearchGet**](GeneralApi.md#v1SearchGet) | **GET** /v1/search | /search (simple search)
[**v1SearchPost**](GeneralApi.md#v1SearchPost) | **POST** /v1/search | /search
[**v1StatsGet**](GeneralApi.md#v1StatsGet) | **GET** /v1/stats | /stats

<a name="v1ClearIndexDelete"></a>
# **v1ClearIndexDelete**
> v1ClearIndexDelete()

/clearIndex

### Example
```javascript
import {SearchHs} from 'search_hs';
let defaultClient = SearchHs.ApiClient.instance;

// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new SearchHs.GeneralApi();
apiInstance.v1ClearIndexDelete((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="v1DeletePost"></a>
# **v1DeletePost**
> v1DeletePost(opts)

/delete

### Example
```javascript
import {SearchHs} from 'search_hs';
let defaultClient = SearchHs.ApiClient.instance;

// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new SearchHs.GeneralApi();
let opts = { 
  'body': null, // Object | 
  'showStats': true, // Boolean | 
  'diag': true // Boolean | 
};
apiInstance.v1DeletePost(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Object**](Object.md)|  | [optional] 
 **showStats** | **Boolean**|  | [optional] 
 **diag** | **Boolean**|  | [optional] 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="v1IndexPost"></a>
# **v1IndexPost**
> v1IndexPost(opts)

/index

### Example
```javascript
import {SearchHs} from 'search_hs';
let defaultClient = SearchHs.ApiClient.instance;

// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new SearchHs.GeneralApi();
let opts = { 
  'body': null, // Object | 
  'diag': true // Boolean | 
};
apiInstance.v1IndexPost(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Object**](Object.md)|  | [optional] 
 **diag** | **Boolean**|  | [optional] 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="v1SearchGet"></a>
# **v1SearchGet**
> v1SearchGet(opts)

/search (simple search)

### Example
```javascript
import {SearchHs} from 'search_hs';
let defaultClient = SearchHs.ApiClient.instance;

// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new SearchHs.GeneralApi();
let opts = { 
  'q': 56, // Number | 
  'keyList': "keyList_example", // String | 
  'pageSize': 56, // Number | 
  'pageIndex': 56, // Number | 
  'diag': true, // Boolean | 
  'showStats': true // Boolean | 
};
apiInstance.v1SearchGet(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **q** | **Number**|  | [optional] 
 **keyList** | **String**|  | [optional] 
 **pageSize** | **Number**|  | [optional] 
 **pageIndex** | **Number**|  | [optional] 
 **diag** | **Boolean**|  | [optional] 
 **showStats** | **Boolean**|  | [optional] 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="v1SearchPost"></a>
# **v1SearchPost**
> v1SearchPost(opts)

/search

### Example
```javascript
import {SearchHs} from 'search_hs';
let defaultClient = SearchHs.ApiClient.instance;

// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new SearchHs.GeneralApi();
let opts = { 
  'body': null, // Object | 
  'showStats': true, // Boolean | 
  'diag': true, // Boolean | 
  'pageSize': 56, // Number | 
  'pageIndex': 56 // Number | 
};
apiInstance.v1SearchPost(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Object**](Object.md)|  | [optional] 
 **showStats** | **Boolean**|  | [optional] 
 **diag** | **Boolean**|  | [optional] 
 **pageSize** | **Number**|  | [optional] 
 **pageIndex** | **Number**|  | [optional] 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="v1StatsGet"></a>
# **v1StatsGet**
> v1StatsGet()

/stats

### Example
```javascript
import {SearchHs} from 'search_hs';
let defaultClient = SearchHs.ApiClient.instance;

// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new SearchHs.GeneralApi();
apiInstance.v1StatsGet((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

