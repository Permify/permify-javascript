/**
 * Permify API
 * Permify is an open source authorization service for creating fine-grained and scalable authorization systems.
 *
 * The version of the OpenAPI document: v0.8.3
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
import PermissionLookupSubjectRequestMetadata from './PermissionLookupSubjectRequestMetadata';
import RelationReference from './RelationReference';

/**
 * The PermissionsLookupSubjectRequest model module.
 * @module model/PermissionsLookupSubjectRequest
 * @version v0.8.3
 */
class PermissionsLookupSubjectRequest {
    /**
     * Constructs a new <code>PermissionsLookupSubjectRequest</code>.
     * PermissionLookupSubjectRequest is the request message for the LookupSubject method in the Permission service.
     * @alias module:model/PermissionsLookupSubjectRequest
     */
    constructor() { 
        
        PermissionsLookupSubjectRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PermissionsLookupSubjectRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PermissionsLookupSubjectRequest} obj Optional instance to populate.
     * @return {module:model/PermissionsLookupSubjectRequest} The populated <code>PermissionsLookupSubjectRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PermissionsLookupSubjectRequest();

            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = PermissionLookupSubjectRequestMetadata.constructFromObject(data['metadata']);
            }
            if (data.hasOwnProperty('entity')) {
                obj['entity'] = Entity.constructFromObject(data['entity']);
            }
            if (data.hasOwnProperty('permission')) {
                obj['permission'] = ApiClient.convertToType(data['permission'], 'String');
            }
            if (data.hasOwnProperty('subject_reference')) {
                obj['subject_reference'] = RelationReference.constructFromObject(data['subject_reference']);
            }
            if (data.hasOwnProperty('context')) {
                obj['context'] = Context.constructFromObject(data['context']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>PermissionsLookupSubjectRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>PermissionsLookupSubjectRequest</code>.
     */
    static validateJSON(data) {
        // validate the optional field `metadata`
        if (data['metadata']) { // data not null
          PermissionLookupSubjectRequestMetadata.validateJSON(data['metadata']);
        }
        // validate the optional field `entity`
        if (data['entity']) { // data not null
          Entity.validateJSON(data['entity']);
        }
        // ensure the json data is a string
        if (data['permission'] && !(typeof data['permission'] === 'string' || data['permission'] instanceof String)) {
            throw new Error("Expected the field `permission` to be a primitive type in the JSON string but got " + data['permission']);
        }
        // validate the optional field `subject_reference`
        if (data['subject_reference']) { // data not null
          RelationReference.validateJSON(data['subject_reference']);
        }
        // validate the optional field `context`
        if (data['context']) { // data not null
          Context.validateJSON(data['context']);
        }

        return true;
    }


}



/**
 * @member {module:model/PermissionLookupSubjectRequestMetadata} metadata
 */
PermissionsLookupSubjectRequest.prototype['metadata'] = undefined;

/**
 * @member {module:model/Entity} entity
 */
PermissionsLookupSubjectRequest.prototype['entity'] = undefined;

/**
 * Permission to be checked, can be a permission or relation. Required, and must match the pattern \"^([a-zA-Z][a-zA-Z0-9_]{1,62}[a-zA-Z0-9])$\", max 64 bytes.
 * @member {String} permission
 */
PermissionsLookupSubjectRequest.prototype['permission'] = undefined;

/**
 * @member {module:model/RelationReference} subject_reference
 */
PermissionsLookupSubjectRequest.prototype['subject_reference'] = undefined;

/**
 * @member {module:model/Context} context
 */
PermissionsLookupSubjectRequest.prototype['context'] = undefined;






export default PermissionsLookupSubjectRequest;

