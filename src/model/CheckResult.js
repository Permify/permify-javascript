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
* Enum class CheckResult.
* @enum {}
* @readonly
*/
export default class CheckResult {
    
        /**
         * value: "CHECK_RESULT_UNSPECIFIED"
         * @const
         */
        "UNSPECIFIED" = "CHECK_RESULT_UNSPECIFIED";

    
        /**
         * value: "CHECK_RESULT_ALLOWED"
         * @const
         */
        "ALLOWED" = "CHECK_RESULT_ALLOWED";

    
        /**
         * value: "CHECK_RESULT_DENIED"
         * @const
         */
        "DENIED" = "CHECK_RESULT_DENIED";

    

    /**
    * Returns a <code>CheckResult</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/CheckResult} The enum <code>CheckResult</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

