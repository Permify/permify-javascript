/**
 * Permify API
 * Permify is an open source authorization service for creating fine-grained and scalable authorization systems.
 *
 * The version of the OpenAPI document: v0.10.0
 * Contact: hello@permify.co
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import AttributeFilter from './AttributeFilter';
import TupleFilter from './TupleFilter';

/**
 * The DataDeleteBody model module.
 * @module model/DataDeleteBody
 * @version v0.10.0
 */
class DataDeleteBody {
    /**
     * Constructs a new <code>DataDeleteBody</code>.
     * DataDeleteRequest defines the structure of a request to delete data. It includes the tenant_id and filters for selecting tuples and attributes to be deleted.
     * @alias module:model/DataDeleteBody
     */
    constructor() { 
        
        DataDeleteBody.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DataDeleteBody</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DataDeleteBody} obj Optional instance to populate.
     * @return {module:model/DataDeleteBody} The populated <code>DataDeleteBody</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DataDeleteBody();

            if (data.hasOwnProperty('tuple_filter')) {
                obj['tuple_filter'] = TupleFilter.constructFromObject(data['tuple_filter']);
            }
            if (data.hasOwnProperty('attribute_filter')) {
                obj['attribute_filter'] = AttributeFilter.constructFromObject(data['attribute_filter']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>DataDeleteBody</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DataDeleteBody</code>.
     */
    static validateJSON(data) {
        // validate the optional field `tuple_filter`
        if (data['tuple_filter']) { // data not null
          TupleFilter.validateJSON(data['tuple_filter']);
        }
        // validate the optional field `attribute_filter`
        if (data['attribute_filter']) { // data not null
          AttributeFilter.validateJSON(data['attribute_filter']);
        }

        return true;
    }


}



/**
 * @member {module:model/TupleFilter} tuple_filter
 */
DataDeleteBody.prototype['tuple_filter'] = undefined;

/**
 * @member {module:model/AttributeFilter} attribute_filter
 */
DataDeleteBody.prototype['attribute_filter'] = undefined;






export default DataDeleteBody;

