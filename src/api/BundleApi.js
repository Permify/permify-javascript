/**
 * Permify API
 * Permify is an open source authorization service for creating fine-grained and scalable authorization systems.
 *
 * The version of the OpenAPI document: v0.10.0
 * Contact: hello@permify.co
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import BundleDeleteBody from '../model/BundleDeleteBody';
import BundleDeleteResponse from '../model/BundleDeleteResponse';
import BundleReadBody from '../model/BundleReadBody';
import BundleReadResponse from '../model/BundleReadResponse';
import BundleWriteBody from '../model/BundleWriteBody';
import BundleWriteResponse from '../model/BundleWriteResponse';
import Status from '../model/Status';

/**
* Bundle service.
* @module api/BundleApi
* @version v0.10.0
*/
export default class BundleApi {

    /**
    * Constructs a new BundleApi. 
    * @alias module:api/BundleApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the bundleDelete operation.
     * @callback module:api/BundleApi~bundleDeleteCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BundleDeleteResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * delete bundle
     * @param {String} tenantId Identifier of the tenant, if you are not using multi-tenancy (have only one tenant) use pre-inserted tenant <code>t1</code> for this field. Required, and must match the pattern \\“[a-zA-Z0-9-,]+\\“, max 64 bytes.
     * @param {module:model/BundleDeleteBody} body 
     * @param {module:api/BundleApi~bundleDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/BundleDeleteResponse}
     */
    bundleDelete(tenantId, body, callback) {
      let postBody = body;
      // verify the required parameter 'tenantId' is set
      if (tenantId === undefined || tenantId === null) {
        throw new Error("Missing the required parameter 'tenantId' when calling bundleDelete");
      }
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling bundleDelete");
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
      let returnType = BundleDeleteResponse;
      return this.apiClient.callApi(
        '/v1/tenants/{tenant_id}/bundle/delete', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the bundleRead operation.
     * @callback module:api/BundleApi~bundleReadCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BundleReadResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * read bundle
     * @param {String} tenantId Identifier of the tenant, if you are not using multi-tenancy (have only one tenant) use pre-inserted tenant <code>t1</code> for this field. Required, and must match the pattern \\“[a-zA-Z0-9-,]+\\“, max 64 bytes.
     * @param {module:model/BundleReadBody} body 
     * @param {module:api/BundleApi~bundleReadCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/BundleReadResponse}
     */
    bundleRead(tenantId, body, callback) {
      let postBody = body;
      // verify the required parameter 'tenantId' is set
      if (tenantId === undefined || tenantId === null) {
        throw new Error("Missing the required parameter 'tenantId' when calling bundleRead");
      }
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling bundleRead");
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
      let returnType = BundleReadResponse;
      return this.apiClient.callApi(
        '/v1/tenants/{tenant_id}/bundle/read', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the bundleWrite operation.
     * @callback module:api/BundleApi~bundleWriteCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BundleWriteResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * write bundle
     * @param {String} tenantId Identifier of the tenant, if you are not using multi-tenancy (have only one tenant) use pre-inserted tenant <code>t1</code> for this field. Required, and must match the pattern \\“[a-zA-Z0-9-,]+\\“, max 64 bytes.
     * @param {module:model/BundleWriteBody} body 
     * @param {module:api/BundleApi~bundleWriteCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/BundleWriteResponse}
     */
    bundleWrite(tenantId, body, callback) {
      let postBody = body;
      // verify the required parameter 'tenantId' is set
      if (tenantId === undefined || tenantId === null) {
        throw new Error("Missing the required parameter 'tenantId' when calling bundleWrite");
      }
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling bundleWrite");
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
      let returnType = BundleWriteResponse;
      return this.apiClient.callApi(
        '/v1/tenants/{tenant_id}/bundle/write', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
