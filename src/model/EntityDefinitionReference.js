/**
 * Permify API
 * Permify is an open source authorization service for creating fine-grained and scalable authorization systems.
 *
 * The version of the OpenAPI document: v0.9.9
 * Contact: hello@permify.co
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
/**
* Enum class EntityDefinitionReference.
* @enum {}
* @readonly
*/
export default class EntityDefinitionReference {
    
        /**
         * value: "REFERENCE_UNSPECIFIED"
         * @const
         */
        "UNSPECIFIED" = "REFERENCE_UNSPECIFIED";

    
        /**
         * value: "REFERENCE_RELATION"
         * @const
         */
        "RELATION" = "REFERENCE_RELATION";

    
        /**
         * value: "REFERENCE_PERMISSION"
         * @const
         */
        "PERMISSION" = "REFERENCE_PERMISSION";

    
        /**
         * value: "REFERENCE_ATTRIBUTE"
         * @const
         */
        "ATTRIBUTE" = "REFERENCE_ATTRIBUTE";

    

    /**
    * Returns a <code>EntityDefinitionReference</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/EntityDefinitionReference} The enum <code>EntityDefinitionReference</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

