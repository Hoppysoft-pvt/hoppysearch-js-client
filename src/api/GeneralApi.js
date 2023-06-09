/*
 * SearchHS
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.42
 *
 * Do not edit the class manually.
 *
 */
const { ApiClient } = require('../ApiClient');

/**
* General service.
* @module api/GeneralApi
* @version 1.0.0
*/
class GeneralApi {

    /**
    * Constructs a new GeneralApi. 
    * @alias module:api/GeneralApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    // constructor(apiClient) {
    //     this.apiClient = apiClient || ApiClient.instance;
    // } (pragyan)
    constructor(indexId, apiKey) {
        this.apiClient = new ApiClient(indexId, apiKey);
    }

    /**
     * Callback function to receive the result of the v1ClearIndexDelete operation.
     * @callback moduleapi/GeneralApi~v1ClearIndexDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * /clearIndex
     * @param {module:api/GeneralApi~v1ClearIndexDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */
    v1ClearIndexDelete(callback) {

        let postBody = null;

        let pathParams = {

        };
        let queryParams = {

        };
        let headerParams = {

        };
        let formParams = {

        };

        let authNames = ['api_key'];
        let contentTypes = [];
        let accepts = ['application/json'];
        let returnType = null;

        return this.apiClient.callApi(
            '/v1/clearIndex', 'DELETE',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType, callback
        );
    }
    /**
     * Callback function to receive the result of the v1DeletePost operation.
     * @callback moduleapi/GeneralApi~v1DeletePostCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * /delete
     * @param {Object} opts Optional parameters
     * @param {Object} opts.body 
     * @param {Boolean} opts.showStats 
     * @param {Boolean} opts.diag 
     * @param {module:api/GeneralApi~v1DeletePostCallback} callback The callback function, accepting three arguments: error, data, response
     */
    v1DeletePost(opts, callback) {
        opts = opts || {};
        let postBody = opts['body'];

        let pathParams = {

        };
        let queryParams = {
            'showStats': opts['showStats'], 'diag': opts['diag']
        };
        let headerParams = {

        };
        let formParams = {

        };

        let authNames = ['api_key'];
        let contentTypes = ['application/json'];
        let accepts = ['application/json'];
        let returnType = null;

        return this.apiClient.callApi(
            '/v1/delete', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType, callback
        );
    }
    /**
     * Callback function to receive the result of the v1IndexPost operation.
     * @callback moduleapi/GeneralApi~v1IndexPostCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * /index
     * @param {Object} opts Optional parameters
     * @param {Object} opts.body 
     * @param {Boolean} opts.diag 
     * @param {module:api/GeneralApi~v1IndexPostCallback} callback The callback function, accepting three arguments: error, data, response
     */
    v1IndexPost(opts, callback) {
        opts = opts || {};
        let postBody = opts['body'];

        let pathParams = {

        };
        let queryParams = {
            'diag': opts['diag']
        };
        let headerParams = {

        };
        let formParams = {

        };

        let authNames = ['api_key'];
        let contentTypes = ['application/json'];
        let accepts = ['application/json'];
        let returnType = null;

        return this.apiClient.callApi(
            '/v1/index', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType, callback
        );
    }
    /**
     * Callback function to receive the result of the v1SearchGet operation.
     * @callback moduleapi/GeneralApi~v1SearchGetCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * /search (simple search)
     * @param {Object} opts Optional parameters
     * @param {Number} opts.q 
     * @param {String} opts.keyList 
     * @param {Number} opts.pageSize 
     * @param {Number} opts.pageIndex 
     * @param {Boolean} opts.diag 
     * @param {Boolean} opts.showStats 
     * @param {module:api/GeneralApi~v1SearchGetCallback} callback The callback function, accepting three arguments: error, data, response
     */
    v1SearchGet(opts, callback) {
        opts = opts || {};
        let postBody = null;

        let pathParams = {

        };
        let queryParams = {
            'q': opts['q'], 'keyList': opts['keyList'], 'pageSize': opts['pageSize'], 'pageIndex': opts['pageIndex'], 'diag': opts['diag'], 'showStats': opts['showStats']
        };
        let headerParams = {

        };
        let formParams = {

        };

        let authNames = ['api_key'];
        let contentTypes = [];
        let accepts = ['application/json'];
        let returnType = null;

        return this.apiClient.callApi(
            '/v1/search', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType, callback
        );
    }
    /**
     * Callback function to receive the result of the v1SearchPost operation.
     * @callback moduleapi/GeneralApi~v1SearchPostCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * /search
     * @param {Object} opts Optional parameters
     * @param {Object} opts.body 
     * @param {Boolean} opts.showStats 
     * @param {Boolean} opts.diag 
     * @param {Number} opts.pageSize 
     * @param {Number} opts.pageIndex 
     * @param {module:api/GeneralApi~v1SearchPostCallback} callback The callback function, accepting three arguments: error, data, response
     */
    v1SearchPost(opts, callback) {
        opts = opts || {};
        let postBody = opts['body'];

        let pathParams = {

        };
        let queryParams = {
            'showStats': opts['showStats'], 'diag': opts['diag'], 'pageSize': opts['pageSize'], 'pageIndex': opts['pageIndex']
        };
        let headerParams = {

        };
        let formParams = {

        };

        let authNames = ['api_key'];
        let contentTypes = ['application/json'];
        let accepts = ['application/json'];
        let returnType = null;

        return this.apiClient.callApi(
            '/v1/search', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType, callback
        );
    }
    /**
     * Callback function to receive the result of the v1StatsGet operation.
     * @callback moduleapi/GeneralApi~v1StatsGetCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * /stats
     * @param {module:api/GeneralApi~v1StatsGetCallback} callback The callback function, accepting three arguments: error, data, response
     */
    v1StatsGet(callback) {

        let postBody = null;

        let pathParams = {

        };
        let queryParams = {

        };
        let headerParams = {

        };
        let formParams = {

        };

        let authNames = ['api_key'];
        let contentTypes = [];
        let accepts = ['application/json'];
        let returnType = null;

        return this.apiClient.callApi(
            '/v1/stats', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType, callback
        );
    }

}
module.exports = { GeneralApi }