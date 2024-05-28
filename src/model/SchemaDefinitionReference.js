/**
 * Permify API
 * Permify is an open source authorization service for creating fine-grained and scalable authorization systems.
 *
 * The version of the OpenAPI document: v0.8.8
 * Contact: hello@permify.co
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
/**
* Enum class SchemaDefinitionReference.
* @enum {}
* @readonly
*/
export default class SchemaDefinitionReference {
    
        /**
         * value: "REFERENCE_UNSPECIFIED"
         * @const
         */
        "UNSPECIFIED" = "REFERENCE_UNSPECIFIED";

    
        /**
         * value: "REFERENCE_ENTITY"
         * @const
         */
        "ENTITY" = "REFERENCE_ENTITY";

    
        /**
         * value: "REFERENCE_RULE"
         * @const
         */
        "RULE" = "REFERENCE_RULE";

    

    /**
    * Returns a <code>SchemaDefinitionReference</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/SchemaDefinitionReference} The enum <code>SchemaDefinitionReference</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

