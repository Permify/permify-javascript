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

/**
 * The RelationshipDeleteResponse model module.
 * @module model/RelationshipDeleteResponse
 * @version v0.8.5
 */
class RelationshipDeleteResponse {
    /**
     * Constructs a new <code>RelationshipDeleteResponse</code>.
     * @alias module:model/RelationshipDeleteResponse
     */
    constructor() { 
        
        RelationshipDeleteResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>RelationshipDeleteResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RelationshipDeleteResponse} obj Optional instance to populate.
     * @return {module:model/RelationshipDeleteResponse} The populated <code>RelationshipDeleteResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RelationshipDeleteResponse();

            if (data.hasOwnProperty('snap_token')) {
                obj['snap_token'] = ApiClient.convertToType(data['snap_token'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>RelationshipDeleteResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>RelationshipDeleteResponse</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['snap_token'] && !(typeof data['snap_token'] === 'string' || data['snap_token'] instanceof String)) {
            throw new Error("Expected the field `snap_token` to be a primitive type in the JSON string but got " + data['snap_token']);
        }

        return true;
    }


}



/**
 * The snap token to avoid stale cache, see more details on [Snap Tokens](../../operations/snap-tokens)
 * @member {String} snap_token
 */
RelationshipDeleteResponse.prototype['snap_token'] = undefined;






export default RelationshipDeleteResponse;

