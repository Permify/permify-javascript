/**
 * Permify API
 * Permify is an open source authorization service for creating fine-grained and scalable authorization systems.
 *
 * The version of the OpenAPI document: v0.8.4
 * Contact: hello@permify.co
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The PermissionCheckResponseMetadata model module.
 * @module model/PermissionCheckResponseMetadata
 * @version v0.8.4
 */
class PermissionCheckResponseMetadata {
    /**
     * Constructs a new <code>PermissionCheckResponseMetadata</code>.
     * PermissionCheckResponseMetadata metadata for the PermissionCheckResponse.
     * @alias module:model/PermissionCheckResponseMetadata
     */
    constructor() { 
        
        PermissionCheckResponseMetadata.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PermissionCheckResponseMetadata</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PermissionCheckResponseMetadata} obj Optional instance to populate.
     * @return {module:model/PermissionCheckResponseMetadata} The populated <code>PermissionCheckResponseMetadata</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PermissionCheckResponseMetadata();

            if (data.hasOwnProperty('check_count')) {
                obj['check_count'] = ApiClient.convertToType(data['check_count'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>PermissionCheckResponseMetadata</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>PermissionCheckResponseMetadata</code>.
     */
    static validateJSON(data) {

        return true;
    }


}



/**
 * The count of the checks performed.
 * @member {Number} check_count
 */
PermissionCheckResponseMetadata.prototype['check_count'] = undefined;






export default PermissionCheckResponseMetadata;

