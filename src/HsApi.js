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
                        throw new Error('Please make sure you are using API Key with write permission.');
                    }
                    reject(err);
                } else {
                    resolve(res);
                }
            });
        });
    }

    delete(hs_guid, optionals) {
        if (!hs_guid) {
            throw new Error('Please pass your hs_guid as first argument.');
        }
        if (typeof hs_guid !== 'string') {
            throw new Error('Your first argument "hs_guid" should be of type "string".');
        }
        unknownField(['diag', 'showStats'], optionals)
        const opts = {
            body: {
                hs_guid
            },
            diag: optionals?.diag || false,
            showStats: optionals?.diag || false
        }

        return new Promise((resolve, reject) => {
            super.v1DeletePost(opts, (err, data, res) => {
                if (err) {
                    if (err.status === 403) {
                        throw new Error('Please make sure you are using API Key with write permission.');
                    }
                    reject(err);
                } else {
                    resolve(res);
                }
            });
        });
    }

    index(documents, optionals) {
        if (!documents) {
            throw new Error('Please pass your data which you want to index.');
        }
        if (!Array.isArray(documents)) {
            throw new Error('Your first argument should be of type "Array"');
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

        return new Promise((resolve, reject) => {
            super.v1IndexPost(opts, (err, data, res) => {
                if (err) {
                    if (err.status === 403) {
                        throw new Error('Please make sure you are using API Key with write permission.');
                    }
                    reject(err);
                } else {
                    resolve(res);
                }
            });
        });
    }

    search(query, optionals) {
        if (!query) {
            throw new Error('Please pass your query as first argument.');
        }
        if (typeof query !== 'string') {
            throw new Error('Your first argument "query" should be of type "string".');
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
        return new Promise((resolve, reject) => {
            super.v1SearchGet(opts, (err, data, res) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(res);
                }
            });
        });
    }

    luceneSearch(luceneQuery, optionals) {
        if (!luceneQuery) {
            throw new Error('Please pass your luceneQuery as first argument.');
        }
        if (typeof luceneQuery !== 'string') {
            throw new Error('Your first argument "luceneQuery" should be of type "string".');
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
        return new Promise((resolve, reject) => {
            super.v1SearchPost(opts, (err, data, res) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(res);
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
                    resolve(res);
                }
            });
        });
    }
}
module.exports = { HsApi }
