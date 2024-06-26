/**
 * Permify API
 * Permify is an open source authorization service for creating fine-grained and scalable authorization systems.
 *
 * The version of the OpenAPI document: v0.9.1
 * Contact: hello@permify.co
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import AttributeReadResponse from '../model/AttributeReadResponse';
import BundleRunRequest from '../model/BundleRunRequest';
import BundleRunResponse from '../model/BundleRunResponse';
import DataAttributesReadRequest from '../model/DataAttributesReadRequest';
import DataDeleteRequest from '../model/DataDeleteRequest';
import DataDeleteResponse from '../model/DataDeleteResponse';
import DataRelationshipsReadRequest from '../model/DataRelationshipsReadRequest';
import DataWriteRequest from '../model/DataWriteRequest';
import DataWriteResponse from '../model/DataWriteResponse';
import RelationshipDeleteRequest from '../model/RelationshipDeleteRequest';
import RelationshipDeleteResponse from '../model/RelationshipDeleteResponse';
import RelationshipReadResponse from '../model/RelationshipReadResponse';
import RelationshipWriteResponse from '../model/RelationshipWriteResponse';
import RelationshipsWriteRequest from '../model/RelationshipsWriteRequest';
import Status from '../model/Status';

/**
* Data service.
* @module permify/DataApi
* @version v0.9.1
*/
export default class DataApi {

    /**
    * Constructs a new DataApi. 
    * @alias module:permify/DataApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the bundleRun operation.
     * @callback module:permify/DataApi~bundleRunCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BundleRunResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * run bundle
     * @param {String} tenantId Identifier of the tenant, if you are not using multi-tenancy (have only one tenant) use pre-inserted tenant <code>t1</code> for this field. Required, and must match the pattern \\“[a-zA-Z0-9-,]+\\“, max 64 bytes.
     * @param {module:model/BundleRunRequest} body 
     * @param {module:permify/DataApi~bundleRunCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/BundleRunResponse}
     */
    bundleRun(tenantId, body, callback) {
      let postBody = body;
      // verify the required parameter 'tenantId' is set
      if (tenantId === undefined || tenantId === null) {
        throw new Error("Missing the required parameter 'tenantId' when calling bundleRun");
      }
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling bundleRun");
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
      let returnType = BundleRunResponse;
      return this.apiClient.callApi(
        '/v1/tenants/{tenant_id}/data/run-bundle', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the dataAttributesRead operation.
     * @callback module:permify/DataApi~dataAttributesReadCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AttributeReadResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * read attributes
     * @param {String} tenantId Identifier of the tenant, if you are not using multi-tenancy (have only one tenant) use pre-inserted tenant <code>t1</code> for this field. Required, and must match the pattern \\“[a-zA-Z0-9-,]+\\“, max 64 bytes.
     * @param {module:model/DataAttributesReadRequest} body 
     * @param {module:permify/DataApi~dataAttributesReadCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AttributeReadResponse}
     */
    dataAttributesRead(tenantId, body, callback) {
      let postBody = body;
      // verify the required parameter 'tenantId' is set
      if (tenantId === undefined || tenantId === null) {
        throw new Error("Missing the required parameter 'tenantId' when calling dataAttributesRead");
      }
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling dataAttributesRead");
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
      let returnType = AttributeReadResponse;
      return this.apiClient.callApi(
        '/v1/tenants/{tenant_id}/data/attributes/read', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the dataDelete operation.
     * @callback module:permify/DataApi~dataDeleteCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DataDeleteResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * delete data
     * @param {String} tenantId Identifier of the tenant, if you are not using multi-tenancy (have only one tenant) use pre-inserted tenant <code>t1</code> for this field. Required, and must match the pattern \\“[a-zA-Z0-9-,]+\\“, max 64 bytes.
     * @param {module:model/DataDeleteRequest} body 
     * @param {module:permify/DataApi~dataDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DataDeleteResponse}
     */
    dataDelete(tenantId, body, callback) {
      let postBody = body;
      // verify the required parameter 'tenantId' is set
      if (tenantId === undefined || tenantId === null) {
        throw new Error("Missing the required parameter 'tenantId' when calling dataDelete");
      }
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling dataDelete");
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
      let returnType = DataDeleteResponse;
      return this.apiClient.callApi(
        '/v1/tenants/{tenant_id}/data/delete', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the dataRelationshipsRead operation.
     * @callback module:permify/DataApi~dataRelationshipsReadCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RelationshipReadResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * read relationships
     * @param {String} tenantId Identifier of the tenant, if you are not using multi-tenancy (have only one tenant) use pre-inserted tenant <code>t1</code> for this field. Required, and must match the pattern \\“[a-zA-Z0-9-,]+\\“, max 64 bytes.
     * @param {module:model/DataRelationshipsReadRequest} body 
     * @param {module:permify/DataApi~dataRelationshipsReadCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RelationshipReadResponse}
     */
    dataRelationshipsRead(tenantId, body, callback) {
      let postBody = body;
      // verify the required parameter 'tenantId' is set
      if (tenantId === undefined || tenantId === null) {
        throw new Error("Missing the required parameter 'tenantId' when calling dataRelationshipsRead");
      }
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling dataRelationshipsRead");
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
      let returnType = RelationshipReadResponse;
      return this.apiClient.callApi(
        '/v1/tenants/{tenant_id}/data/relationships/read', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the dataWrite operation.
     * @callback module:permify/DataApi~dataWriteCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DataWriteResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * write data
     * @param {String} tenantId Identifier of the tenant, if you are not using multi-tenancy (have only one tenant) use pre-inserted tenant <code>t1</code> for this field. Required, and must match the pattern \\“[a-zA-Z0-9-,]+\\“, max 64 bytes.
     * @param {module:model/DataWriteRequest} body 
     * @param {module:permify/DataApi~dataWriteCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DataWriteResponse}
     */
    dataWrite(tenantId, body, callback) {
      let postBody = body;
      // verify the required parameter 'tenantId' is set
      if (tenantId === undefined || tenantId === null) {
        throw new Error("Missing the required parameter 'tenantId' when calling dataWrite");
      }
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling dataWrite");
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
      let returnType = DataWriteResponse;
      return this.apiClient.callApi(
        '/v1/tenants/{tenant_id}/data/write', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the relationshipsDelete operation.
     * @callback module:permify/DataApi~relationshipsDeleteCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RelationshipDeleteResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * delete relationships
     * @param {String} tenantId Identifier of the tenant, if you are not using multi-tenancy (have only one tenant) use pre-inserted tenant <code>t1</code> for this field. Required, and must match the pattern \\“[a-zA-Z0-9-,]+\\“, max 64 bytes.
     * @param {module:model/RelationshipDeleteRequest} body 
     * @param {module:permify/DataApi~relationshipsDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RelationshipDeleteResponse}
     */
    relationshipsDelete(tenantId, body, callback) {
      let postBody = body;
      // verify the required parameter 'tenantId' is set
      if (tenantId === undefined || tenantId === null) {
        throw new Error("Missing the required parameter 'tenantId' when calling relationshipsDelete");
      }
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling relationshipsDelete");
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
      let returnType = RelationshipDeleteResponse;
      return this.apiClient.callApi(
        '/v1/tenants/{tenant_id}/relationships/delete', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the relationshipsWrite operation.
     * @callback module:permify/DataApi~relationshipsWriteCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RelationshipWriteResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * write relationships
     * @param {String} tenantId Identifier of the tenant, if you are not using multi-tenancy (have only one tenant) use pre-inserted tenant <code>t1</code> for this field. Required, and must match the pattern \\“[a-zA-Z0-9-,]+\\“, max 64 bytes.
     * @param {module:model/RelationshipsWriteRequest} body 
     * @param {module:permify/DataApi~relationshipsWriteCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RelationshipWriteResponse}
     */
    relationshipsWrite(tenantId, body, callback) {
      let postBody = body;
      // verify the required parameter 'tenantId' is set
      if (tenantId === undefined || tenantId === null) {
        throw new Error("Missing the required parameter 'tenantId' when calling relationshipsWrite");
      }
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling relationshipsWrite");
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
      let returnType = RelationshipWriteResponse;
      return this.apiClient.callApi(
        '/v1/tenants/{tenant_id}/relationships/write', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
