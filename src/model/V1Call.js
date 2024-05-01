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
import Argument from './Argument';

/**
 * The V1Call model module.
 * @module model/V1Call
 * @version v0.8.2
 */
class V1Call {
    /**
     * Constructs a new <code>V1Call</code>.
     * Call represents a call to a rule. It includes the name of the rule and the arguments passed to it.
     * @alias module:model/V1Call
     */
    constructor() { 
        
        V1Call.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>V1Call</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/V1Call} obj Optional instance to populate.
     * @return {module:model/V1Call} The populated <code>V1Call</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1Call();

            if (data.hasOwnProperty('ruleName')) {
                obj['ruleName'] = ApiClient.convertToType(data['ruleName'], 'String');
            }
            if (data.hasOwnProperty('arguments')) {
                obj['arguments'] = ApiClient.convertToType(data['arguments'], [Argument]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>V1Call</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>V1Call</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['ruleName'] && !(typeof data['ruleName'] === 'string' || data['ruleName'] instanceof String)) {
            throw new Error("Expected the field `ruleName` to be a primitive type in the JSON string but got " + data['ruleName']);
        }
        if (data['arguments']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['arguments'])) {
                throw new Error("Expected the field `arguments` to be an array in the JSON data but got " + data['arguments']);
            }
            // validate the optional field `arguments` (array)
            for (const item of data['arguments']) {
                Argument.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * @member {String} ruleName
 */
V1Call.prototype['ruleName'] = undefined;

/**
 * @member {Array.<module:model/Argument>} arguments
 */
V1Call.prototype['arguments'] = undefined;






export default V1Call;

