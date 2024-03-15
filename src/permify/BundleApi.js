/**
 * Permify API
 * Permify is an open source authorization service for creating fine-grained and scalable authorization systems.
 *
 * The version of the OpenAPI document: v0.7.7
 * Contact: hello@permify.co
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import BundleDeleteRequest from '../model/BundleDeleteRequest';
import BundleDeleteResponse from '../model/BundleDeleteResponse';
import BundleReadRequest from '../model/BundleReadRequest';
import BundleReadResponse from '../model/BundleReadResponse';
import BundleWriteRequest from '../model/BundleWriteRequest';
import BundleWriteResponse from '../model/BundleWriteResponse';
import Status from '../model/Status';

/**
* Bundle service.
* @module permify/BundleApi
* @version v0.7.7
*/
export default class BundleApi {

    /**
    * Constructs a new BundleApi. 
    * @alias module:permify/BundleApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the bundleDelete operation.
     * @callback module:permify/BundleApi~bundleDeleteCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BundleDeleteResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * delete bundle
     * The \"Delete Bundle\" API is designed for removing specific data bundles within a multi-tenant application environment. This API facilitates the deletion of a bundle, identified by its unique name, from a designated tenant's environment.
     * @param {String} tenantId 
     * @param {module:model/BundleDeleteRequest} body 
     * @param {module:permify/BundleApi~bundleDeleteCallback} callback The callback function, accepting three arguments: error, data, response
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
     * @callback module:permify/BundleApi~bundleReadCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BundleReadResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * read bundle
     * The \"Read Bundle\" API is a crucial tool for retrieving details of specific data bundles in a multi-tenant application setup. It is designed to access information about a bundle, uniquely identified by its name, within the specified tenant's environment.
     * @param {String} tenantId 
     * @param {module:model/BundleReadRequest} body 
     * @param {module:permify/BundleApi~bundleReadCallback} callback The callback function, accepting three arguments: error, data, response
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
     * @callback module:permify/BundleApi~bundleWriteCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BundleWriteResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * write bundle
     * The \"Write Bundle\" API is designed for handling data in a multi-tenant application environment. Its primary function is to write and delete data according to predefined structures. This API allows users to define or update data bundles, each distinguished by a unique name.
     * @param {String} tenantId 
     * @param {module:model/BundleWriteRequest} body 
     * @param {module:permify/BundleApi~bundleWriteCallback} callback The callback function, accepting three arguments: error, data, response
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
