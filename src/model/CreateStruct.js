/**
 * Permify API
 * Permify is an open source authorization service for creating fine-grained and scalable authorization systems.
 *
 * The version of the OpenAPI document: v0.9.9
 * Contact: hello@permify.co
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import Entry from './Entry';

/**
 * The CreateStruct model module.
 * @module model/CreateStruct
 * @version v0.9.9
 */
class CreateStruct {
    /**
     * Constructs a new <code>CreateStruct</code>.
     * A map or message creation expression.  Maps are constructed as &#x60;{&#39;key_name&#39;: &#39;value&#39;}&#x60;. Message construction is similar, but prefixed with a type name and composed of field ids: &#x60;types.MyType{field_id: &#39;value&#39;}&#x60;.
     * @alias module:model/CreateStruct
     */
    constructor() { 
        
        CreateStruct.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CreateStruct</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateStruct} obj Optional instance to populate.
     * @return {module:model/CreateStruct} The populated <code>CreateStruct</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateStruct();

            if (data.hasOwnProperty('messageName')) {
                obj['messageName'] = ApiClient.convertToType(data['messageName'], 'String');
            }
            if (data.hasOwnProperty('entries')) {
                obj['entries'] = ApiClient.convertToType(data['entries'], [Entry]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CreateStruct</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CreateStruct</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['messageName'] && !(typeof data['messageName'] === 'string' || data['messageName'] instanceof String)) {
            throw new Error("Expected the field `messageName` to be a primitive type in the JSON string but got " + data['messageName']);
        }
        if (data['entries']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['entries'])) {
                throw new Error("Expected the field `entries` to be an array in the JSON data but got " + data['entries']);
            }
            // validate the optional field `entries` (array)
            for (const item of data['entries']) {
                Entry.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * The type name of the message to be created, empty when creating map literals.
 * @member {String} messageName
 */
CreateStruct.prototype['messageName'] = undefined;

/**
 * The entries in the creation expression.
 * @member {Array.<module:model/Entry>} entries
 */
CreateStruct.prototype['entries'] = undefined;






export default CreateStruct;

