/**
 * Permify API
 * Permify is an open source authorization service for creating fine-grained and scalable authorization systems.
 *
 * The version of the OpenAPI document: v0.8.8
 * Contact: hello@permify.co
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import RelationshipReadRequestMetadata from './RelationshipReadRequestMetadata';
import TupleFilter from './TupleFilter';

/**
 * The DataRelationshipsReadRequest model module.
 * @module model/DataRelationshipsReadRequest
 * @version v0.8.8
 */
class DataRelationshipsReadRequest {
    /**
     * Constructs a new <code>DataRelationshipsReadRequest</code>.
     * RelationshipReadRequest defines the structure of a request for reading relationships. It contains the necessary information such as tenant_id, metadata, and filter for the read operation.
     * @alias module:model/DataRelationshipsReadRequest
     */
    constructor() { 
        
        DataRelationshipsReadRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DataRelationshipsReadRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DataRelationshipsReadRequest} obj Optional instance to populate.
     * @return {module:model/DataRelationshipsReadRequest} The populated <code>DataRelationshipsReadRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DataRelationshipsReadRequest();

            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = RelationshipReadRequestMetadata.constructFromObject(data['metadata']);
            }
            if (data.hasOwnProperty('filter')) {
                obj['filter'] = TupleFilter.constructFromObject(data['filter']);
            }
            if (data.hasOwnProperty('page_size')) {
                obj['page_size'] = ApiClient.convertToType(data['page_size'], 'Number');
            }
            if (data.hasOwnProperty('continuous_token')) {
                obj['continuous_token'] = ApiClient.convertToType(data['continuous_token'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>DataRelationshipsReadRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DataRelationshipsReadRequest</code>.
     */
    static validateJSON(data) {
        // validate the optional field `metadata`
        if (data['metadata']) { // data not null
          RelationshipReadRequestMetadata.validateJSON(data['metadata']);
        }
        // validate the optional field `filter`
        if (data['filter']) { // data not null
          TupleFilter.validateJSON(data['filter']);
        }
        // ensure the json data is a string
        if (data['continuous_token'] && !(typeof data['continuous_token'] === 'string' || data['continuous_token'] instanceof String)) {
            throw new Error("Expected the field `continuous_token` to be a primitive type in the JSON string but got " + data['continuous_token']);
        }

        return true;
    }


}



/**
 * @member {module:model/RelationshipReadRequestMetadata} metadata
 */
DataRelationshipsReadRequest.prototype['metadata'] = undefined;

/**
 * @member {module:model/TupleFilter} filter
 */
DataRelationshipsReadRequest.prototype['filter'] = undefined;

/**
 * page_size specifies the number of results to return in a single page. If more results are available, a continuous_token is included in the response.
 * @member {Number} page_size
 */
DataRelationshipsReadRequest.prototype['page_size'] = undefined;

/**
 * continuous_token is used in case of paginated reads to get the next page of results.
 * @member {String} continuous_token
 */
DataRelationshipsReadRequest.prototype['continuous_token'] = undefined;






export default DataRelationshipsReadRequest;

