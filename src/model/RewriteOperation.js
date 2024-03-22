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
* Enum class RewriteOperation.
* @enum {}
* @readonly
*/
export default class RewriteOperation {
    
        /**
         * value: "OPERATION_UNSPECIFIED"
         * @const
         */
        "UNSPECIFIED" = "OPERATION_UNSPECIFIED";

    
        /**
         * value: "OPERATION_UNION"
         * @const
         */
        "UNION" = "OPERATION_UNION";

    
        /**
         * value: "OPERATION_INTERSECTION"
         * @const
         */
        "INTERSECTION" = "OPERATION_INTERSECTION";

    
        /**
         * value: "OPERATION_EXCLUSION"
         * @const
         */
        "EXCLUSION" = "OPERATION_EXCLUSION";

    

    /**
    * Returns a <code>RewriteOperation</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/RewriteOperation} The enum <code>RewriteOperation</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

