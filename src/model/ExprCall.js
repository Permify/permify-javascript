/**
 * Permify API
 * Permify is an open source authorization service for creating fine-grained and scalable authorization systems.
 *
 * The version of the OpenAPI document: v0.8.8
 * Contact: hello@permify.co
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import Expr from './Expr';

/**
 * The ExprCall model module.
 * @module model/ExprCall
 * @version v0.8.8
 */
class ExprCall {
    /**
     * Constructs a new <code>ExprCall</code>.
     * A call expression, including calls to predefined functions and operators.  For example, &#x60;value &#x3D;&#x3D; 10&#x60;, &#x60;size(map_value)&#x60;.
     * @alias module:model/ExprCall
     */
    constructor() { 
        
        ExprCall.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ExprCall</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ExprCall} obj Optional instance to populate.
     * @return {module:model/ExprCall} The populated <code>ExprCall</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ExprCall();

            if (data.hasOwnProperty('target')) {
                obj['target'] = Expr.constructFromObject(data['target']);
            }
            if (data.hasOwnProperty('function')) {
                obj['function'] = ApiClient.convertToType(data['function'], 'String');
            }
            if (data.hasOwnProperty('args')) {
                obj['args'] = ApiClient.convertToType(data['args'], [Expr]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ExprCall</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ExprCall</code>.
     */
    static validateJSON(data) {
        // validate the optional field `target`
        if (data['target']) { // data not null
          Expr.validateJSON(data['target']);
        }
        // ensure the json data is a string
        if (data['function'] && !(typeof data['function'] === 'string' || data['function'] instanceof String)) {
            throw new Error("Expected the field `function` to be a primitive type in the JSON string but got " + data['function']);
        }
        if (data['args']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['args'])) {
                throw new Error("Expected the field `args` to be an array in the JSON data but got " + data['args']);
            }
            // validate the optional field `args` (array)
            for (const item of data['args']) {
                Expr.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * @member {module:model/Expr} target
 */
ExprCall.prototype['target'] = undefined;

/**
 * Required. The name of the function or method being called.
 * @member {String} function
 */
ExprCall.prototype['function'] = undefined;

/**
 * The arguments.
 * @member {Array.<module:model/Expr>} args
 */
ExprCall.prototype['args'] = undefined;






export default ExprCall;

