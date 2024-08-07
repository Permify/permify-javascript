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
 * The PermissionSubjectPermissionRequestMetadata model module.
 * @module model/PermissionSubjectPermissionRequestMetadata
 * @version v0.10.0
 */
class PermissionSubjectPermissionRequestMetadata {
    /**
     * Constructs a new <code>PermissionSubjectPermissionRequestMetadata</code>.
     * PermissionSubjectPermissionRequestMetadata metadata for the PermissionSubjectPermissionRequest.
     * @alias module:model/PermissionSubjectPermissionRequestMetadata
     */
    constructor() { 
        
        PermissionSubjectPermissionRequestMetadata.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PermissionSubjectPermissionRequestMetadata</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PermissionSubjectPermissionRequestMetadata} obj Optional instance to populate.
     * @return {module:model/PermissionSubjectPermissionRequestMetadata} The populated <code>PermissionSubjectPermissionRequestMetadata</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PermissionSubjectPermissionRequestMetadata();

            if (data.hasOwnProperty('schema_version')) {
                obj['schema_version'] = ApiClient.convertToType(data['schema_version'], 'String');
            }
            if (data.hasOwnProperty('snap_token')) {
                obj['snap_token'] = ApiClient.convertToType(data['snap_token'], 'String');
            }
            if (data.hasOwnProperty('only_permission')) {
                obj['only_permission'] = ApiClient.convertToType(data['only_permission'], 'Boolean');
            }
            if (data.hasOwnProperty('depth')) {
                obj['depth'] = ApiClient.convertToType(data['depth'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>PermissionSubjectPermissionRequestMetadata</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>PermissionSubjectPermissionRequestMetadata</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['schema_version'] && !(typeof data['schema_version'] === 'string' || data['schema_version'] instanceof String)) {
            throw new Error("Expected the field `schema_version` to be a primitive type in the JSON string but got " + data['schema_version']);
        }
        // ensure the json data is a string
        if (data['snap_token'] && !(typeof data['snap_token'] === 'string' || data['snap_token'] instanceof String)) {
            throw new Error("Expected the field `snap_token` to be a primitive type in the JSON string but got " + data['snap_token']);
        }

        return true;
    }


}



/**
 * Version of the schema.
 * @member {String} schema_version
 */
PermissionSubjectPermissionRequestMetadata.prototype['schema_version'] = undefined;

/**
 * The snap token to avoid stale cache, see more details on [Snap Tokens](../../operations/snap-tokens).
 * @member {String} snap_token
 */
PermissionSubjectPermissionRequestMetadata.prototype['snap_token'] = undefined;

/**
 * Whether to only check permissions.
 * @member {Boolean} only_permission
 */
PermissionSubjectPermissionRequestMetadata.prototype['only_permission'] = undefined;

/**
 * Query limit when if recursive database queries got in loop.
 * @member {Number} depth
 */
PermissionSubjectPermissionRequestMetadata.prototype['depth'] = undefined;






export default PermissionSubjectPermissionRequestMetadata;

