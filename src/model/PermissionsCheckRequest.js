/**
 * Permify API
 * Permify is an open source authorization service for creating fine-grained and scalable authorization systems.
 *
 * The version of the OpenAPI document: v0.8.6
 * Contact: hello@permify.co
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import Argument from './Argument';
import Context from './Context';
import Entity from './Entity';
import PermissionCheckRequestMetadata from './PermissionCheckRequestMetadata';
import Subject from './Subject';

/**
 * The PermissionsCheckRequest model module.
 * @module model/PermissionsCheckRequest
 * @version v0.8.6
 */
class PermissionsCheckRequest {
    /**
     * Constructs a new <code>PermissionsCheckRequest</code>.
     * PermissionCheckRequest is the request message for the Check method in the Permission service.
     * @alias module:model/PermissionsCheckRequest
     */
    constructor() { 
        
        PermissionsCheckRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PermissionsCheckRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PermissionsCheckRequest} obj Optional instance to populate.
     * @return {module:model/PermissionsCheckRequest} The populated <code>PermissionsCheckRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PermissionsCheckRequest();

            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = PermissionCheckRequestMetadata.constructFromObject(data['metadata']);
            }
            if (data.hasOwnProperty('entity')) {
                obj['entity'] = Entity.constructFromObject(data['entity']);
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
            if (data.hasOwnProperty('arguments')) {
                obj['arguments'] = ApiClient.convertToType(data['arguments'], [Argument]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>PermissionsCheckRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>PermissionsCheckRequest</code>.
     */
    static validateJSON(data) {
        // validate the optional field `metadata`
        if (data['metadata']) { // data not null
          PermissionCheckRequestMetadata.validateJSON(data['metadata']);
        }
        // validate the optional field `entity`
        if (data['entity']) { // data not null
          Entity.validateJSON(data['entity']);
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

        return true;
    }


}



/**
 * @member {module:model/PermissionCheckRequestMetadata} metadata
 */
PermissionsCheckRequest.prototype['metadata'] = undefined;

/**
 * @member {module:model/Entity} entity
 */
PermissionsCheckRequest.prototype['entity'] = undefined;

/**
 * The action the user wants to perform on the resource
 * @member {String} permission
 */
PermissionsCheckRequest.prototype['permission'] = undefined;

/**
 * @member {module:model/Subject} subject
 */
PermissionsCheckRequest.prototype['subject'] = undefined;

/**
 * @member {module:model/Context} context
 */
PermissionsCheckRequest.prototype['context'] = undefined;

/**
 * Additional arguments associated with this request.
 * @member {Array.<module:model/Argument>} arguments
 */
PermissionsCheckRequest.prototype['arguments'] = undefined;






export default PermissionsCheckRequest;

