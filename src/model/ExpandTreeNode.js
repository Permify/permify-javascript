/**
 * Permify API
 * Permify is an open source authorization service for creating fine-grained and scalable authorization systems.
 *
 * The version of the OpenAPI document: v0.8.4
 * Contact: hello@permify.co
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import Expand from './Expand';
import ExpandTreeNodeOperation from './ExpandTreeNodeOperation';

/**
 * The ExpandTreeNode model module.
 * @module model/ExpandTreeNode
 * @version v0.8.4
 */
class ExpandTreeNode {
    /**
     * Constructs a new <code>ExpandTreeNode</code>.
     * ExpandTreeNode represents a node in an expansion tree with a specific operation and its children.
     * @alias module:model/ExpandTreeNode
     */
    constructor() { 
        
        ExpandTreeNode.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ExpandTreeNode</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ExpandTreeNode} obj Optional instance to populate.
     * @return {module:model/ExpandTreeNode} The populated <code>ExpandTreeNode</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ExpandTreeNode();

            if (data.hasOwnProperty('operation')) {
                obj['operation'] = ExpandTreeNodeOperation.constructFromObject(data['operation']);
            }
            if (data.hasOwnProperty('children')) {
                obj['children'] = ApiClient.convertToType(data['children'], [Expand]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ExpandTreeNode</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ExpandTreeNode</code>.
     */
    static validateJSON(data) {
        if (data['children']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['children'])) {
                throw new Error("Expected the field `children` to be an array in the JSON data but got " + data['children']);
            }
            // validate the optional field `children` (array)
            for (const item of data['children']) {
                Expand.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * @member {module:model/ExpandTreeNodeOperation} operation
 */
ExpandTreeNode.prototype['operation'] = undefined;

/**
 * @member {Array.<module:model/Expand>} children
 */
ExpandTreeNode.prototype['children'] = undefined;






export default ExpandTreeNode;

