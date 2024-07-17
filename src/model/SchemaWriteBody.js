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

/**
 * The SchemaWriteBody model module.
 * @module model/SchemaWriteBody
 * @version v0.10.0
 */
class SchemaWriteBody {
    /**
     * Constructs a new <code>SchemaWriteBody</code>.
     * SchemaWriteRequest is the request message for the Write method in the Schema service. It contains tenant_id and the schema to be written.
     * @alias module:model/SchemaWriteBody
     */
    constructor() { 
        
        SchemaWriteBody.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SchemaWriteBody</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SchemaWriteBody} obj Optional instance to populate.
     * @return {module:model/SchemaWriteBody} The populated <code>SchemaWriteBody</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SchemaWriteBody();

            if (data.hasOwnProperty('schema')) {
                obj['schema'] = ApiClient.convertToType(data['schema'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>SchemaWriteBody</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SchemaWriteBody</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['schema'] && !(typeof data['schema'] === 'string' || data['schema'] instanceof String)) {
            throw new Error("Expected the field `schema` to be a primitive type in the JSON string but got " + data['schema']);
        }

        return true;
    }


}



/**
 * schema is the string representation of the schema to be written.
 * @member {String} schema
 */
SchemaWriteBody.prototype['schema'] = undefined;






export default SchemaWriteBody;

