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
import Partials from './Partials';
import SchemaPartialWriteRequestMetadata from './SchemaPartialWriteRequestMetadata';

/**
 * The PartialWriteBody model module.
 * @module model/PartialWriteBody
 * @version v0.10.0
 */
class PartialWriteBody {
    /**
     * Constructs a new <code>PartialWriteBody</code>.
     * @alias module:model/PartialWriteBody
     */
    constructor() { 
        
        PartialWriteBody.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PartialWriteBody</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PartialWriteBody} obj Optional instance to populate.
     * @return {module:model/PartialWriteBody} The populated <code>PartialWriteBody</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PartialWriteBody();

            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = SchemaPartialWriteRequestMetadata.constructFromObject(data['metadata']);
            }
            if (data.hasOwnProperty('partials')) {
                obj['partials'] = ApiClient.convertToType(data['partials'], {'String': Partials});
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>PartialWriteBody</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>PartialWriteBody</code>.
     */
    static validateJSON(data) {
        // validate the optional field `metadata`
        if (data['metadata']) { // data not null
          SchemaPartialWriteRequestMetadata.validateJSON(data['metadata']);
        }

        return true;
    }


}



/**
 * @member {module:model/SchemaPartialWriteRequestMetadata} metadata
 */
PartialWriteBody.prototype['metadata'] = undefined;

/**
 * @member {Object.<String, module:model/Partials>} partials
 */
PartialWriteBody.prototype['partials'] = undefined;






export default PartialWriteBody;

