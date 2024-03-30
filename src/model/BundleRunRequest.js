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

/**
 * The BundleRunRequest model module.
 * @module model/BundleRunRequest
 * @version v0.8.0
 */
class BundleRunRequest {
    /**
     * Constructs a new <code>BundleRunRequest</code>.
     * BundleRunRequest is used to request the execution of a bundle. It includes tenant_id, the name of the bundle, and additional arguments for execution.
     * @alias module:model/BundleRunRequest
     */
    constructor() { 
        
        BundleRunRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>BundleRunRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BundleRunRequest} obj Optional instance to populate.
     * @return {module:model/BundleRunRequest} The populated <code>BundleRunRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BundleRunRequest();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('arguments')) {
                obj['arguments'] = ApiClient.convertToType(data['arguments'], {'String': 'String'});
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>BundleRunRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>BundleRunRequest</code>.
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
 * Name of the bundle to be executed.
 * @member {String} name
 */
BundleRunRequest.prototype['name'] = undefined;

/**
 * Additional key-value pairs for execution arguments.
 * @member {Object.<String, String>} arguments
 */
BundleRunRequest.prototype['arguments'] = undefined;






export default BundleRunRequest;

