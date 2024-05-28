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
import DataChange from './DataChange';

/**
 * The DataChanges model module.
 * @module model/DataChanges
 * @version v0.8.8
 */
class DataChanges {
    /**
     * Constructs a new <code>DataChanges</code>.
     * DataChanges represent changes in data with a snap token and a list of data change objects.
     * @alias module:model/DataChanges
     */
    constructor() { 
        
        DataChanges.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DataChanges</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DataChanges} obj Optional instance to populate.
     * @return {module:model/DataChanges} The populated <code>DataChanges</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DataChanges();

            if (data.hasOwnProperty('snap_token')) {
                obj['snap_token'] = ApiClient.convertToType(data['snap_token'], 'String');
            }
            if (data.hasOwnProperty('data_changes')) {
                obj['data_changes'] = ApiClient.convertToType(data['data_changes'], [DataChange]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>DataChanges</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DataChanges</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['snap_token'] && !(typeof data['snap_token'] === 'string' || data['snap_token'] instanceof String)) {
            throw new Error("Expected the field `snap_token` to be a primitive type in the JSON string but got " + data['snap_token']);
        }
        if (data['data_changes']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['data_changes'])) {
                throw new Error("Expected the field `data_changes` to be an array in the JSON data but got " + data['data_changes']);
            }
            // validate the optional field `data_changes` (array)
            for (const item of data['data_changes']) {
                DataChange.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * The snapshot token.
 * @member {String} snap_token
 */
DataChanges.prototype['snap_token'] = undefined;

/**
 * The list of data changes.
 * @member {Array.<module:model/DataChange>} data_changes
 */
DataChanges.prototype['data_changes'] = undefined;






export default DataChanges;

