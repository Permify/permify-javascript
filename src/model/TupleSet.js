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
 * The TupleSet model module.
 * @module model/TupleSet
 * @version v0.8.3
 */
class TupleSet {
    /**
     * Constructs a new <code>TupleSet</code>.
     * TupleSet represents a set of tuples associated with a specific relation.
     * @alias module:model/TupleSet
     */
    constructor() { 
        
        TupleSet.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TupleSet</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TupleSet} obj Optional instance to populate.
     * @return {module:model/TupleSet} The populated <code>TupleSet</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TupleSet();

            if (data.hasOwnProperty('relation')) {
                obj['relation'] = ApiClient.convertToType(data['relation'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>TupleSet</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TupleSet</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['relation'] && !(typeof data['relation'] === 'string' || data['relation'] instanceof String)) {
            throw new Error("Expected the field `relation` to be a primitive type in the JSON string but got " + data['relation']);
        }

        return true;
    }


}



/**
 * @member {String} relation
 */
TupleSet.prototype['relation'] = undefined;






export default TupleSet;

