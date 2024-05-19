/**
 * Permify API
 * Permify is an open source authorization service for creating fine-grained and scalable authorization systems.
 *
 * The version of the OpenAPI document: v0.8.6
 * Contact: hello@permify.co
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import Attribute from './Attribute';

/**
 * The AttributeReadResponse model module.
 * @module model/AttributeReadResponse
 * @version v0.8.6
 */
class AttributeReadResponse {
    /**
     * Constructs a new <code>AttributeReadResponse</code>.
     * AttributeReadResponse defines the structure of the response to an attribute read request. It includes the attributes retrieved and a continuous token for handling result pagination.
     * @alias module:model/AttributeReadResponse
     */
    constructor() { 
        
        AttributeReadResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AttributeReadResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AttributeReadResponse} obj Optional instance to populate.
     * @return {module:model/AttributeReadResponse} The populated <code>AttributeReadResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AttributeReadResponse();

            if (data.hasOwnProperty('attributes')) {
                obj['attributes'] = ApiClient.convertToType(data['attributes'], [Attribute]);
            }
            if (data.hasOwnProperty('continuous_token')) {
                obj['continuous_token'] = ApiClient.convertToType(data['continuous_token'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>AttributeReadResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>AttributeReadResponse</code>.
     */
    static validateJSON(data) {
        if (data['attributes']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['attributes'])) {
                throw new Error("Expected the field `attributes` to be an array in the JSON data but got " + data['attributes']);
            }
            // validate the optional field `attributes` (array)
            for (const item of data['attributes']) {
                Attribute.validateJSON(item);
            };
        }
        // ensure the json data is a string
        if (data['continuous_token'] && !(typeof data['continuous_token'] === 'string' || data['continuous_token'] instanceof String)) {
            throw new Error("Expected the field `continuous_token` to be a primitive type in the JSON string but got " + data['continuous_token']);
        }

        return true;
    }


}



/**
 * attributes is a list of the attributes retrieved in the read operation.
 * @member {Array.<module:model/Attribute>} attributes
 */
AttributeReadResponse.prototype['attributes'] = undefined;

/**
 * continuous_token is used in the case of paginated reads to retrieve the next page of results.
 * @member {String} continuous_token
 */
AttributeReadResponse.prototype['continuous_token'] = undefined;






export default AttributeReadResponse;

