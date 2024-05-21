/**
 * Permify API
 * Permify is an open source authorization service for creating fine-grained and scalable authorization systems.
 *
 * The version of the OpenAPI document: v0.8.7
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
 * The MapType model module.
 * @module model/MapType
 * @version v0.8.7
 */
class MapType {
    /**
     * Constructs a new <code>MapType</code>.
     * Map type with parameterized key and value types, e.g. &#x60;map&lt;string, int&gt;&#x60;.
     * @alias module:model/MapType
     */
    constructor() { 
        
        MapType.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>MapType</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MapType} obj Optional instance to populate.
     * @return {module:model/MapType} The populated <code>MapType</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MapType();

            if (data.hasOwnProperty('keyType')) {
                obj['keyType'] = V1alpha1Type.constructFromObject(data['keyType']);
            }
            if (data.hasOwnProperty('valueType')) {
                obj['valueType'] = V1alpha1Type.constructFromObject(data['valueType']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>MapType</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>MapType</code>.
     */
    static validateJSON(data) {
        // validate the optional field `keyType`
        if (data['keyType']) { // data not null
          V1alpha1Type.validateJSON(data['keyType']);
        }
        // validate the optional field `valueType`
        if (data['valueType']) { // data not null
          V1alpha1Type.validateJSON(data['valueType']);
        }

        return true;
    }


}



/**
 * @member {module:model/V1alpha1Type} keyType
 */
MapType.prototype['keyType'] = undefined;

/**
 * @member {module:model/V1alpha1Type} valueType
 */
MapType.prototype['valueType'] = undefined;






export default MapType;

