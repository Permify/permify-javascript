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

import ApiClient from '../ApiClient';
import SchemaList from './SchemaList';

/**
 * The SchemaListResponse model module.
 * @module model/SchemaListResponse
 * @version v0.10.0
 */
class SchemaListResponse {
    /**
     * Constructs a new <code>SchemaListResponse</code>.
     * @alias module:model/SchemaListResponse
     */
    constructor() { 
        
        SchemaListResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SchemaListResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SchemaListResponse} obj Optional instance to populate.
     * @return {module:model/SchemaListResponse} The populated <code>SchemaListResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SchemaListResponse();

            if (data.hasOwnProperty('head')) {
                obj['head'] = ApiClient.convertToType(data['head'], 'String');
            }
            if (data.hasOwnProperty('schemas')) {
                obj['schemas'] = ApiClient.convertToType(data['schemas'], [SchemaList]);
            }
            if (data.hasOwnProperty('continuous_token')) {
                obj['continuous_token'] = ApiClient.convertToType(data['continuous_token'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>SchemaListResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SchemaListResponse</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['head'] && !(typeof data['head'] === 'string' || data['head'] instanceof String)) {
            throw new Error("Expected the field `head` to be a primitive type in the JSON string but got " + data['head']);
        }
        if (data['schemas']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['schemas'])) {
                throw new Error("Expected the field `schemas` to be an array in the JSON data but got " + data['schemas']);
            }
            // validate the optional field `schemas` (array)
            for (const item of data['schemas']) {
                SchemaList.validateJSON(item);
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
 * @member {String} head
 */
SchemaListResponse.prototype['head'] = undefined;

/**
 * @member {Array.<module:model/SchemaList>} schemas
 */
SchemaListResponse.prototype['schemas'] = undefined;

/**
 * continuous_token is a string that can be used to paginate and retrieve the next set of results.
 * @member {String} continuous_token
 */
SchemaListResponse.prototype['continuous_token'] = undefined;






export default SchemaListResponse;

