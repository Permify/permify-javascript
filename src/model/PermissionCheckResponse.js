/**
 * Permify API
 * Permify is an open source authorization service for creating fine-grained and scalable authorization systems.
 *
 * The version of the OpenAPI document: v0.8.7
 * Contact: hello@permify.co
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import CheckResult from './CheckResult';
import PermissionCheckResponseMetadata from './PermissionCheckResponseMetadata';

/**
 * The PermissionCheckResponse model module.
 * @module model/PermissionCheckResponse
 * @version v0.8.7
 */
class PermissionCheckResponse {
    /**
     * Constructs a new <code>PermissionCheckResponse</code>.
     * PermissionCheckResponse is the response message for the Check method in the Permission service.
     * @alias module:model/PermissionCheckResponse
     */
    constructor() { 
        
        PermissionCheckResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PermissionCheckResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PermissionCheckResponse} obj Optional instance to populate.
     * @return {module:model/PermissionCheckResponse} The populated <code>PermissionCheckResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PermissionCheckResponse();

            if (data.hasOwnProperty('can')) {
                obj['can'] = CheckResult.constructFromObject(data['can']);
            }
            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = PermissionCheckResponseMetadata.constructFromObject(data['metadata']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>PermissionCheckResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>PermissionCheckResponse</code>.
     */
    static validateJSON(data) {
        // validate the optional field `metadata`
        if (data['metadata']) { // data not null
          PermissionCheckResponseMetadata.validateJSON(data['metadata']);
        }

        return true;
    }


}



/**
 * @member {module:model/CheckResult} can
 */
PermissionCheckResponse.prototype['can'] = undefined;

/**
 * @member {module:model/PermissionCheckResponseMetadata} metadata
 */
PermissionCheckResponse.prototype['metadata'] = undefined;






export default PermissionCheckResponse;

