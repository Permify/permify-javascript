/**
 * Permify API
 * Permify is an open source authorization service for creating fine-grained and scalable authorization systems.
 *
 * The version of the OpenAPI document: v0.9.1
 * Contact: hello@permify.co
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import Attribute from './Attribute';
import DataWriteRequestMetadata from './DataWriteRequestMetadata';
import Tuple from './Tuple';

/**
 * The DataWriteRequest model module.
 * @module model/DataWriteRequest
 * @version v0.9.1
 */
class DataWriteRequest {
    /**
     * Constructs a new <code>DataWriteRequest</code>.
     * DataWriteRequest defines the structure of a request for writing data. It contains the necessary information such as tenant_id, metadata, tuples and attributes for the write operation.
     * @alias module:model/DataWriteRequest
     */
    constructor() { 
        
        DataWriteRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DataWriteRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DataWriteRequest} obj Optional instance to populate.
     * @return {module:model/DataWriteRequest} The populated <code>DataWriteRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DataWriteRequest();

            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = DataWriteRequestMetadata.constructFromObject(data['metadata']);
            }
            if (data.hasOwnProperty('tuples')) {
                obj['tuples'] = ApiClient.convertToType(data['tuples'], [Tuple]);
            }
            if (data.hasOwnProperty('attributes')) {
                obj['attributes'] = ApiClient.convertToType(data['attributes'], [Attribute]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>DataWriteRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DataWriteRequest</code>.
     */
    static validateJSON(data) {
        // validate the optional field `metadata`
        if (data['metadata']) { // data not null
          DataWriteRequestMetadata.validateJSON(data['metadata']);
        }
        if (data['tuples']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['tuples'])) {
                throw new Error("Expected the field `tuples` to be an array in the JSON data but got " + data['tuples']);
            }
            // validate the optional field `tuples` (array)
            for (const item of data['tuples']) {
                Tuple.validateJSON(item);
            };
        }
        if (data['attributes']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['attributes'])) {
                throw new Error("Expected the field `attributes` to be an array in the JSON data but got " + data['attributes']);
            }
            // validate the optional field `attributes` (array)
            for (const item of data['attributes']) {
                Attribute.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * @member {module:model/DataWriteRequestMetadata} metadata
 */
DataWriteRequest.prototype['metadata'] = undefined;

/**
 * tuples contains the list of tuples (entity-relation-entity triples) that need to be written.
 * @member {Array.<module:model/Tuple>} tuples
 */
DataWriteRequest.prototype['tuples'] = undefined;

/**
 * attributes contains the list of attributes (entity-attribute-value triples) that need to be written.
 * @member {Array.<module:model/Attribute>} attributes
 */
DataWriteRequest.prototype['attributes'] = undefined;






export default DataWriteRequest;

