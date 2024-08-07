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
import SchemaReadRequestMetadata from './SchemaReadRequestMetadata';

/**
 * The SchemaReadBody model module.
 * @module model/SchemaReadBody
 * @version v0.10.0
 */
class SchemaReadBody {
    /**
     * Constructs a new <code>SchemaReadBody</code>.
     * SchemaReadRequest is the request message for the Read method in the Schema service. It contains tenant_id and metadata about the schema to be read.
     * @alias module:model/SchemaReadBody
     */
    constructor() { 
        
        SchemaReadBody.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SchemaReadBody</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SchemaReadBody} obj Optional instance to populate.
     * @return {module:model/SchemaReadBody} The populated <code>SchemaReadBody</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SchemaReadBody();

            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = SchemaReadRequestMetadata.constructFromObject(data['metadata']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>SchemaReadBody</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SchemaReadBody</code>.
     */
    static validateJSON(data) {
        // validate the optional field `metadata`
        if (data['metadata']) { // data not null
          SchemaReadRequestMetadata.validateJSON(data['metadata']);
        }

        return true;
    }


}



/**
 * @member {module:model/SchemaReadRequestMetadata} metadata
 */
SchemaReadBody.prototype['metadata'] = undefined;






export default SchemaReadBody;

