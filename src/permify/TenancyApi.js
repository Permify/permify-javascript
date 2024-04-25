/**
 * Permify API
 * Permify is an open source authorization service for creating fine-grained and scalable authorization systems.
 *
 * The version of the OpenAPI document: v0.8.1
 * Contact: hello@permify.co
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import Status from '../model/Status';
import TenantCreateRequest from '../model/TenantCreateRequest';
import TenantCreateResponse from '../model/TenantCreateResponse';
import TenantDeleteResponse from '../model/TenantDeleteResponse';
import TenantListRequest from '../model/TenantListRequest';
import TenantListResponse from '../model/TenantListResponse';

/**
* Tenancy service.
* @module permify/TenancyApi
* @version v0.8.1
*/
export default class TenancyApi {

    /**
    * Constructs a new TenancyApi. 
    * @alias module:permify/TenancyApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the tenantsCreate operation.
     * @callback module:permify/TenancyApi~tenantsCreateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TenantCreateResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * create tenant
     * @param {module:model/TenantCreateRequest} body TenantCreateRequest is the message used for the request to create a tenant.
     * @param {module:permify/TenancyApi~tenantsCreateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TenantCreateResponse}
     */
    tenantsCreate(body, callback) {
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling tenantsCreate");
      }

      let pathParams = {
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
      let returnType = TenantCreateResponse;
      return this.apiClient.callApi(
        '/v1/tenants/create', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the tenantsDelete operation.
     * @callback module:permify/TenancyApi~tenantsDeleteCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TenantDeleteResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * delete tenant
     * @param {String} id id is the unique identifier of the tenant to be deleted.
     * @param {module:permify/TenancyApi~tenantsDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TenantDeleteResponse}
     */
    tenantsDelete(id, callback) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling tenantsDelete");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = TenantDeleteResponse;
      return this.apiClient.callApi(
        '/v1/tenants/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the tenantsList operation.
     * @callback module:permify/TenancyApi~tenantsListCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TenantListResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * list tenants
     * @param {module:model/TenantListRequest} body TenantListRequest is the message used for the request to list all tenants.
     * @param {module:permify/TenancyApi~tenantsListCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TenantListResponse}
     */
    tenantsList(body, callback) {
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling tenantsList");
      }

      let pathParams = {
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
      let returnType = TenantListResponse;
      return this.apiClient.callApi(
        '/v1/tenants/list', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
