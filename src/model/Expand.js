/**
 * Permify API
 * Permify is an open source authorization service for creating fine-grained and scalable authorization systems.
 *
 * The version of the OpenAPI document: v0.8.0
 * Contact: hello@permify.co
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import Argument from './Argument';
import Entity from './Entity';
import ExpandLeaf from './ExpandLeaf';
import ExpandTreeNode from './ExpandTreeNode';

/**
 * The Expand model module.
 * @module model/Expand
 * @version v0.8.0
 */
class Expand {
    /**
     * Constructs a new <code>Expand</code>.
     * Expand is used to define a hierarchical structure for permissions. It has an entity, permission, and arguments. The node can be either another hierarchical structure or a set of subjects.
     * @alias module:model/Expand
     */
    constructor() { 
        
        Expand.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Expand</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Expand} obj Optional instance to populate.
     * @return {module:model/Expand} The populated <code>Expand</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Expand();

            if (data.hasOwnProperty('entity')) {
                obj['entity'] = Entity.constructFromObject(data['entity']);
            }
            if (data.hasOwnProperty('permission')) {
                obj['permission'] = ApiClient.convertToType(data['permission'], 'String');
            }
            if (data.hasOwnProperty('arguments')) {
                obj['arguments'] = ApiClient.convertToType(data['arguments'], [Argument]);
            }
            if (data.hasOwnProperty('expand')) {
                obj['expand'] = ExpandTreeNode.constructFromObject(data['expand']);
            }
            if (data.hasOwnProperty('leaf')) {
                obj['leaf'] = ExpandLeaf.constructFromObject(data['leaf']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Expand</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Expand</code>.
     */
    static validateJSON(data) {
        // validate the optional field `entity`
        if (data['entity']) { // data not null
          Entity.validateJSON(data['entity']);
        }
        // ensure the json data is a string
        if (data['permission'] && !(typeof data['permission'] === 'string' || data['permission'] instanceof String)) {
            throw new Error("Expected the field `permission` to be a primitive type in the JSON string but got " + data['permission']);
        }
        if (data['arguments']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['arguments'])) {
                throw new Error("Expected the field `arguments` to be an array in the JSON data but got " + data['arguments']);
            }
            // validate the optional field `arguments` (array)
            for (const item of data['arguments']) {
                Argument.validateJSON(item);
            };
        }
        // validate the optional field `expand`
        if (data['expand']) { // data not null
          ExpandTreeNode.validateJSON(data['expand']);
        }
        // validate the optional field `leaf`
        if (data['leaf']) { // data not null
          ExpandLeaf.validateJSON(data['leaf']);
        }

        return true;
    }


}



/**
 * @member {module:model/Entity} entity
 */
Expand.prototype['entity'] = undefined;

/**
 * permission is the permission applied to the entity.
 * @member {String} permission
 */
Expand.prototype['permission'] = undefined;

/**
 * arguments are the additional information or context used to evaluate permissions.
 * @member {Array.<module:model/Argument>} arguments
 */
Expand.prototype['arguments'] = undefined;

/**
 * @member {module:model/ExpandTreeNode} expand
 */
Expand.prototype['expand'] = undefined;

/**
 * @member {module:model/ExpandLeaf} leaf
 */
Expand.prototype['leaf'] = undefined;






export default Expand;

