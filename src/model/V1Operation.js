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

import ApiClient from '../ApiClient';

/**
 * The V1Operation model module.
 * @module model/V1Operation
 * @version v0.10.1
 */
class V1Operation {
    /**
     * Constructs a new <code>V1Operation</code>.
     * Operation is a message representing a series of operations that can be performed. It includes fields for writing and deleting relationships and attributes.
     * @alias module:model/V1Operation
     */
    constructor() { 
        
        V1Operation.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>V1Operation</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/V1Operation} obj Optional instance to populate.
     * @return {module:model/V1Operation} The populated <code>V1Operation</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1Operation();

            if (data.hasOwnProperty('relationships_write')) {
                obj['relationships_write'] = ApiClient.convertToType(data['relationships_write'], ['String']);
            }
            if (data.hasOwnProperty('relationships_delete')) {
                obj['relationships_delete'] = ApiClient.convertToType(data['relationships_delete'], ['String']);
            }
            if (data.hasOwnProperty('attributes_write')) {
                obj['attributes_write'] = ApiClient.convertToType(data['attributes_write'], ['String']);
            }
            if (data.hasOwnProperty('attributes_delete')) {
                obj['attributes_delete'] = ApiClient.convertToType(data['attributes_delete'], ['String']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>V1Operation</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>V1Operation</code>.
     */
    static validateJSON(data) {
        // ensure the json data is an array
        if (!Array.isArray(data['relationships_write'])) {
            throw new Error("Expected the field `relationships_write` to be an array in the JSON data but got " + data['relationships_write']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['relationships_delete'])) {
            throw new Error("Expected the field `relationships_delete` to be an array in the JSON data but got " + data['relationships_delete']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['attributes_write'])) {
            throw new Error("Expected the field `attributes_write` to be an array in the JSON data but got " + data['attributes_write']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['attributes_delete'])) {
            throw new Error("Expected the field `attributes_delete` to be an array in the JSON data but got " + data['attributes_delete']);
        }

        return true;
    }


}



/**
 * 'relationships_write' is a repeated string field for storing relationship keys that are to be written or created.
 * @member {Array.<String>} relationships_write
 */
V1Operation.prototype['relationships_write'] = undefined;

/**
 * 'relationships_delete' is a repeated string field for storing relationship keys that are to be deleted or removed.
 * @member {Array.<String>} relationships_delete
 */
V1Operation.prototype['relationships_delete'] = undefined;

/**
 * 'attributes_write' is a repeated string field for storing attribute keys that are to be written or created.
 * @member {Array.<String>} attributes_write
 */
V1Operation.prototype['attributes_write'] = undefined;

/**
 * 'attributes_delete' is a repeated string field for storing attribute keys that are to be deleted or removed.
 * @member {Array.<String>} attributes_delete
 */
V1Operation.prototype['attributes_delete'] = undefined;






export default V1Operation;

