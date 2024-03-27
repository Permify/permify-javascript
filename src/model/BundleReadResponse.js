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
import DataBundle from './DataBundle';

/**
 * The BundleReadResponse model module.
 * @module model/BundleReadResponse
 * @version v0.7.9
 */
class BundleReadResponse {
    /**
     * Constructs a new <code>BundleReadResponse</code>.
     * @alias module:model/BundleReadResponse
     */
    constructor() { 
        
        BundleReadResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>BundleReadResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BundleReadResponse} obj Optional instance to populate.
     * @return {module:model/BundleReadResponse} The populated <code>BundleReadResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BundleReadResponse();

            if (data.hasOwnProperty('bundle')) {
                obj['bundle'] = DataBundle.constructFromObject(data['bundle']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>BundleReadResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>BundleReadResponse</code>.
     */
    static validateJSON(data) {
        // validate the optional field `bundle`
        if (data['bundle']) { // data not null
          DataBundle.validateJSON(data['bundle']);
        }

        return true;
    }


}



/**
 * @member {module:model/DataBundle} bundle
 */
BundleReadResponse.prototype['bundle'] = undefined;






export default BundleReadResponse;

