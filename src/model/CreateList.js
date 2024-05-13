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
import Expr from './Expr';

/**
 * The CreateList model module.
 * @module model/CreateList
 * @version v0.8.5
 */
class CreateList {
    /**
     * Constructs a new <code>CreateList</code>.
     * A list creation expression.  Lists may either be homogenous, e.g. &#x60;[1, 2, 3]&#x60;, or heterogeneous, e.g. &#x60;dyn([1, &#39;hello&#39;, 2.0])&#x60;
     * @alias module:model/CreateList
     */
    constructor() { 
        
        CreateList.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CreateList</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateList} obj Optional instance to populate.
     * @return {module:model/CreateList} The populated <code>CreateList</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateList();

            if (data.hasOwnProperty('elements')) {
                obj['elements'] = ApiClient.convertToType(data['elements'], [Expr]);
            }
            if (data.hasOwnProperty('optionalIndices')) {
                obj['optionalIndices'] = ApiClient.convertToType(data['optionalIndices'], ['Number']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CreateList</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CreateList</code>.
     */
    static validateJSON(data) {
        if (data['elements']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['elements'])) {
                throw new Error("Expected the field `elements` to be an array in the JSON data but got " + data['elements']);
            }
            // validate the optional field `elements` (array)
            for (const item of data['elements']) {
                Expr.validateJSON(item);
            };
        }
        // ensure the json data is an array
        if (!Array.isArray(data['optionalIndices'])) {
            throw new Error("Expected the field `optionalIndices` to be an array in the JSON data but got " + data['optionalIndices']);
        }

        return true;
    }


}



/**
 * The elements part of the list.
 * @member {Array.<module:model/Expr>} elements
 */
CreateList.prototype['elements'] = undefined;

/**
 * The indices within the elements list which are marked as optional elements.  When an optional-typed value is present, the value it contains is included in the list. If the optional-typed value is absent, the list element is omitted from the CreateList result.
 * @member {Array.<Number>} optionalIndices
 */
CreateList.prototype['optionalIndices'] = undefined;






export default CreateList;

