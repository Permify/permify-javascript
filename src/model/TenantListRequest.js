/**
 * Permify API
 * Permify is an open source authorization service for creating fine-grained and scalable authorization systems.
 *
 * The version of the OpenAPI document: v0.8.2
 * Contact: hello@permify.co
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The TenantListRequest model module.
 * @module model/TenantListRequest
 * @version v0.8.2
 */
class TenantListRequest {
    /**
     * Constructs a new <code>TenantListRequest</code>.
     * TenantListRequest is the message used for the request to list all tenants.
     * @alias module:model/TenantListRequest
     */
    constructor() { 
        
        TenantListRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TenantListRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TenantListRequest} obj Optional instance to populate.
     * @return {module:model/TenantListRequest} The populated <code>TenantListRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TenantListRequest();

            if (data.hasOwnProperty('page_size')) {
                obj['page_size'] = ApiClient.convertToType(data['page_size'], 'Number');
            }
            if (data.hasOwnProperty('continuous_token')) {
                obj['continuous_token'] = ApiClient.convertToType(data['continuous_token'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>TenantListRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TenantListRequest</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['continuous_token'] && !(typeof data['continuous_token'] === 'string' || data['continuous_token'] instanceof String)) {
            throw new Error("Expected the field `continuous_token` to be a primitive type in the JSON string but got " + data['continuous_token']);
        }

        return true;
    }


}



/**
 * page_size is the number of tenants to be returned in the response. The value should be between 1 and 100.
 * @member {Number} page_size
 */
TenantListRequest.prototype['page_size'] = undefined;

/**
 * continuous_token is an optional parameter used for pagination. It should be the value received in the previous response.
 * @member {String} continuous_token
 */
TenantListRequest.prototype['continuous_token'] = undefined;






export default TenantListRequest;

