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
import EntityFilter from './EntityFilter';
import SubjectFilter from './SubjectFilter';

/**
 * The TupleFilter model module.
 * @module model/TupleFilter
 * @version v0.10.0
 */
class TupleFilter {
    /**
     * Constructs a new <code>TupleFilter</code>.
     * TupleFilter is used to filter tuples based on the entity, relation and the subject.
     * @alias module:model/TupleFilter
     */
    constructor() { 
        
        TupleFilter.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TupleFilter</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TupleFilter} obj Optional instance to populate.
     * @return {module:model/TupleFilter} The populated <code>TupleFilter</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TupleFilter();

            if (data.hasOwnProperty('entity')) {
                obj['entity'] = EntityFilter.constructFromObject(data['entity']);
            }
            if (data.hasOwnProperty('relation')) {
                obj['relation'] = ApiClient.convertToType(data['relation'], 'String');
            }
            if (data.hasOwnProperty('subject')) {
                obj['subject'] = SubjectFilter.constructFromObject(data['subject']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>TupleFilter</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TupleFilter</code>.
     */
    static validateJSON(data) {
        // validate the optional field `entity`
        if (data['entity']) { // data not null
          EntityFilter.validateJSON(data['entity']);
        }
        // ensure the json data is a string
        if (data['relation'] && !(typeof data['relation'] === 'string' || data['relation'] instanceof String)) {
            throw new Error("Expected the field `relation` to be a primitive type in the JSON string but got " + data['relation']);
        }
        // validate the optional field `subject`
        if (data['subject']) { // data not null
          SubjectFilter.validateJSON(data['subject']);
        }

        return true;
    }


}



/**
 * @member {module:model/EntityFilter} entity
 */
TupleFilter.prototype['entity'] = undefined;

/**
 * @member {String} relation
 */
TupleFilter.prototype['relation'] = undefined;

/**
 * @member {module:model/SubjectFilter} subject
 */
TupleFilter.prototype['subject'] = undefined;






export default TupleFilter;

