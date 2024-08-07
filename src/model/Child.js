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
import Leaf from './Leaf';
import Rewrite from './Rewrite';

/**
 * The Child model module.
 * @module model/Child
 * @version v0.10.0
 */
class Child {
    /**
     * Constructs a new <code>Child</code>.
     * Child represents a node in the permission tree.
     * @alias module:model/Child
     */
    constructor() { 
        
        Child.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Child</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Child} obj Optional instance to populate.
     * @return {module:model/Child} The populated <code>Child</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Child();

            if (data.hasOwnProperty('leaf')) {
                obj['leaf'] = Leaf.constructFromObject(data['leaf']);
            }
            if (data.hasOwnProperty('rewrite')) {
                obj['rewrite'] = Rewrite.constructFromObject(data['rewrite']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Child</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Child</code>.
     */
    static validateJSON(data) {
        // validate the optional field `leaf`
        if (data['leaf']) { // data not null
          Leaf.validateJSON(data['leaf']);
        }
        // validate the optional field `rewrite`
        if (data['rewrite']) { // data not null
          Rewrite.validateJSON(data['rewrite']);
        }

        return true;
    }


}



/**
 * @member {module:model/Leaf} leaf
 */
Child.prototype['leaf'] = undefined;

/**
 * @member {module:model/Rewrite} rewrite
 */
Child.prototype['rewrite'] = undefined;






export default Child;

