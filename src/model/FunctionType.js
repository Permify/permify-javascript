/**
 * Permify API
 * Permify is an open source authorization service for creating fine-grained and scalable authorization systems.
 *
 * The version of the OpenAPI document: v0.8.4
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
 * The FunctionType model module.
 * @module model/FunctionType
 * @version v0.8.4
 */
class FunctionType {
    /**
     * Constructs a new <code>FunctionType</code>.
     * Function type with result and arg types.
     * @alias module:model/FunctionType
     */
    constructor() { 
        
        FunctionType.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>FunctionType</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FunctionType} obj Optional instance to populate.
     * @return {module:model/FunctionType} The populated <code>FunctionType</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FunctionType();

            if (data.hasOwnProperty('resultType')) {
                obj['resultType'] = V1alpha1Type.constructFromObject(data['resultType']);
            }
            if (data.hasOwnProperty('argTypes')) {
                obj['argTypes'] = ApiClient.convertToType(data['argTypes'], [V1alpha1Type]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>FunctionType</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>FunctionType</code>.
     */
    static validateJSON(data) {
        // validate the optional field `resultType`
        if (data['resultType']) { // data not null
          V1alpha1Type.validateJSON(data['resultType']);
        }
        if (data['argTypes']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['argTypes'])) {
                throw new Error("Expected the field `argTypes` to be an array in the JSON data but got " + data['argTypes']);
            }
            // validate the optional field `argTypes` (array)
            for (const item of data['argTypes']) {
                V1alpha1Type.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * @member {module:model/V1alpha1Type} resultType
 */
FunctionType.prototype['resultType'] = undefined;

/**
 * Argument types of the function.
 * @member {Array.<module:model/V1alpha1Type>} argTypes
 */
FunctionType.prototype['argTypes'] = undefined;






export default FunctionType;

