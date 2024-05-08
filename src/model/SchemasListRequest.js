/**
 * Permify API
 * Permify is an open source authorization service for creating fine-grained and scalable authorization systems.
 *
 * The version of the OpenAPI document: v0.8.4
 * Contact: hello@permify.co
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The SchemasListRequest model module.
 * @module model/SchemasListRequest
 * @version v0.8.4
 */
class SchemasListRequest {
    /**
     * Constructs a new <code>SchemasListRequest</code>.
     * SchemaListRequest is the request message for the List method in the Schema service. It contains tenant_id for which the schemas are to be listed.
     * @alias module:model/SchemasListRequest
     */
    constructor() { 
        
        SchemasListRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SchemasListRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SchemasListRequest} obj Optional instance to populate.
     * @return {module:model/SchemasListRequest} The populated <code>SchemasListRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SchemasListRequest();

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
     * Validates the JSON data with respect to <code>SchemasListRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SchemasListRequest</code>.
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
SchemasListRequest.prototype['page_size'] = undefined;

/**
 * continuous_token is an optional parameter used for pagination. It should be the value received in the previous response.
 * @member {String} continuous_token
 */
SchemasListRequest.prototype['continuous_token'] = undefined;






export default SchemasListRequest;

