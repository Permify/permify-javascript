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
import Context from './Context';
import PermissionLookupEntityRequestMetadata from './PermissionLookupEntityRequestMetadata';
import Subject from './Subject';

/**
 * The PermissionsLookupEntityRequest model module.
 * @module model/PermissionsLookupEntityRequest
 * @version v0.7.7
 */
class PermissionsLookupEntityRequest {
    /**
     * Constructs a new <code>PermissionsLookupEntityRequest</code>.
     * PermissionLookupEntityRequest is the request message for the LookupEntity method in the Permission service.
     * @alias module:model/PermissionsLookupEntityRequest
     */
    constructor() { 
        
        PermissionsLookupEntityRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PermissionsLookupEntityRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PermissionsLookupEntityRequest} obj Optional instance to populate.
     * @return {module:model/PermissionsLookupEntityRequest} The populated <code>PermissionsLookupEntityRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PermissionsLookupEntityRequest();

            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = PermissionLookupEntityRequestMetadata.constructFromObject(data['metadata']);
            }
            if (data.hasOwnProperty('entity_type')) {
                obj['entity_type'] = ApiClient.convertToType(data['entity_type'], 'String');
            }
            if (data.hasOwnProperty('permission')) {
                obj['permission'] = ApiClient.convertToType(data['permission'], 'String');
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
     * Validates the JSON data with respect to <code>PermissionsLookupEntityRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>PermissionsLookupEntityRequest</code>.
     */
    static validateJSON(data) {
        // validate the optional field `metadata`
        if (data['metadata']) { // data not null
          PermissionLookupEntityRequestMetadata.validateJSON(data['metadata']);
        }
        // ensure the json data is a string
        if (data['entity_type'] && !(typeof data['entity_type'] === 'string' || data['entity_type'] instanceof String)) {
            throw new Error("Expected the field `entity_type` to be a primitive type in the JSON string but got " + data['entity_type']);
        }
        // ensure the json data is a string
        if (data['permission'] && !(typeof data['permission'] === 'string' || data['permission'] instanceof String)) {
            throw new Error("Expected the field `permission` to be a primitive type in the JSON string but got " + data['permission']);
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
 * @member {module:model/PermissionLookupEntityRequestMetadata} metadata
 */
PermissionsLookupEntityRequest.prototype['metadata'] = undefined;

/**
 * Type of the entity to lookup, required, must start with a letter and can include alphanumeric and underscore, max 64 bytes.
 * @member {String} entity_type
 */
PermissionsLookupEntityRequest.prototype['entity_type'] = undefined;

/**
 * Name of the permission to check, required, must start with a letter and can include alphanumeric and underscore, max 64 bytes.
 * @member {String} permission
 */
PermissionsLookupEntityRequest.prototype['permission'] = undefined;

/**
 * @member {module:model/Subject} subject
 */
PermissionsLookupEntityRequest.prototype['subject'] = undefined;

/**
 * @member {module:model/Context} context
 */
PermissionsLookupEntityRequest.prototype['context'] = undefined;






export default PermissionsLookupEntityRequest;

