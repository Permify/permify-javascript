/**
 * Permify API
 * Permify is an open source authorization service for creating fine-grained and scalable authorization systems.
 *
 * The version of the OpenAPI document: v0.10.1
 * Contact: hello@permify.co
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import Context from './Context';
import Entity from './Entity';
import PermissionSubjectPermissionRequestMetadata from './PermissionSubjectPermissionRequestMetadata';
import Subject from './Subject';

/**
 * The SubjectPermissionBody model module.
 * @module model/SubjectPermissionBody
 * @version v0.10.1
 */
class SubjectPermissionBody {
    /**
     * Constructs a new <code>SubjectPermissionBody</code>.
     * PermissionSubjectPermissionRequest is the request message for the SubjectPermission method in the Permission service.
     * @alias module:model/SubjectPermissionBody
     */
    constructor() { 
        
        SubjectPermissionBody.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SubjectPermissionBody</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SubjectPermissionBody} obj Optional instance to populate.
     * @return {module:model/SubjectPermissionBody} The populated <code>SubjectPermissionBody</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SubjectPermissionBody();

            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = PermissionSubjectPermissionRequestMetadata.constructFromObject(data['metadata']);
            }
            if (data.hasOwnProperty('entity')) {
                obj['entity'] = Entity.constructFromObject(data['entity']);
            }
            if (data.hasOwnProperty('subject')) {
                obj['subject'] = Subject.constructFromObject(data['subject']);
            }
            if (data.hasOwnProperty('context')) {
                obj['context'] = Context.constructFromObject(data['context']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>SubjectPermissionBody</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SubjectPermissionBody</code>.
     */
    static validateJSON(data) {
        // validate the optional field `metadata`
        if (data['metadata']) { // data not null
          PermissionSubjectPermissionRequestMetadata.validateJSON(data['metadata']);
        }
        // validate the optional field `entity`
        if (data['entity']) { // data not null
          Entity.validateJSON(data['entity']);
        }
        // validate the optional field `subject`
        if (data['subject']) { // data not null
          Subject.validateJSON(data['subject']);
        }
        // validate the optional field `context`
        if (data['context']) { // data not null
          Context.validateJSON(data['context']);
        }

        return true;
    }


}



/**
 * @member {module:model/PermissionSubjectPermissionRequestMetadata} metadata
 */
SubjectPermissionBody.prototype['metadata'] = undefined;

/**
 * @member {module:model/Entity} entity
 */
SubjectPermissionBody.prototype['entity'] = undefined;

/**
 * @member {module:model/Subject} subject
 */
SubjectPermissionBody.prototype['subject'] = undefined;

/**
 * @member {module:model/Context} context
 */
SubjectPermissionBody.prototype['context'] = undefined;






export default SubjectPermissionBody;

