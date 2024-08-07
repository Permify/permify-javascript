/**
 * Permify API
 * Permify is an open source authorization service for creating fine-grained and scalable authorization systems.
 *
 * The version of the OpenAPI document: v0.10.0
 * Contact: hello@permify.co
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import EntityFilter from './EntityFilter';

/**
 * The AttributeFilter model module.
 * @module model/AttributeFilter
 * @version v0.10.0
 */
class AttributeFilter {
    /**
     * Constructs a new <code>AttributeFilter</code>.
     * AttributeFilter is used to filter attributes based on the entity and attribute names.
     * @alias module:model/AttributeFilter
     */
    constructor() { 
        
        AttributeFilter.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AttributeFilter</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AttributeFilter} obj Optional instance to populate.
     * @return {module:model/AttributeFilter} The populated <code>AttributeFilter</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AttributeFilter();

            if (data.hasOwnProperty('entity')) {
                obj['entity'] = EntityFilter.constructFromObject(data['entity']);
            }
            if (data.hasOwnProperty('attributes')) {
                obj['attributes'] = ApiClient.convertToType(data['attributes'], ['String']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>AttributeFilter</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>AttributeFilter</code>.
     */
    static validateJSON(data) {
        // validate the optional field `entity`
        if (data['entity']) { // data not null
          EntityFilter.validateJSON(data['entity']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['attributes'])) {
            throw new Error("Expected the field `attributes` to be an array in the JSON data but got " + data['attributes']);
        }

        return true;
    }


}



/**
 * @member {module:model/EntityFilter} entity
 */
AttributeFilter.prototype['entity'] = undefined;

/**
 * @member {Array.<String>} attributes
 */
AttributeFilter.prototype['attributes'] = undefined;






export default AttributeFilter;

