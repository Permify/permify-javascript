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
import Entity from './Entity';
import Subject from './Subject';

/**
 * The Tuple model module.
 * @module model/Tuple
 * @version v0.8.4
 */
class Tuple {
    /**
     * Constructs a new <code>Tuple</code>.
     * Tuple is a structure that includes an entity, a relation, and a subject.
     * @alias module:model/Tuple
     */
    constructor() { 
        
        Tuple.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Tuple</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Tuple} obj Optional instance to populate.
     * @return {module:model/Tuple} The populated <code>Tuple</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Tuple();

            if (data.hasOwnProperty('entity')) {
                obj['entity'] = Entity.constructFromObject(data['entity']);
            }
            if (data.hasOwnProperty('relation')) {
                obj['relation'] = ApiClient.convertToType(data['relation'], 'String');
            }
            if (data.hasOwnProperty('subject')) {
                obj['subject'] = Subject.constructFromObject(data['subject']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Tuple</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Tuple</code>.
     */
    static validateJSON(data) {
        // validate the optional field `entity`
        if (data['entity']) { // data not null
          Entity.validateJSON(data['entity']);
        }
        // ensure the json data is a string
        if (data['relation'] && !(typeof data['relation'] === 'string' || data['relation'] instanceof String)) {
            throw new Error("Expected the field `relation` to be a primitive type in the JSON string but got " + data['relation']);
        }
        // validate the optional field `subject`
        if (data['subject']) { // data not null
          Subject.validateJSON(data['subject']);
        }

        return true;
    }


}



/**
 * @member {module:model/Entity} entity
 */
Tuple.prototype['entity'] = undefined;

/**
 * @member {String} relation
 */
Tuple.prototype['relation'] = undefined;

/**
 * @member {module:model/Subject} subject
 */
Tuple.prototype['subject'] = undefined;






export default Tuple;

