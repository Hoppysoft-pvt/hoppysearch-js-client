const HoppySearch = require("./index")

var api = new HoppySearch("xbsbszzngd", "hs_f3vrd6tqwzcc01oh")

// // clearIndex
// // =============================================================
// api.clearIndex()
//     .then(res => {
//         console.log('statusCode:', res.status);
//         console.log('response text:', res.body);
//     })
//     .catch(err => {
//         console.log(err)
//     });




// // delete
// // ================================================================
// hs_guid = "15b522d8-1545-4dc9-9160-0b512f7d6997"
// optionals = {
//     diag: true,
//     showStats: true
// }
// api.delete(hs_guid, optionals)
//     .then(res => {
//         console.log('statusCode:', res.status);
//         console.log('response text:', res.body);
//     })
//     .catch(err => {
//         console.log(err)
//     })
// // without optionals
// api.delete(hs_guid)
//     .then(res => {
//         console.log('statusCode:', res.status);
//         console.log('response text:', res.body);
//     })
//     .catch(err => {
//         console.log(err)
//     })



// // index
// // ======================================================================
// documents = [
//     {
//         "Id": 101872,
//         "ProductId": "B000DZH1D6",
//         "UserId": "A1HKBX2L0DV258",
//         "ProfileName": "Dena Leasure",
//         "HelpfulnessNumerator": 0,
//         "HelpfulnessDenominator": 0,
//         "Score": 5,
//         "Time": 1259625600,
//         "Summary": "Gluten free cookies",
//         "Text": "These are the best cookies I have found that are gluten free.  I love them!"
//     }
// ]
// optionals = {
//     configType: "create",
//     diag: "true"
// }
// api.index(documents, optionals)
//     .then(res => {
//         console.log('statusCode:', res.status);
//         console.log('response text:', res.body);
//     })
//     .catch(err => {
//         console.log(err)
//     })
// // without optionals
// api.index(documents, optionals)
//     .then(res => {
//         console.log('statusCode:', res.status);
//         console.log('response text:', res.body);
//     })
//     .catch(err => {
//         console.log(err)
//     })



// // search
// // ===============================================================================================
// const query = "cookies"
// const optionals = {
//     searchableKeyList: "Summary, Text",
//     diag: true,
//     showStats: true,
//     pageSize: 10,
//     pageIndex: 0
// }
// api.search(query, optionals)
//     .then(res => {
//         console.log('statusCode:', res.status);
//         console.log('response text:', res.body);
//     })
//     .catch(err => {
//         console.log(err)
//     })
// // without optionals
// api.search(query)
//     .then(res => {
//         console.log('statusCode:', res.status);
//         console.log('response text:', res.body);
//     })
//     .catch(err => {
//         console.log(err)
//     })



// luceneSearch
// // ===============================================================================================
// const luceneQuery = "Text: cookies"
// const optionals = {
//     defaultKeyNameToBeSearch: "Summary",
//     analyzerClass: "org.apache.lucene.analysis.standard.StandardAnalyzer",
//     diag: true,
//     showStats: true,
//     pageSize: 10,
//     pageIndex: 0
// }
// api.luceneSearch(luceneQuery, optionals)
//     .then(res => {
//         console.log('statusCode:', res.status);
//         console.log('response text:', res.body);
//     })
//     .catch(err => {
//         console.log(err)
//     })
// // without optionals
// api.luceneSearch(luceneQuery)
//     .then(res => {
//         console.log('statusCode:', res.status);
//         console.log('response text:', res.body);
//     })
//     .catch(err => {
//         console.log(err)
//     })



// // stats
// // ========================================================================
// api.stats()
//     .then(res => {
//         console.log('statusCode:', res.status);
//         console.log('response text:', res.body);
//     })
//     .catch(err => {
//         console.log(err)
//     });

