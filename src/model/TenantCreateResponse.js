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
import Tenant from './Tenant';

/**
 * The TenantCreateResponse model module.
 * @module model/TenantCreateResponse
 * @version v0.7.9
 */
class TenantCreateResponse {
    /**
     * Constructs a new <code>TenantCreateResponse</code>.
     * TenantCreateResponse is the message returned from the request to create a tenant.
     * @alias module:model/TenantCreateResponse
     */
    constructor() { 
        
        TenantCreateResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TenantCreateResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TenantCreateResponse} obj Optional instance to populate.
     * @return {module:model/TenantCreateResponse} The populated <code>TenantCreateResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TenantCreateResponse();

            if (data.hasOwnProperty('tenant')) {
                obj['tenant'] = Tenant.constructFromObject(data['tenant']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>TenantCreateResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TenantCreateResponse</code>.
     */
    static validateJSON(data) {
        // validate the optional field `tenant`
        if (data['tenant']) { // data not null
          Tenant.validateJSON(data['tenant']);
        }

        return true;
    }


}



/**
 * @member {module:model/Tenant} tenant
 */
TenantCreateResponse.prototype['tenant'] = undefined;






export default TenantCreateResponse;

