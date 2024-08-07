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
 * The BundleDeleteBody model module.
 * @module model/BundleDeleteBody
 * @version v0.10.0
 */
class BundleDeleteBody {
    /**
     * Constructs a new <code>BundleDeleteBody</code>.
     * BundleDeleteRequest is used to request the deletion of a bundle. It contains the tenant_id to specify the tenant and the name of the bundle to be deleted.
     * @alias module:model/BundleDeleteBody
     */
    constructor() { 
        
        BundleDeleteBody.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>BundleDeleteBody</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BundleDeleteBody} obj Optional instance to populate.
     * @return {module:model/BundleDeleteBody} The populated <code>BundleDeleteBody</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BundleDeleteBody();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>BundleDeleteBody</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>BundleDeleteBody</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }

        return true;
    }


}



/**
 * Name of the bundle to be deleted.
 * @member {String} name
 */
BundleDeleteBody.prototype['name'] = undefined;






export default BundleDeleteBody;

