/**
 * Permify API
 * Permify is an open source authorization service for creating fine-grained and scalable authorization systems.
 *
 * The version of the OpenAPI document: v0.8.6
 * Contact: hello@permify.co
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import V1Operation from './V1Operation';

/**
 * The DataBundle model module.
 * @module model/DataBundle
 * @version v0.8.6
 */
class DataBundle {
    /**
     * Constructs a new <code>DataBundle</code>.
     * DataBundle is a message representing a bundle of data, which includes a name, a list of arguments, and a series of operations.
     * @alias module:model/DataBundle
     */
    constructor() { 
        
        DataBundle.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DataBundle</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DataBundle} obj Optional instance to populate.
     * @return {module:model/DataBundle} The populated <code>DataBundle</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DataBundle();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('arguments')) {
                obj['arguments'] = ApiClient.convertToType(data['arguments'], ['String']);
            }
            if (data.hasOwnProperty('operations')) {
                obj['operations'] = ApiClient.convertToType(data['operations'], [V1Operation]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>DataBundle</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DataBundle</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['arguments'])) {
            throw new Error("Expected the field `arguments` to be an array in the JSON data but got " + data['arguments']);
        }
        if (data['operations']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['operations'])) {
                throw new Error("Expected the field `operations` to be an array in the JSON data but got " + data['operations']);
            }
            // validate the optional field `operations` (array)
            for (const item of data['operations']) {
                V1Operation.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * 'name' is a simple string field representing the name of the DataBundle.
 * @member {String} name
 */
DataBundle.prototype['name'] = undefined;

/**
 * 'arguments' is a repeated field, which means it can contain multiple strings. These are used to store a list of arguments related to the DataBundle.
 * @member {Array.<String>} arguments
 */
DataBundle.prototype['arguments'] = undefined;

/**
 * 'operations' is a repeated field containing multiple Operation messages. Each Operation represents a specific action or set of actions to be performed.
 * @member {Array.<module:model/V1Operation>} operations
 */
DataBundle.prototype['operations'] = undefined;






export default DataBundle;

