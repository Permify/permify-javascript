/**
 * Permify API
 * Permify is an open source authorization service for creating fine-grained and scalable authorization systems.
 *
 * The version of the OpenAPI document: v0.10.1
 * Contact: hello@permify.co
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import CheckBody from '../model/CheckBody';
import LookupEntityBody from '../model/LookupEntityBody';
import LookupEntityStreamBody from '../model/LookupEntityStreamBody';
import LookupSubjectBody from '../model/LookupSubjectBody';
import PermissionCheckResponse from '../model/PermissionCheckResponse';
import PermissionExpandBody from '../model/PermissionExpandBody';
import PermissionExpandResponse from '../model/PermissionExpandResponse';
import PermissionLookupEntityResponse from '../model/PermissionLookupEntityResponse';
import PermissionLookupSubjectResponse from '../model/PermissionLookupSubjectResponse';
import PermissionSubjectPermissionResponse from '../model/PermissionSubjectPermissionResponse';
import Status from '../model/Status';
import StreamResultOfPermissionLookupEntityStreamResponse from '../model/StreamResultOfPermissionLookupEntityStreamResponse';
import SubjectPermissionBody from '../model/SubjectPermissionBody';

/**
* Permission service.
* @module api/PermissionApi
* @version v0.10.1
*/
export default class PermissionApi {

    /**
    * Constructs a new PermissionApi. 
    * @alias module:api/PermissionApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the permissionsCheck operation.
     * @callback module:api/PermissionApi~permissionsCheckCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PermissionCheckResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * check api
     * @param {String} tenantId Identifier of the tenant, if you are not using multi-tenancy (have only one tenant) use pre-inserted tenant <code>t1</code> for this field. Required, and must match the pattern \\“[a-zA-Z0-9-,]+\\“, max 64 bytes.
     * @param {module:model/CheckBody} body 
     * @param {module:api/PermissionApi~permissionsCheckCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PermissionCheckResponse}
     */
    permissionsCheck(tenantId, body, callback) {
      let postBody = body;
      // verify the required parameter 'tenantId' is set
      if (tenantId === undefined || tenantId === null) {
        throw new Error("Missing the required parameter 'tenantId' when calling permissionsCheck");
      }
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling permissionsCheck");
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
      let returnType = PermissionCheckResponse;
      return this.apiClient.callApi(
        '/v1/tenants/{tenant_id}/permissions/check', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the permissionsExpand operation.
     * @callback module:api/PermissionApi~permissionsExpandCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PermissionExpandResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * expand api
     * @param {String} tenantId Identifier of the tenant, if you are not using multi-tenancy (have only one tenant) use pre-inserted tenant <code>t1</code> for this field. Required, and must match the pattern \\“[a-zA-Z0-9-,]+\\“, max 64 bytes.
     * @param {module:model/PermissionExpandBody} body 
     * @param {module:api/PermissionApi~permissionsExpandCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PermissionExpandResponse}
     */
    permissionsExpand(tenantId, body, callback) {
      let postBody = body;
      // verify the required parameter 'tenantId' is set
      if (tenantId === undefined || tenantId === null) {
        throw new Error("Missing the required parameter 'tenantId' when calling permissionsExpand");
      }
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling permissionsExpand");
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
      let returnType = PermissionExpandResponse;
      return this.apiClient.callApi(
        '/v1/tenants/{tenant_id}/permissions/expand', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the permissionsLookupEntity operation.
     * @callback module:api/PermissionApi~permissionsLookupEntityCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PermissionLookupEntityResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * lookup entity
     * @param {String} tenantId Identifier of the tenant, if you are not using multi-tenancy (have only one tenant) use pre-inserted tenant <code>t1</code> for this field. Required, and must match the pattern \\“[a-zA-Z0-9-,]+\\“, max 64 bytes.
     * @param {module:model/LookupEntityBody} body 
     * @param {module:api/PermissionApi~permissionsLookupEntityCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PermissionLookupEntityResponse}
     */
    permissionsLookupEntity(tenantId, body, callback) {
      let postBody = body;
      // verify the required parameter 'tenantId' is set
      if (tenantId === undefined || tenantId === null) {
        throw new Error("Missing the required parameter 'tenantId' when calling permissionsLookupEntity");
      }
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling permissionsLookupEntity");
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
      let returnType = PermissionLookupEntityResponse;
      return this.apiClient.callApi(
        '/v1/tenants/{tenant_id}/permissions/lookup-entity', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the permissionsLookupEntityStream operation.
     * @callback module:api/PermissionApi~permissionsLookupEntityStreamCallback
     * @param {String} error Error message, if any.
     * @param {module:model/StreamResultOfPermissionLookupEntityStreamResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * lookup entity stream
     * @param {String} tenantId Identifier of the tenant, if you are not using multi-tenancy (have only one tenant) use pre-inserted tenant <code>t1</code> for this field. Required, and must match the pattern \\“[a-zA-Z0-9-,]+\\“, max 64 bytes.
     * @param {module:model/LookupEntityStreamBody} body 
     * @param {module:api/PermissionApi~permissionsLookupEntityStreamCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/StreamResultOfPermissionLookupEntityStreamResponse}
     */
    permissionsLookupEntityStream(tenantId, body, callback) {
      let postBody = body;
      // verify the required parameter 'tenantId' is set
      if (tenantId === undefined || tenantId === null) {
        throw new Error("Missing the required parameter 'tenantId' when calling permissionsLookupEntityStream");
      }
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling permissionsLookupEntityStream");
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
      let returnType = StreamResultOfPermissionLookupEntityStreamResponse;
      return this.apiClient.callApi(
        '/v1/tenants/{tenant_id}/permissions/lookup-entity-stream', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the permissionsLookupSubject operation.
     * @callback module:api/PermissionApi~permissionsLookupSubjectCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PermissionLookupSubjectResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * lookup-subject
     * @param {String} tenantId Identifier of the tenant, if you are not using multi-tenancy (have only one tenant) use pre-inserted tenant <code>t1</code> for this field. Required, and must match the pattern \\“[a-zA-Z0-9-,]+\\“, max 64 bytes.
     * @param {module:model/LookupSubjectBody} body 
     * @param {module:api/PermissionApi~permissionsLookupSubjectCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PermissionLookupSubjectResponse}
     */
    permissionsLookupSubject(tenantId, body, callback) {
      let postBody = body;
      // verify the required parameter 'tenantId' is set
      if (tenantId === undefined || tenantId === null) {
        throw new Error("Missing the required parameter 'tenantId' when calling permissionsLookupSubject");
      }
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling permissionsLookupSubject");
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
      let returnType = PermissionLookupSubjectResponse;
      return this.apiClient.callApi(
        '/v1/tenants/{tenant_id}/permissions/lookup-subject', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the permissionsSubjectPermission operation.
     * @callback module:api/PermissionApi~permissionsSubjectPermissionCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PermissionSubjectPermissionResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * subject permission
     * @param {String} tenantId Identifier of the tenant, if you are not using multi-tenancy (have only one tenant) use pre-inserted tenant <code>t1</code> for this field. Required, and must match the pattern \\“[a-zA-Z0-9-,]+\\“, max 64 bytes.
     * @param {module:model/SubjectPermissionBody} body 
     * @param {module:api/PermissionApi~permissionsSubjectPermissionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PermissionSubjectPermissionResponse}
     */
    permissionsSubjectPermission(tenantId, body, callback) {
      let postBody = body;
      // verify the required parameter 'tenantId' is set
      if (tenantId === undefined || tenantId === null) {
        throw new Error("Missing the required parameter 'tenantId' when calling permissionsSubjectPermission");
      }
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling permissionsSubjectPermission");
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
      let returnType = PermissionSubjectPermissionResponse;
      return this.apiClient.callApi(
        '/v1/tenants/{tenant_id}/permissions/subject-permission', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
