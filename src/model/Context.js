/**
 * Permify API
 * Permify is an open source authorization service for creating fine-grained and scalable authorization systems.
 *
 * The version of the OpenAPI document: v0.8.3
 * Contact: hello@permify.co
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import Attribute from './Attribute';
import Tuple from './Tuple';

/**
 * The Context model module.
 * @module model/Context
 * @version v0.8.3
 */
class Context {
    /**
     * Constructs a new <code>Context</code>.
     * Context encapsulates the information related to a single operation, including the tuples involved and the associated attributes.
     * @alias module:model/Context
     */
    constructor() { 
        
        Context.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Context</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Context} obj Optional instance to populate.
     * @return {module:model/Context} The populated <code>Context</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Context();

            if (data.hasOwnProperty('tuples')) {
                obj['tuples'] = ApiClient.convertToType(data['tuples'], [Tuple]);
            }
            if (data.hasOwnProperty('attributes')) {
                obj['attributes'] = ApiClient.convertToType(data['attributes'], [Attribute]);
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], Object);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Context</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Context</code>.
     */
    static validateJSON(data) {
        if (data['tuples']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['tuples'])) {
                throw new Error("Expected the field `tuples` to be an array in the JSON data but got " + data['tuples']);
            }
            // validate the optional field `tuples` (array)
            for (const item of data['tuples']) {
                Tuple.validateJSON(item);
            };
        }
        if (data['attributes']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['attributes'])) {
                throw new Error("Expected the field `attributes` to be an array in the JSON data but got " + data['attributes']);
            }
            // validate the optional field `attributes` (array)
            for (const item of data['attributes']) {
                Attribute.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * A repeated field of tuples involved in the operation.
 * @member {Array.<module:model/Tuple>} tuples
 */
Context.prototype['tuples'] = undefined;

/**
 * A repeated field of attributes associated with the operation.
 * @member {Array.<module:model/Attribute>} attributes
 */
Context.prototype['attributes'] = undefined;

/**
 * Additional data associated with the context.
 * @member {Object} data
 */
Context.prototype['data'] = undefined;






export default Context;

