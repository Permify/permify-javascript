/**
 * Permify API
 * Permify is an open source authorization service for creating fine-grained and scalable authorization systems.
 *
 * The version of the OpenAPI document: v0.7.7
 * Contact: hello@permify.co
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
/**
* Enum class AttributeType.
* @enum {}
* @readonly
*/
export default class AttributeType {
    
        /**
         * value: "ATTRIBUTE_TYPE_UNSPECIFIED"
         * @const
         */
        "UNSPECIFIED" = "ATTRIBUTE_TYPE_UNSPECIFIED";

    
        /**
         * value: "ATTRIBUTE_TYPE_BOOLEAN"
         * @const
         */
        "BOOLEAN" = "ATTRIBUTE_TYPE_BOOLEAN";

    
        /**
         * value: "ATTRIBUTE_TYPE_BOOLEAN_ARRAY"
         * @const
         */
        "BOOLEAN_ARRAY" = "ATTRIBUTE_TYPE_BOOLEAN_ARRAY";

    
        /**
         * value: "ATTRIBUTE_TYPE_STRING"
         * @const
         */
        "STRING" = "ATTRIBUTE_TYPE_STRING";

    
        /**
         * value: "ATTRIBUTE_TYPE_STRING_ARRAY"
         * @const
         */
        "STRING_ARRAY" = "ATTRIBUTE_TYPE_STRING_ARRAY";

    
        /**
         * value: "ATTRIBUTE_TYPE_INTEGER"
         * @const
         */
        "INTEGER" = "ATTRIBUTE_TYPE_INTEGER";

    
        /**
         * value: "ATTRIBUTE_TYPE_INTEGER_ARRAY"
         * @const
         */
        "INTEGER_ARRAY" = "ATTRIBUTE_TYPE_INTEGER_ARRAY";

    
        /**
         * value: "ATTRIBUTE_TYPE_DOUBLE"
         * @const
         */
        "DOUBLE" = "ATTRIBUTE_TYPE_DOUBLE";

    
        /**
         * value: "ATTRIBUTE_TYPE_DOUBLE_ARRAY"
         * @const
         */
        "DOUBLE_ARRAY" = "ATTRIBUTE_TYPE_DOUBLE_ARRAY";

    

    /**
    * Returns a <code>AttributeType</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/AttributeType} The enum <code>AttributeType</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

