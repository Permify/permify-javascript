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
import Child from './Child';
import RewriteOperation from './RewriteOperation';

/**
 * The Rewrite model module.
 * @module model/Rewrite
 * @version v0.8.8
 */
class Rewrite {
    /**
     * Constructs a new <code>Rewrite</code>.
     * The Rewrite message represents a specific rewrite operation. This operation could be one of the following: union, intersection, or exclusion.
     * @alias module:model/Rewrite
     */
    constructor() { 
        
        Rewrite.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Rewrite</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Rewrite} obj Optional instance to populate.
     * @return {module:model/Rewrite} The populated <code>Rewrite</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Rewrite();

            if (data.hasOwnProperty('rewriteOperation')) {
                obj['rewriteOperation'] = RewriteOperation.constructFromObject(data['rewriteOperation']);
            }
            if (data.hasOwnProperty('children')) {
                obj['children'] = ApiClient.convertToType(data['children'], [Child]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Rewrite</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Rewrite</code>.
     */
    static validateJSON(data) {
        if (data['children']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['children'])) {
                throw new Error("Expected the field `children` to be an array in the JSON data but got " + data['children']);
            }
            // validate the optional field `children` (array)
            for (const item of data['children']) {
                Child.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * @member {module:model/RewriteOperation} rewriteOperation
 */
Rewrite.prototype['rewriteOperation'] = undefined;

/**
 * A list of children that are operated upon by the rewrite operation.
 * @member {Array.<module:model/Child>} children
 */
Rewrite.prototype['children'] = undefined;






export default Rewrite;

