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
import ComputedUserSet from './ComputedUserSet';
import TupleSet from './TupleSet';

/**
 * The TupleToUserSet model module.
 * @module model/TupleToUserSet
 * @version v0.8.5
 */
class TupleToUserSet {
    /**
     * Constructs a new <code>TupleToUserSet</code>.
     * TupleToUserSet defines a mapping from tuple sets to computed user sets.
     * @alias module:model/TupleToUserSet
     */
    constructor() { 
        
        TupleToUserSet.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TupleToUserSet</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TupleToUserSet} obj Optional instance to populate.
     * @return {module:model/TupleToUserSet} The populated <code>TupleToUserSet</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TupleToUserSet();

            if (data.hasOwnProperty('tupleSet')) {
                obj['tupleSet'] = TupleSet.constructFromObject(data['tupleSet']);
            }
            if (data.hasOwnProperty('computed')) {
                obj['computed'] = ComputedUserSet.constructFromObject(data['computed']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>TupleToUserSet</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TupleToUserSet</code>.
     */
    static validateJSON(data) {
        // validate the optional field `tupleSet`
        if (data['tupleSet']) { // data not null
          TupleSet.validateJSON(data['tupleSet']);
        }
        // validate the optional field `computed`
        if (data['computed']) { // data not null
          ComputedUserSet.validateJSON(data['computed']);
        }

        return true;
    }


}



/**
 * @member {module:model/TupleSet} tupleSet
 */
TupleToUserSet.prototype['tupleSet'] = undefined;

/**
 * @member {module:model/ComputedUserSet} computed
 */
TupleToUserSet.prototype['computed'] = undefined;






export default TupleToUserSet;

