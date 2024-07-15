/**
 * Permify API
 * Permify is an open source authorization service for creating fine-grained and scalable authorization systems.
 *
 * The version of the OpenAPI document: v0.9.9
 * Contact: hello@permify.co
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import Status from '../model/Status';
import StreamResultOfWatchResponse from '../model/StreamResultOfWatchResponse';
import WatchWatchRequest from '../model/WatchWatchRequest';

/**
* Watch service.
* @module permify/WatchApi
* @version v0.9.9
*/
export default class WatchApi {

    /**
    * Constructs a new WatchApi. 
    * @alias module:permify/WatchApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the watchWatch operation.
     * @callback module:permify/WatchApi~watchWatchCallback
     * @param {String} error Error message, if any.
     * @param {module:model/StreamResultOfWatchResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * watch changes
     * @param {String} tenantId Identifier of the tenant, if you are not using multi-tenancy (have only one tenant) use pre-inserted tenant <code>t1</code> for this field. Required, and must match the pattern \\“[a-zA-Z0-9-,]+\\“, max 64 bytes.
     * @param {module:model/WatchWatchRequest} body 
     * @param {module:permify/WatchApi~watchWatchCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/StreamResultOfWatchResponse}
     */
    watchWatch(tenantId, body, callback) {
      let postBody = body;
      // verify the required parameter 'tenantId' is set
      if (tenantId === undefined || tenantId === null) {
        throw new Error("Missing the required parameter 'tenantId' when calling watchWatch");
      }
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling watchWatch");
      }

      let pathParams = {
        'tenant_id': tenantId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = StreamResultOfWatchResponse;
      return this.apiClient.callApi(
        '/v1/tenants/{tenant_id}/watch', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
