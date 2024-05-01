/**
 * Permify API
 * Permify is an open source authorization service for creating fine-grained and scalable authorization systems.
 *
 * The version of the OpenAPI document: v0.8.2
 * Contact: hello@permify.co
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import ComputedAttribute from './ComputedAttribute';
import ComputedUserSet from './ComputedUserSet';
import TupleToUserSet from './TupleToUserSet';
import V1Call from './V1Call';

/**
 * The Leaf model module.
 * @module model/Leaf
 * @version v0.8.2
 */
class Leaf {
    /**
     * Constructs a new <code>Leaf</code>.
     * Leaf represents a leaf node in the permission tree.
     * @alias module:model/Leaf
     */
    constructor() { 
        
        Leaf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Leaf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Leaf} obj Optional instance to populate.
     * @return {module:model/Leaf} The populated <code>Leaf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Leaf();

            if (data.hasOwnProperty('computedUserSet')) {
                obj['computedUserSet'] = ComputedUserSet.constructFromObject(data['computedUserSet']);
            }
            if (data.hasOwnProperty('tupleToUserSet')) {
                obj['tupleToUserSet'] = TupleToUserSet.constructFromObject(data['tupleToUserSet']);
            }
            if (data.hasOwnProperty('computedAttribute')) {
                obj['computedAttribute'] = ComputedAttribute.constructFromObject(data['computedAttribute']);
            }
            if (data.hasOwnProperty('call')) {
                obj['call'] = V1Call.constructFromObject(data['call']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Leaf</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Leaf</code>.
     */
    static validateJSON(data) {
        // validate the optional field `computedUserSet`
        if (data['computedUserSet']) { // data not null
          ComputedUserSet.validateJSON(data['computedUserSet']);
        }
        // validate the optional field `tupleToUserSet`
        if (data['tupleToUserSet']) { // data not null
          TupleToUserSet.validateJSON(data['tupleToUserSet']);
        }
        // validate the optional field `computedAttribute`
        if (data['computedAttribute']) { // data not null
          ComputedAttribute.validateJSON(data['computedAttribute']);
        }
        // validate the optional field `call`
        if (data['call']) { // data not null
          V1Call.validateJSON(data['call']);
        }

        return true;
    }


}



/**
 * @member {module:model/ComputedUserSet} computedUserSet
 */
Leaf.prototype['computedUserSet'] = undefined;

/**
 * @member {module:model/TupleToUserSet} tupleToUserSet
 */
Leaf.prototype['tupleToUserSet'] = undefined;

/**
 * @member {module:model/ComputedAttribute} computedAttribute
 */
Leaf.prototype['computedAttribute'] = undefined;

/**
 * @member {module:model/V1Call} call
 */
Leaf.prototype['call'] = undefined;






export default Leaf;

