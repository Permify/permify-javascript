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
import Any from './Any';

/**
 * The Values model module.
 * @module model/Values
 * @version v0.8.2
 */
class Values {
    /**
     * Constructs a new <code>Values</code>.
     * @alias module:model/Values
     */
    constructor() { 
        
        Values.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Values</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Values} obj Optional instance to populate.
     * @return {module:model/Values} The populated <code>Values</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Values();

            if (data.hasOwnProperty('values')) {
                obj['values'] = ApiClient.convertToType(data['values'], {'String': Any});
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Values</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Values</code>.
     */
    static validateJSON(data) {

        return true;
    }


}



/**
 * @member {Object.<String, module:model/Any>} values
 */
Values.prototype['values'] = undefined;






export default Values;

