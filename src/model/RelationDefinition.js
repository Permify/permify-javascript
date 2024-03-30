/**
 * Permify API
 * Permify is an open source authorization service for creating fine-grained and scalable authorization systems.
 *
 * The version of the OpenAPI document: v0.8.0
 * Contact: hello@permify.co
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import RelationReference from './RelationReference';

/**
 * The RelationDefinition model module.
 * @module model/RelationDefinition
 * @version v0.8.0
 */
class RelationDefinition {
    /**
     * Constructs a new <code>RelationDefinition</code>.
     * The RelationDefinition message provides detailed information about a specific relation.
     * @alias module:model/RelationDefinition
     */
    constructor() { 
        
        RelationDefinition.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>RelationDefinition</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RelationDefinition} obj Optional instance to populate.
     * @return {module:model/RelationDefinition} The populated <code>RelationDefinition</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RelationDefinition();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('relationReferences')) {
                obj['relationReferences'] = ApiClient.convertToType(data['relationReferences'], [RelationReference]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>RelationDefinition</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>RelationDefinition</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        if (data['relationReferences']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['relationReferences'])) {
                throw new Error("Expected the field `relationReferences` to be an array in the JSON data but got " + data['relationReferences']);
            }
            // validate the optional field `relationReferences` (array)
            for (const item of data['relationReferences']) {
                RelationReference.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * The name of the relation, which follows a specific string pattern and has a maximum byte size.
 * @member {String} name
 */
RelationDefinition.prototype['name'] = undefined;

/**
 * A list of references to other relations.
 * @member {Array.<module:model/RelationReference>} relationReferences
 */
RelationDefinition.prototype['relationReferences'] = undefined;






export default RelationDefinition;

