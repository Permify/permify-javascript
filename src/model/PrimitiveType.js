/**
 * Permify API
 * Permify is an open source authorization service for creating fine-grained and scalable authorization systems.
 *
 * The version of the OpenAPI document: v0.7.8
 * Contact: hello@permify.co
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
/**
* Enum class PrimitiveType.
* @enum {}
* @readonly
*/
export default class PrimitiveType {
    
        /**
         * value: "PRIMITIVE_TYPE_UNSPECIFIED"
         * @const
         */
        "PRIMITIVE_TYPE_UNSPECIFIED" = "PRIMITIVE_TYPE_UNSPECIFIED";

    
        /**
         * value: "BOOL"
         * @const
         */
        "BOOL" = "BOOL";

    
        /**
         * value: "INT64"
         * @const
         */
        "INT64" = "INT64";

    
        /**
         * value: "UINT64"
         * @const
         */
        "UINT64" = "UINT64";

    
        /**
         * value: "DOUBLE"
         * @const
         */
        "DOUBLE" = "DOUBLE";

    
        /**
         * value: "STRING"
         * @const
         */
        "STRING" = "STRING";

    
        /**
         * value: "BYTES"
         * @const
         */
        "BYTES" = "BYTES";

    

    /**
    * Returns a <code>PrimitiveType</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/PrimitiveType} The enum <code>PrimitiveType</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

