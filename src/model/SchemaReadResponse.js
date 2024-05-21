/**
 * Permify API
 * Permify is an open source authorization service for creating fine-grained and scalable authorization systems.
 *
 * The version of the OpenAPI document: v0.8.6
 * Contact: hello@permify.co
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import SchemaDefinition from './SchemaDefinition';

/**
 * The SchemaReadResponse model module.
 * @module model/SchemaReadResponse
 * @version v0.8.6
 */
class SchemaReadResponse {
    /**
     * Constructs a new <code>SchemaReadResponse</code>.
     * SchemaReadResponse is the response message for the Read method in the Schema service. It returns the requested schema.
     * @alias module:model/SchemaReadResponse
     */
    constructor() { 
        
        SchemaReadResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SchemaReadResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SchemaReadResponse} obj Optional instance to populate.
     * @return {module:model/SchemaReadResponse} The populated <code>SchemaReadResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SchemaReadResponse();

            if (data.hasOwnProperty('schema')) {
                obj['schema'] = SchemaDefinition.constructFromObject(data['schema']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>SchemaReadResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SchemaReadResponse</code>.
     */
    static validateJSON(data) {
        // validate the optional field `schema`
        if (data['schema']) { // data not null
          SchemaDefinition.validateJSON(data['schema']);
        }

        return true;
    }


}



/**
 * @member {module:model/SchemaDefinition} schema
 */
SchemaReadResponse.prototype['schema'] = undefined;






export default SchemaReadResponse;

