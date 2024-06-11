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
import CheckResult from './CheckResult';

/**
 * The PermissionSubjectPermissionResponse model module.
 * @module model/PermissionSubjectPermissionResponse
 * @version v0.9.1
 */
class PermissionSubjectPermissionResponse {
    /**
     * Constructs a new <code>PermissionSubjectPermissionResponse</code>.
     * PermissionSubjectPermissionResponse is the response message for the SubjectPermission method in the Permission service.
     * @alias module:model/PermissionSubjectPermissionResponse
     */
    constructor() { 
        
        PermissionSubjectPermissionResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PermissionSubjectPermissionResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PermissionSubjectPermissionResponse} obj Optional instance to populate.
     * @return {module:model/PermissionSubjectPermissionResponse} The populated <code>PermissionSubjectPermissionResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PermissionSubjectPermissionResponse();

            if (data.hasOwnProperty('results')) {
                obj['results'] = ApiClient.convertToType(data['results'], {'String': CheckResult});
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>PermissionSubjectPermissionResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>PermissionSubjectPermissionResponse</code>.
     */
    static validateJSON(data) {

        return true;
    }


}



/**
 * Map of results for each permission check.
 * @member {Object.<String, module:model/CheckResult>} results
 */
PermissionSubjectPermissionResponse.prototype['results'] = undefined;






export default PermissionSubjectPermissionResponse;

