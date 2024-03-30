/**
 * Permify API
 * Permify is an open source authorization service for creating fine-grained and scalable authorization systems.
 *
 * The version of the OpenAPI document: v0.8.0
 * Contact: hello@permify.co
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import DataBundle from './DataBundle';

/**
 * The BundleWriteRequest model module.
 * @module model/BundleWriteRequest
 * @version v0.8.0
 */
class BundleWriteRequest {
    /**
     * Constructs a new <code>BundleWriteRequest</code>.
     * BundleWriteRequest is used to request the writing of a bundle. It contains the tenant_id to identify the tenant and the Bundles object.
     * @alias module:model/BundleWriteRequest
     */
    constructor() { 
        
        BundleWriteRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>BundleWriteRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BundleWriteRequest} obj Optional instance to populate.
     * @return {module:model/BundleWriteRequest} The populated <code>BundleWriteRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BundleWriteRequest();

            if (data.hasOwnProperty('bundles')) {
                obj['bundles'] = ApiClient.convertToType(data['bundles'], [DataBundle]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>BundleWriteRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>BundleWriteRequest</code>.
     */
    static validateJSON(data) {
        if (data['bundles']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['bundles'])) {
                throw new Error("Expected the field `bundles` to be an array in the JSON data but got " + data['bundles']);
            }
            // validate the optional field `bundles` (array)
            for (const item of data['bundles']) {
                DataBundle.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * Contains the bundle data to be written.
 * @member {Array.<module:model/DataBundle>} bundles
 */
BundleWriteRequest.prototype['bundles'] = undefined;






export default BundleWriteRequest;

