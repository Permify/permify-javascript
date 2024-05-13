/**
 * Permify API
 * Permify is an open source authorization service for creating fine-grained and scalable authorization systems.
 *
 * The version of the OpenAPI document: v0.8.5
 * Contact: hello@permify.co
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
/**
* Enum class DataChangeOperation.
* @enum {}
* @readonly
*/
export default class DataChangeOperation {
    
        /**
         * value: "OPERATION_UNSPECIFIED"
         * @const
         */
        "UNSPECIFIED" = "OPERATION_UNSPECIFIED";

    
        /**
         * value: "OPERATION_CREATE"
         * @const
         */
        "CREATE" = "OPERATION_CREATE";

    
        /**
         * value: "OPERATION_DELETE"
         * @const
         */
        "DELETE" = "OPERATION_DELETE";

    

    /**
    * Returns a <code>DataChangeOperation</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/DataChangeOperation} The enum <code>DataChangeOperation</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

