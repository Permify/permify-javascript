/**
 * Permify API
 * Permify is an open source authorization service for creating fine-grained and scalable authorization systems.
 *
 * The version of the OpenAPI document: v0.9.0
 * Contact: hello@permify.co
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The PermissionLookupEntityStreamResponse model module.
 * @module model/PermissionLookupEntityStreamResponse
 * @version v0.9.0
 */
class PermissionLookupEntityStreamResponse {
    /**
     * Constructs a new <code>PermissionLookupEntityStreamResponse</code>.
     * PermissionLookupEntityStreamResponse is the response message for the LookupEntityStream method in the Permission service.
     * @alias module:model/PermissionLookupEntityStreamResponse
     */
    constructor() { 
        
        PermissionLookupEntityStreamResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PermissionLookupEntityStreamResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PermissionLookupEntityStreamResponse} obj Optional instance to populate.
     * @return {module:model/PermissionLookupEntityStreamResponse} The populated <code>PermissionLookupEntityStreamResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PermissionLookupEntityStreamResponse();

            if (data.hasOwnProperty('entity_id')) {
                obj['entity_id'] = ApiClient.convertToType(data['entity_id'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>PermissionLookupEntityStreamResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>PermissionLookupEntityStreamResponse</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['entity_id'] && !(typeof data['entity_id'] === 'string' || data['entity_id'] instanceof String)) {
            throw new Error("Expected the field `entity_id` to be a primitive type in the JSON string but got " + data['entity_id']);
        }

        return true;
    }


}



/**
 * Identifier for an entity that matches the lookup.
 * @member {String} entity_id
 */
PermissionLookupEntityStreamResponse.prototype['entity_id'] = undefined;






export default PermissionLookupEntityStreamResponse;

