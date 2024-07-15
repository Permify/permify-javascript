/**
 * Permify API
 * Permify is an open source authorization service for creating fine-grained and scalable authorization systems.
 *
 * The version of the OpenAPI document: v0.9.9
 * Contact: hello@permify.co
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The PermissionLookupEntityResponse model module.
 * @module model/PermissionLookupEntityResponse
 * @version v0.9.9
 */
class PermissionLookupEntityResponse {
    /**
     * Constructs a new <code>PermissionLookupEntityResponse</code>.
     * PermissionLookupEntityResponse is the response message for the LookupEntity method in the Permission service.
     * @alias module:model/PermissionLookupEntityResponse
     */
    constructor() { 
        
        PermissionLookupEntityResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PermissionLookupEntityResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PermissionLookupEntityResponse} obj Optional instance to populate.
     * @return {module:model/PermissionLookupEntityResponse} The populated <code>PermissionLookupEntityResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PermissionLookupEntityResponse();

            if (data.hasOwnProperty('entity_ids')) {
                obj['entity_ids'] = ApiClient.convertToType(data['entity_ids'], ['String']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>PermissionLookupEntityResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>PermissionLookupEntityResponse</code>.
     */
    static validateJSON(data) {
        // ensure the json data is an array
        if (!Array.isArray(data['entity_ids'])) {
            throw new Error("Expected the field `entity_ids` to be an array in the JSON data but got " + data['entity_ids']);
        }

        return true;
    }


}



/**
 * List of identifiers for entities that match the lookup.
 * @member {Array.<String>} entity_ids
 */
PermissionLookupEntityResponse.prototype['entity_ids'] = undefined;






export default PermissionLookupEntityResponse;

