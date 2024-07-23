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
import RelationshipWriteRequestMetadata from './RelationshipWriteRequestMetadata';
import Tuple from './Tuple';

/**
 * The WriteRelationshipsBody model module.
 * @module model/WriteRelationshipsBody
 * @version v0.10.1
 */
class WriteRelationshipsBody {
    /**
     * Constructs a new <code>WriteRelationshipsBody</code>.
     * Represents a request to write relationship data.
     * @alias module:model/WriteRelationshipsBody
     */
    constructor() { 
        
        WriteRelationshipsBody.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>WriteRelationshipsBody</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WriteRelationshipsBody} obj Optional instance to populate.
     * @return {module:model/WriteRelationshipsBody} The populated <code>WriteRelationshipsBody</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WriteRelationshipsBody();

            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = RelationshipWriteRequestMetadata.constructFromObject(data['metadata']);
            }
            if (data.hasOwnProperty('tuples')) {
                obj['tuples'] = ApiClient.convertToType(data['tuples'], [Tuple]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>WriteRelationshipsBody</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>WriteRelationshipsBody</code>.
     */
    static validateJSON(data) {
        // validate the optional field `metadata`
        if (data['metadata']) { // data not null
          RelationshipWriteRequestMetadata.validateJSON(data['metadata']);
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

        return true;
    }


}



/**
 * @member {module:model/RelationshipWriteRequestMetadata} metadata
 */
WriteRelationshipsBody.prototype['metadata'] = undefined;

/**
 * List of tuples for the request. Must have between 1 and 100 items.
 * @member {Array.<module:model/Tuple>} tuples
 */
WriteRelationshipsBody.prototype['tuples'] = undefined;






export default WriteRelationshipsBody;

