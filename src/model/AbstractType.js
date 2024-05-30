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
import V1alpha1Type from './V1alpha1Type';

/**
 * The AbstractType model module.
 * @module model/AbstractType
 * @version v0.9.0
 */
class AbstractType {
    /**
     * Constructs a new <code>AbstractType</code>.
     * Application defined abstract type.
     * @alias module:model/AbstractType
     */
    constructor() { 
        
        AbstractType.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AbstractType</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AbstractType} obj Optional instance to populate.
     * @return {module:model/AbstractType} The populated <code>AbstractType</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AbstractType();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('parameterTypes')) {
                obj['parameterTypes'] = ApiClient.convertToType(data['parameterTypes'], [V1alpha1Type]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>AbstractType</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>AbstractType</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        if (data['parameterTypes']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['parameterTypes'])) {
                throw new Error("Expected the field `parameterTypes` to be an array in the JSON data but got " + data['parameterTypes']);
            }
            // validate the optional field `parameterTypes` (array)
            for (const item of data['parameterTypes']) {
                V1alpha1Type.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * The fully qualified name of this abstract type.
 * @member {String} name
 */
AbstractType.prototype['name'] = undefined;

/**
 * Parameter types for this abstract type.
 * @member {Array.<module:model/V1alpha1Type>} parameterTypes
 */
AbstractType.prototype['parameterTypes'] = undefined;






export default AbstractType;

