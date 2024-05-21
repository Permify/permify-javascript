/**
 * Permify API
 * Permify is an open source authorization service for creating fine-grained and scalable authorization systems.
 *
 * The version of the OpenAPI document: v0.8.7
 * Contact: hello@permify.co
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import Tenant from './Tenant';

/**
 * The TenantListResponse model module.
 * @module model/TenantListResponse
 * @version v0.8.7
 */
class TenantListResponse {
    /**
     * Constructs a new <code>TenantListResponse</code>.
     * TenantListResponse is the message returned from the request to list all tenants.
     * @alias module:model/TenantListResponse
     */
    constructor() { 
        
        TenantListResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TenantListResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TenantListResponse} obj Optional instance to populate.
     * @return {module:model/TenantListResponse} The populated <code>TenantListResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TenantListResponse();

            if (data.hasOwnProperty('tenants')) {
                obj['tenants'] = ApiClient.convertToType(data['tenants'], [Tenant]);
            }
            if (data.hasOwnProperty('continuous_token')) {
                obj['continuous_token'] = ApiClient.convertToType(data['continuous_token'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>TenantListResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TenantListResponse</code>.
     */
    static validateJSON(data) {
        if (data['tenants']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['tenants'])) {
                throw new Error("Expected the field `tenants` to be an array in the JSON data but got " + data['tenants']);
            }
            // validate the optional field `tenants` (array)
            for (const item of data['tenants']) {
                Tenant.validateJSON(item);
            };
        }
        // ensure the json data is a string
        if (data['continuous_token'] && !(typeof data['continuous_token'] === 'string' || data['continuous_token'] instanceof String)) {
            throw new Error("Expected the field `continuous_token` to be a primitive type in the JSON string but got " + data['continuous_token']);
        }

        return true;
    }


}



/**
 * tenants is a list of tenants.
 * @member {Array.<module:model/Tenant>} tenants
 */
TenantListResponse.prototype['tenants'] = undefined;

/**
 * continuous_token is a string that can be used to paginate and retrieve the next set of results.
 * @member {String} continuous_token
 */
TenantListResponse.prototype['continuous_token'] = undefined;






export default TenantListResponse;

