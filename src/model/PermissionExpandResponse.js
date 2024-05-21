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
import Expand from './Expand';

/**
 * The PermissionExpandResponse model module.
 * @module model/PermissionExpandResponse
 * @version v0.8.7
 */
class PermissionExpandResponse {
    /**
     * Constructs a new <code>PermissionExpandResponse</code>.
     * PermissionExpandResponse is the response message for the Expand method in the Permission service.
     * @alias module:model/PermissionExpandResponse
     */
    constructor() { 
        
        PermissionExpandResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PermissionExpandResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PermissionExpandResponse} obj Optional instance to populate.
     * @return {module:model/PermissionExpandResponse} The populated <code>PermissionExpandResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PermissionExpandResponse();

            if (data.hasOwnProperty('tree')) {
                obj['tree'] = Expand.constructFromObject(data['tree']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>PermissionExpandResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>PermissionExpandResponse</code>.
     */
    static validateJSON(data) {
        // validate the optional field `tree`
        if (data['tree']) { // data not null
          Expand.validateJSON(data['tree']);
        }

        return true;
    }


}



/**
 * @member {module:model/Expand} tree
 */
PermissionExpandResponse.prototype['tree'] = undefined;






export default PermissionExpandResponse;

