/**
 * Permify API
 * Permify is an open source authorization service for creating fine-grained and scalable authorization systems.
 *
 * The version of the OpenAPI document: v0.7.9
 * Contact: hello@permify.co
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The RelationshipReadRequestMetadata model module.
 * @module model/RelationshipReadRequestMetadata
 * @version v0.7.9
 */
class RelationshipReadRequestMetadata {
    /**
     * Constructs a new <code>RelationshipReadRequestMetadata</code>.
     * RelationshipReadRequestMetadata defines the structure of the metadata for a read request focused on relationships. It includes the snap_token associated with a particular state of the database.
     * @alias module:model/RelationshipReadRequestMetadata
     */
    constructor() { 
        
        RelationshipReadRequestMetadata.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>RelationshipReadRequestMetadata</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RelationshipReadRequestMetadata} obj Optional instance to populate.
     * @return {module:model/RelationshipReadRequestMetadata} The populated <code>RelationshipReadRequestMetadata</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RelationshipReadRequestMetadata();

            if (data.hasOwnProperty('snap_token')) {
                obj['snap_token'] = ApiClient.convertToType(data['snap_token'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>RelationshipReadRequestMetadata</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>RelationshipReadRequestMetadata</code>.
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
RelationshipReadRequestMetadata.prototype['snap_token'] = undefined;






export default RelationshipReadRequestMetadata;

