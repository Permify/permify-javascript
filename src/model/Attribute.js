/**
 * Permify API
 * Permify is an open source authorization service for creating fine-grained and scalable authorization systems.
 *
 * The version of the OpenAPI document: v0.8.5
 * Contact: hello@permify.co
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import Any from './Any';
import Entity from './Entity';

/**
 * The Attribute model module.
 * @module model/Attribute
 * @version v0.8.5
 */
class Attribute {
    /**
     * Constructs a new <code>Attribute</code>.
     * Attribute represents an attribute of an entity with a specific type and value.
     * @alias module:model/Attribute
     */
    constructor() { 
        
        Attribute.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Attribute</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Attribute} obj Optional instance to populate.
     * @return {module:model/Attribute} The populated <code>Attribute</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Attribute();

            if (data.hasOwnProperty('entity')) {
                obj['entity'] = Entity.constructFromObject(data['entity']);
            }
            if (data.hasOwnProperty('attribute')) {
                obj['attribute'] = ApiClient.convertToType(data['attribute'], 'String');
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = Any.constructFromObject(data['value']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Attribute</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Attribute</code>.
     */
    static validateJSON(data) {
        // validate the optional field `entity`
        if (data['entity']) { // data not null
          Entity.validateJSON(data['entity']);
        }
        // ensure the json data is a string
        if (data['attribute'] && !(typeof data['attribute'] === 'string' || data['attribute'] instanceof String)) {
            throw new Error("Expected the field `attribute` to be a primitive type in the JSON string but got " + data['attribute']);
        }

        return true;
    }


}



/**
 * @member {module:model/Entity} entity
 */
Attribute.prototype['entity'] = undefined;

/**
 * @member {String} attribute
 */
Attribute.prototype['attribute'] = undefined;

/**
 * @member {module:model/Any} value
 */
Attribute.prototype['value'] = undefined;






export default Attribute;

