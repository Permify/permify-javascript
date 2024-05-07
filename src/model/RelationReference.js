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

/**
 * The RelationReference model module.
 * @module model/RelationReference
 * @version v0.8.3
 */
class RelationReference {
    /**
     * Constructs a new <code>RelationReference</code>.
     * The RelationReference message provides a reference to a specific relation.
     * @alias module:model/RelationReference
     */
    constructor() { 
        
        RelationReference.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>RelationReference</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RelationReference} obj Optional instance to populate.
     * @return {module:model/RelationReference} The populated <code>RelationReference</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RelationReference();

            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('relation')) {
                obj['relation'] = ApiClient.convertToType(data['relation'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>RelationReference</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>RelationReference</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['type'] && !(typeof data['type'] === 'string' || data['type'] instanceof String)) {
            throw new Error("Expected the field `type` to be a primitive type in the JSON string but got " + data['type']);
        }
        // ensure the json data is a string
        if (data['relation'] && !(typeof data['relation'] === 'string' || data['relation'] instanceof String)) {
            throw new Error("Expected the field `relation` to be a primitive type in the JSON string but got " + data['relation']);
        }

        return true;
    }


}



/**
 * The type of the referenced entity, which follows a specific string pattern and has a maximum byte size.
 * @member {String} type
 */
RelationReference.prototype['type'] = undefined;

/**
 * The name of the referenced relation, which follows a specific string pattern and has a maximum byte size.
 * @member {String} relation
 */
RelationReference.prototype['relation'] = undefined;






export default RelationReference;

