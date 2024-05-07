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
import ComputedAttribute from './ComputedAttribute';
import ContextAttribute from './ContextAttribute';

/**
 * The Argument model module.
 * @module model/Argument
 * @version v0.8.3
 */
class Argument {
    /**
     * Constructs a new <code>Argument</code>.
     * Argument defines the type of argument in a Call. It can be either a ComputedAttribute or a ContextAttribute.
     * @alias module:model/Argument
     */
    constructor() { 
        
        Argument.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Argument</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Argument} obj Optional instance to populate.
     * @return {module:model/Argument} The populated <code>Argument</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Argument();

            if (data.hasOwnProperty('computedAttribute')) {
                obj['computedAttribute'] = ComputedAttribute.constructFromObject(data['computedAttribute']);
            }
            if (data.hasOwnProperty('contextAttribute')) {
                obj['contextAttribute'] = ContextAttribute.constructFromObject(data['contextAttribute']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Argument</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Argument</code>.
     */
    static validateJSON(data) {
        // validate the optional field `computedAttribute`
        if (data['computedAttribute']) { // data not null
          ComputedAttribute.validateJSON(data['computedAttribute']);
        }
        // validate the optional field `contextAttribute`
        if (data['contextAttribute']) { // data not null
          ContextAttribute.validateJSON(data['contextAttribute']);
        }

        return true;
    }


}



/**
 * @member {module:model/ComputedAttribute} computedAttribute
 */
Argument.prototype['computedAttribute'] = undefined;

/**
 * @member {module:model/ContextAttribute} contextAttribute
 */
Argument.prototype['contextAttribute'] = undefined;






export default Argument;

