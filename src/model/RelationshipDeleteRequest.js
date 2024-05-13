/**
 * Permify API
 * Permify is an open source authorization service for creating fine-grained and scalable authorization systems.
 *
 * The version of the OpenAPI document: v0.8.5
 * Contact: hello@permify.co
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import TupleFilter from './TupleFilter';

/**
 * The RelationshipDeleteRequest model module.
 * @module model/RelationshipDeleteRequest
 * @version v0.8.5
 */
class RelationshipDeleteRequest {
    /**
     * Constructs a new <code>RelationshipDeleteRequest</code>.
     * @alias module:model/RelationshipDeleteRequest
     */
    constructor() { 
        
        RelationshipDeleteRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>RelationshipDeleteRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RelationshipDeleteRequest} obj Optional instance to populate.
     * @return {module:model/RelationshipDeleteRequest} The populated <code>RelationshipDeleteRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RelationshipDeleteRequest();

            if (data.hasOwnProperty('filter')) {
                obj['filter'] = TupleFilter.constructFromObject(data['filter']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>RelationshipDeleteRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>RelationshipDeleteRequest</code>.
     */
    static validateJSON(data) {
        // validate the optional field `filter`
        if (data['filter']) { // data not null
          TupleFilter.validateJSON(data['filter']);
        }

        return true;
    }


}



/**
 * @member {module:model/TupleFilter} filter
 */
RelationshipDeleteRequest.prototype['filter'] = undefined;






export default RelationshipDeleteRequest;

