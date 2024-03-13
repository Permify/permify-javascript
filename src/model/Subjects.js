/**
 * Permify API
 * Permify is an open source authorization service for creating fine-grained and scalable authorization systems.
 *
 * The version of the OpenAPI document: v0.7.7
 * Contact: hello@permify.co
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import Subject from './Subject';

/**
 * The Subjects model module.
 * @module model/Subjects
 * @version v0.7.7
 */
class Subjects {
    /**
     * Constructs a new <code>Subjects</code>.
     * Subjects holds a repeated field of Subject type.
     * @alias module:model/Subjects
     */
    constructor() { 
        
        Subjects.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Subjects</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Subjects} obj Optional instance to populate.
     * @return {module:model/Subjects} The populated <code>Subjects</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Subjects();

            if (data.hasOwnProperty('subjects')) {
                obj['subjects'] = ApiClient.convertToType(data['subjects'], [Subject]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Subjects</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Subjects</code>.
     */
    static validateJSON(data) {
        if (data['subjects']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['subjects'])) {
                throw new Error("Expected the field `subjects` to be an array in the JSON data but got " + data['subjects']);
            }
            // validate the optional field `subjects` (array)
            for (const item of data['subjects']) {
                Subject.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * A list of subjects.
 * @member {Array.<module:model/Subject>} subjects
 */
Subjects.prototype['subjects'] = undefined;






export default Subjects;

