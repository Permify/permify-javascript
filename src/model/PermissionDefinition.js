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
import Child from './Child';

/**
 * The PermissionDefinition model module.
 * @module model/PermissionDefinition
 * @version v0.8.6
 */
class PermissionDefinition {
    /**
     * Constructs a new <code>PermissionDefinition</code>.
     * The PermissionDefinition message provides detailed information about a specific permission.
     * @alias module:model/PermissionDefinition
     */
    constructor() { 
        
        PermissionDefinition.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PermissionDefinition</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PermissionDefinition} obj Optional instance to populate.
     * @return {module:model/PermissionDefinition} The populated <code>PermissionDefinition</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PermissionDefinition();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('child')) {
                obj['child'] = Child.constructFromObject(data['child']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>PermissionDefinition</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>PermissionDefinition</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // validate the optional field `child`
        if (data['child']) { // data not null
          Child.validateJSON(data['child']);
        }

        return true;
    }


}



/**
 * The name of the permission, which follows a specific string pattern and has a maximum byte size.
 * @member {String} name
 */
PermissionDefinition.prototype['name'] = undefined;

/**
 * @member {module:model/Child} child
 */
PermissionDefinition.prototype['child'] = undefined;






export default PermissionDefinition;

