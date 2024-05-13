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
import Attribute from './Attribute';
import DataChangeOperation from './DataChangeOperation';
import Tuple from './Tuple';

/**
 * The DataChange model module.
 * @module model/DataChange
 * @version v0.8.5
 */
class DataChange {
    /**
     * Constructs a new <code>DataChange</code>.
     * DataChange represents a single change in data, with an operation type and the actual change which could be a tuple or an attribute.
     * @alias module:model/DataChange
     */
    constructor() { 
        
        DataChange.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DataChange</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DataChange} obj Optional instance to populate.
     * @return {module:model/DataChange} The populated <code>DataChange</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DataChange();

            if (data.hasOwnProperty('operation')) {
                obj['operation'] = DataChangeOperation.constructFromObject(data['operation']);
            }
            if (data.hasOwnProperty('tuple')) {
                obj['tuple'] = Tuple.constructFromObject(data['tuple']);
            }
            if (data.hasOwnProperty('attribute')) {
                obj['attribute'] = Attribute.constructFromObject(data['attribute']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>DataChange</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DataChange</code>.
     */
    static validateJSON(data) {
        // validate the optional field `tuple`
        if (data['tuple']) { // data not null
          Tuple.validateJSON(data['tuple']);
        }
        // validate the optional field `attribute`
        if (data['attribute']) { // data not null
          Attribute.validateJSON(data['attribute']);
        }

        return true;
    }


}



/**
 * @member {module:model/DataChangeOperation} operation
 */
DataChange.prototype['operation'] = undefined;

/**
 * @member {module:model/Tuple} tuple
 */
DataChange.prototype['tuple'] = undefined;

/**
 * @member {module:model/Attribute} attribute
 */
DataChange.prototype['attribute'] = undefined;






export default DataChange;

