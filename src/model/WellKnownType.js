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
/**
* Enum class WellKnownType.
* @enum {}
* @readonly
*/
export default class WellKnownType {
    
        /**
         * value: "WELL_KNOWN_TYPE_UNSPECIFIED"
         * @const
         */
        "WELL_KNOWN_TYPE_UNSPECIFIED" = "WELL_KNOWN_TYPE_UNSPECIFIED";

    
        /**
         * value: "ANY"
         * @const
         */
        "ANY" = "ANY";

    
        /**
         * value: "TIMESTAMP"
         * @const
         */
        "TIMESTAMP" = "TIMESTAMP";

    
        /**
         * value: "DURATION"
         * @const
         */
        "DURATION" = "DURATION";

    

    /**
    * Returns a <code>WellKnownType</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/WellKnownType} The enum <code>WellKnownType</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

