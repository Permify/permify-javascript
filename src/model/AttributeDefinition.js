/**
 * Permify API
 * Permify is an open source authorization service for creating fine-grained and scalable authorization systems.
 *
 * The version of the OpenAPI document: v0.7.8
 * Contact: hello@permify.co
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import AttributeType from './AttributeType';

/**
 * The AttributeDefinition model module.
 * @module model/AttributeDefinition
 * @version v0.7.8
 */
class AttributeDefinition {
    /**
     * Constructs a new <code>AttributeDefinition</code>.
     * The AttributeDefinition message provides detailed information about a specific attribute.
     * @alias module:model/AttributeDefinition
     */
    constructor() { 
        
        AttributeDefinition.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AttributeDefinition</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AttributeDefinition} obj Optional instance to populate.
     * @return {module:model/AttributeDefinition} The populated <code>AttributeDefinition</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AttributeDefinition();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = AttributeType.constructFromObject(data['type']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>AttributeDefinition</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>AttributeDefinition</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }

        return true;
    }


}



/**
 * The name of the attribute, which follows a specific string pattern and has a maximum byte size.
 * @member {String} name
 */
AttributeDefinition.prototype['name'] = undefined;

/**
 * @member {module:model/AttributeType} type
 */
AttributeDefinition.prototype['type'] = undefined;






export default AttributeDefinition;

