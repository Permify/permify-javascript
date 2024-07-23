/**
 * Permify API
 * Permify is an open source authorization service for creating fine-grained and scalable authorization systems.
 *
 * The version of the OpenAPI document: v0.10.1
 * Contact: hello@permify.co
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import Expr from './Expr';

/**
 * The Entry model module.
 * @module model/Entry
 * @version v0.10.1
 */
class Entry {
    /**
     * Constructs a new <code>Entry</code>.
     * Represents an entry.
     * @alias module:model/Entry
     */
    constructor() { 
        
        Entry.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Entry</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Entry} obj Optional instance to populate.
     * @return {module:model/Entry} The populated <code>Entry</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Entry();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('fieldKey')) {
                obj['fieldKey'] = ApiClient.convertToType(data['fieldKey'], 'String');
            }
            if (data.hasOwnProperty('mapKey')) {
                obj['mapKey'] = Expr.constructFromObject(data['mapKey']);
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = Expr.constructFromObject(data['value']);
            }
            if (data.hasOwnProperty('optionalEntry')) {
                obj['optionalEntry'] = ApiClient.convertToType(data['optionalEntry'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Entry</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Entry</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // ensure the json data is a string
        if (data['fieldKey'] && !(typeof data['fieldKey'] === 'string' || data['fieldKey'] instanceof String)) {
            throw new Error("Expected the field `fieldKey` to be a primitive type in the JSON string but got " + data['fieldKey']);
        }
        // validate the optional field `mapKey`
        if (data['mapKey']) { // data not null
          Expr.validateJSON(data['mapKey']);
        }
        // validate the optional field `value`
        if (data['value']) { // data not null
          Expr.validateJSON(data['value']);
        }

        return true;
    }


}



/**
 * Required. An id assigned to this node by the parser which is unique in a given expression tree. This is used to associate type information and other attributes to the node.
 * @member {String} id
 */
Entry.prototype['id'] = undefined;

/**
 * The field key for a message creator statement.
 * @member {String} fieldKey
 */
Entry.prototype['fieldKey'] = undefined;

/**
 * @member {module:model/Expr} mapKey
 */
Entry.prototype['mapKey'] = undefined;

/**
 * @member {module:model/Expr} value
 */
Entry.prototype['value'] = undefined;

/**
 * Whether the key-value pair is optional.
 * @member {Boolean} optionalEntry
 */
Entry.prototype['optionalEntry'] = undefined;






export default Entry;

