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
import V1alpha1Type from './V1alpha1Type';

/**
 * The ListType model module.
 * @module model/ListType
 * @version v0.10.0
 */
class ListType {
    /**
     * Constructs a new <code>ListType</code>.
     * List type with typed elements, e.g. &#x60;list&lt;example.proto.MyMessage&gt;&#x60;.
     * @alias module:model/ListType
     */
    constructor() { 
        
        ListType.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ListType</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListType} obj Optional instance to populate.
     * @return {module:model/ListType} The populated <code>ListType</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ListType();

            if (data.hasOwnProperty('elemType')) {
                obj['elemType'] = V1alpha1Type.constructFromObject(data['elemType']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ListType</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ListType</code>.
     */
    static validateJSON(data) {
        // validate the optional field `elemType`
        if (data['elemType']) { // data not null
          V1alpha1Type.validateJSON(data['elemType']);
        }

        return true;
    }


}



/**
 * @member {module:model/V1alpha1Type} elemType
 */
ListType.prototype['elemType'] = undefined;






export default ListType;

