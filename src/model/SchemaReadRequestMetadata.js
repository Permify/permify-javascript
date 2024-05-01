/**
 * Permify API
 * Permify is an open source authorization service for creating fine-grained and scalable authorization systems.
 *
 * The version of the OpenAPI document: v0.8.2
 * Contact: hello@permify.co
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The SchemaReadRequestMetadata model module.
 * @module model/SchemaReadRequestMetadata
 * @version v0.8.2
 */
class SchemaReadRequestMetadata {
    /**
     * Constructs a new <code>SchemaReadRequestMetadata</code>.
     * SchemaReadRequestMetadata provides additional information for the Schema Read request. It contains schema_version to specify which version of the schema should be read.
     * @alias module:model/SchemaReadRequestMetadata
     */
    constructor() { 
        
        SchemaReadRequestMetadata.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SchemaReadRequestMetadata</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SchemaReadRequestMetadata} obj Optional instance to populate.
     * @return {module:model/SchemaReadRequestMetadata} The populated <code>SchemaReadRequestMetadata</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SchemaReadRequestMetadata();

            if (data.hasOwnProperty('schema_version')) {
                obj['schema_version'] = ApiClient.convertToType(data['schema_version'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>SchemaReadRequestMetadata</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SchemaReadRequestMetadata</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['schema_version'] && !(typeof data['schema_version'] === 'string' || data['schema_version'] instanceof String)) {
            throw new Error("Expected the field `schema_version` to be a primitive type in the JSON string but got " + data['schema_version']);
        }

        return true;
    }


}



/**
 * schema_version is the string that identifies the version of the schema to be read.
 * @member {String} schema_version
 */
SchemaReadRequestMetadata.prototype['schema_version'] = undefined;






export default SchemaReadRequestMetadata;

