const { GeneralApi } = require('./api/GeneralApi');

function unknownField(knownField, obj) {
    for (let key in obj) {
        if (!knownField.includes(key)) {
            process.emitWarning(`Warning: Received unknown key ${key}.`);
        }
    }
}

class HsApi extends GeneralApi {
    constructor(indexId, apiKey) {
        if (arguments.length < 2) {
            throw new TypeError("Both indexId and apiKey are mandatory");
        }

        super(indexId, apiKey);
        this.__proto__ = {
            clearIndex: this.clearIndex.bind(this),
            delete: this.delete.bind(this),
            index: this.index.bind(this),
            search: this.search.bind(this),
            luceneSearch: this.luceneSearch.bind(this),
            stats: this.stats.bind(this)
        };
    }

    clearIndex() {
        return new Promise((resolve, reject) => {
            super.v1ClearIndexDelete((err, data, res) => {
                if (err) {
                    if (err.status === 403) {
                        reject(new Error('Please make sure you are using an API Key with write permission.'));
                    } else {
                        reject(err);
                    }
                } else {
                    resolve(res.body);
                }
            });
        });
    }

    delete(hs_guid, optionals) {
        return new Promise((resolve, reject) => {
            if (!hs_guid) {
                reject(new Error('Please pass your hs_guid as the first argument.'));
                return;
            }

            if (typeof hs_guid !== 'string') {
                reject(new Error('Your first argument "hs_guid" should be of type "string".'));
                return;
            }
            unknownField(['diag', 'showStats'], optionals)
            const opts = {
                body: {
                    hs_guid
                },
                diag: optionals?.diag || false,
                showStats: optionals?.diag || false
            }
            super.v1DeletePost(opts, (err, data, res) => {
                if (err) {
                    if (err.status === 403) {
                        reject(new Error('Please make sure you are using an API Key with write permission.'));
                    } else {
                        reject(err);
                    }
                } else {
                    resolve(res.body);
                }
            });
        });
    }

    index(documents, optionals) {
        return new Promise((resolve, reject) => {
            if (!documents) {
                reject(new Error('Please pass your data which you want to index.'));
            }
            if (!Array.isArray(documents) && typeof documents !== 'string' && !(documents instanceof io.IOBase)) {  
                reject(new Error('Please ensure that the first argument is of the correct datatype. It can either be a list (for direct data upload), a string (for upload through a filepath), or an io.IOBase object (for upload through a file object).'));    
            }
            if (typeof documents === "string") {
                documents = require(documents);
            }
            unknownField(['diag', 'configType'], optionals)
            const opts = {
                body: {
                    documents,
                    config: {
                        type: optionals?.configType || "append"
                    }
                },
                diag: optionals?.diag || false
            }
        
            super.v1IndexPost(opts, (err, data, res) => {
                if (err) {
                    if (err.status === 403) {
                        reject(new Error('Please make sure you are using an API Key with write permission.'));
                    } else {
                        reject(err);
                    }
                } else {
                    resolve(res.body);
                }
            });
        });
    }

    search(query, optionals) {
        return new Promise((resolve, reject) => {
            if (!query) {
                reject(new Error('Please pass your query as first argument.'));
                return;
            }
            if (typeof query !== 'string') {
                reject(new Error('Your first argument "query" should be of type "string".'));
            }
            unknownField(['diag', 'showStats', 'pageIndex', 'pageIndex', 'searchableKeyList'], optionals)
            const opts = {
                q: query,
                keyList: optionals?.searchableKeyList || "",
                diag: optionals?.diag || false,
                showStats: optionals?.showStats || false,
                pageSize: optionals?.pageSize || 50,
                pageIndex: optionals?.pageIndex || 0
            }
            super.v1SearchGet(opts, (err, data, res) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(res.body);
                }
            });
        });
    }

    luceneSearch(luceneQuery, optionals) {
        return new Promise((resolve, reject) => {
            if (!luceneQuery) {
                reject(new Error('Please pass your luceneQuery as first argument.'));
            }
            if (typeof luceneQuery !== 'string') {
                reject(new Error('Your first argument "luceneQuery" should be of type "string".'));
            }
            unknownField(['defaultKeyNameToBeSearch', 'analyzerClass', 'diag', 'showStats', 'pageIndex', 'pageIndex'], optionals)
            const opts = {
                body: {
                    luceneQuery
                },
                diag: optionals?.diag || false,
                showStats: optionals?.showStats || false,
                pageSize: optionals?.pageSize || 50,
                pageIndex: optionals?.pageIndex || 0
            }
            if (optionals?.defaultKeyNameToBeSearch) {
                opts.body.defaultKeyNameToBeSearch = optionals?.defaultKeyNameToBeSearch
            }
            if (optionals?.analyzerClass) {
                opts.body.analyzerClass = optionals?.analyzerClass
            }
            super.v1SearchPost(opts, (err, data, res) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(res.body);
                }
            });
        });
    }

    stats() {
        return new Promise((resolve, reject) => {
            super.v1StatsGet((err, data, res) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(res.body);
                }
            });
        });
    }
}
module.exports = { HsApi }
