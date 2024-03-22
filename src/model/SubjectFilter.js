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

/**
 * The SubjectFilter model module.
 * @module model/SubjectFilter
 * @version v0.7.8
 */
class SubjectFilter {
    /**
     * Constructs a new <code>SubjectFilter</code>.
     * SubjectFilter is used to filter subjects based on the type, ids and relation.
     * @alias module:model/SubjectFilter
     */
    constructor() { 
        
        SubjectFilter.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SubjectFilter</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SubjectFilter} obj Optional instance to populate.
     * @return {module:model/SubjectFilter} The populated <code>SubjectFilter</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SubjectFilter();

            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('ids')) {
                obj['ids'] = ApiClient.convertToType(data['ids'], ['String']);
            }
            if (data.hasOwnProperty('relation')) {
                obj['relation'] = ApiClient.convertToType(data['relation'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>SubjectFilter</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SubjectFilter</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['type'] && !(typeof data['type'] === 'string' || data['type'] instanceof String)) {
            throw new Error("Expected the field `type` to be a primitive type in the JSON string but got " + data['type']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['ids'])) {
            throw new Error("Expected the field `ids` to be an array in the JSON data but got " + data['ids']);
        }
        // ensure the json data is a string
        if (data['relation'] && !(typeof data['relation'] === 'string' || data['relation'] instanceof String)) {
            throw new Error("Expected the field `relation` to be a primitive type in the JSON string but got " + data['relation']);
        }

        return true;
    }


}



/**
 * @member {String} type
 */
SubjectFilter.prototype['type'] = undefined;

/**
 * @member {Array.<String>} ids
 */
SubjectFilter.prototype['ids'] = undefined;

/**
 * @member {String} relation
 */
SubjectFilter.prototype['relation'] = undefined;






export default SubjectFilter;

