/**
 * Permify API
 * Permify is an open source authorization service for creating fine-grained and scalable authorization systems.
 *
 * The version of the OpenAPI document: v0.8.5
 * Contact: hello@permify.co
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import ItContainsTheTenantIdToIdentifyTheTenantAndMetadataOfTheSchemaToBeEditedWithTheCorrespondingEditsToVariousEntities from '../model/ItContainsTheTenantIdToIdentifyTheTenantAndMetadataOfTheSchemaToBeEditedWithTheCorrespondingEditsToVariousEntities';
import SchemaListResponse from '../model/SchemaListResponse';
import SchemaPartialWriteResponse from '../model/SchemaPartialWriteResponse';
import SchemaReadResponse from '../model/SchemaReadResponse';
import SchemaWriteResponse from '../model/SchemaWriteResponse';
import SchemasListRequest from '../model/SchemasListRequest';
import SchemasReadRequest from '../model/SchemasReadRequest';
import SchemasWriteRequest from '../model/SchemasWriteRequest';
import Status from '../model/Status';

/**
* Schema service.
* @module permify/SchemaApi
* @version v0.8.5
*/
export default class SchemaApi {

    /**
    * Constructs a new SchemaApi. 
    * @alias module:permify/SchemaApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the schemasList operation.
     * @callback module:permify/SchemaApi~schemasListCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SchemaListResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * list schema
     * @param {String} tenantId Identifier of the tenant, if you are not using multi-tenancy (have only one tenant) use pre-inserted tenant <code>t1</code> for this field. Required, and must match the pattern \\“[a-zA-Z0-9-,]+\\“, max 64 bytes.
     * @param {module:model/SchemasListRequest} body 
     * @param {module:permify/SchemaApi~schemasListCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SchemaListResponse}
     */
    schemasList(tenantId, body, callback) {
      let postBody = body;
      // verify the required parameter 'tenantId' is set
      if (tenantId === undefined || tenantId === null) {
        throw new Error("Missing the required parameter 'tenantId' when calling schemasList");
      }
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling schemasList");
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
      let returnType = SchemaListResponse;
      return this.apiClient.callApi(
        '/v1/tenants/{tenant_id}/schemas/list', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the schemasPartialWrite operation.
     * @callback module:permify/SchemaApi~schemasPartialWriteCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SchemaPartialWriteResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * partially update your authorization model
     * @param {String} tenantId tenant_id is a string that identifies the tenant. It must match the pattern \"[a-zA-Z0-9-,]+\", be a maximum of 64 bytes, and must not be empty.
     * @param {module:model/ItContainsTheTenantIdToIdentifyTheTenantAndMetadataOfTheSchemaToBeEditedWithTheCorrespondingEditsToVariousEntities} body 
     * @param {module:permify/SchemaApi~schemasPartialWriteCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SchemaPartialWriteResponse}
     */
    schemasPartialWrite(tenantId, body, callback) {
      let postBody = body;
      // verify the required parameter 'tenantId' is set
      if (tenantId === undefined || tenantId === null) {
        throw new Error("Missing the required parameter 'tenantId' when calling schemasPartialWrite");
      }
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling schemasPartialWrite");
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
      let returnType = SchemaPartialWriteResponse;
      return this.apiClient.callApi(
        '/v1/tenants/{tenant_id}/schemas/partial-write', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the schemasRead operation.
     * @callback module:permify/SchemaApi~schemasReadCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SchemaReadResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * read schema
     * @param {String} tenantId Identifier of the tenant, if you are not using multi-tenancy (have only one tenant) use pre-inserted tenant <code>t1</code> for this field. Required, and must match the pattern \\“[a-zA-Z0-9-,]+\\“, max 64 bytes.
     * @param {module:model/SchemasReadRequest} body 
     * @param {module:permify/SchemaApi~schemasReadCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SchemaReadResponse}
     */
    schemasRead(tenantId, body, callback) {
      let postBody = body;
      // verify the required parameter 'tenantId' is set
      if (tenantId === undefined || tenantId === null) {
        throw new Error("Missing the required parameter 'tenantId' when calling schemasRead");
      }
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling schemasRead");
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
      let returnType = SchemaReadResponse;
      return this.apiClient.callApi(
        '/v1/tenants/{tenant_id}/schemas/read', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the schemasWrite operation.
     * @callback module:permify/SchemaApi~schemasWriteCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SchemaWriteResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * write schema
     * @param {String} tenantId Identifier of the tenant, if you are not using multi-tenancy (have only one tenant) use pre-inserted tenant <code>t1</code> for this field. Required, and must match the pattern \\“[a-zA-Z0-9-,]+\\“, max 64 bytes.
     * @param {module:model/SchemasWriteRequest} body 
     * @param {module:permify/SchemaApi~schemasWriteCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SchemaWriteResponse}
     */
    schemasWrite(tenantId, body, callback) {
      let postBody = body;
      // verify the required parameter 'tenantId' is set
      if (tenantId === undefined || tenantId === null) {
        throw new Error("Missing the required parameter 'tenantId' when calling schemasWrite");
      }
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling schemasWrite");
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
      let returnType = SchemaWriteResponse;
      return this.apiClient.callApi(
        '/v1/tenants/{tenant_id}/schemas/write', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
