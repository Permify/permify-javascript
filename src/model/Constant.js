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

/**
 * The Constant model module.
 * @module model/Constant
 * @version v0.8.6
 */
class Constant {
    /**
     * Constructs a new <code>Constant</code>.
     * Represents a primitive literal.  Named &#39;Constant&#39; here for backwards compatibility.  This is similar as the primitives supported in the well-known type &#x60;google.protobuf.Value&#x60;, but richer so it can represent CEL&#39;s full range of primitives.  Lists and structs are not included as constants as these aggregate types may contain [Expr][google.api.expr.v1alpha1.Expr] elements which require evaluation and are thus not constant.  Examples of literals include: &#x60;\&quot;hello\&quot;&#x60;, &#x60;b&#39;bytes&#39;&#x60;, &#x60;1u&#x60;, &#x60;4.2&#x60;, &#x60;-2&#x60;, &#x60;true&#x60;, &#x60;null&#x60;.
     * @alias module:model/Constant
     */
    constructor() { 
        
        Constant.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Constant</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Constant} obj Optional instance to populate.
     * @return {module:model/Constant} The populated <code>Constant</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Constant();

            if (data.hasOwnProperty('nullValue')) {
                obj['nullValue'] = ApiClient.convertToType(data['nullValue'], 'String');
            }
            if (data.hasOwnProperty('boolValue')) {
                obj['boolValue'] = ApiClient.convertToType(data['boolValue'], 'Boolean');
            }
            if (data.hasOwnProperty('int64Value')) {
                obj['int64Value'] = ApiClient.convertToType(data['int64Value'], 'String');
            }
            if (data.hasOwnProperty('uint64Value')) {
                obj['uint64Value'] = ApiClient.convertToType(data['uint64Value'], 'String');
            }
            if (data.hasOwnProperty('doubleValue')) {
                obj['doubleValue'] = ApiClient.convertToType(data['doubleValue'], 'Number');
            }
            if (data.hasOwnProperty('stringValue')) {
                obj['stringValue'] = ApiClient.convertToType(data['stringValue'], 'String');
            }
            if (data.hasOwnProperty('bytesValue')) {
                obj['bytesValue'] = ApiClient.convertToType(data['bytesValue'], 'Blob');
            }
            if (data.hasOwnProperty('durationValue')) {
                obj['durationValue'] = ApiClient.convertToType(data['durationValue'], 'String');
            }
            if (data.hasOwnProperty('timestampValue')) {
                obj['timestampValue'] = ApiClient.convertToType(data['timestampValue'], 'Date');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Constant</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Constant</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['nullValue'] && !(typeof data['nullValue'] === 'string' || data['nullValue'] instanceof String)) {
            throw new Error("Expected the field `nullValue` to be a primitive type in the JSON string but got " + data['nullValue']);
        }
        // ensure the json data is a string
        if (data['int64Value'] && !(typeof data['int64Value'] === 'string' || data['int64Value'] instanceof String)) {
            throw new Error("Expected the field `int64Value` to be a primitive type in the JSON string but got " + data['int64Value']);
        }
        // ensure the json data is a string
        if (data['uint64Value'] && !(typeof data['uint64Value'] === 'string' || data['uint64Value'] instanceof String)) {
            throw new Error("Expected the field `uint64Value` to be a primitive type in the JSON string but got " + data['uint64Value']);
        }
        // ensure the json data is a string
        if (data['stringValue'] && !(typeof data['stringValue'] === 'string' || data['stringValue'] instanceof String)) {
            throw new Error("Expected the field `stringValue` to be a primitive type in the JSON string but got " + data['stringValue']);
        }
        // ensure the json data is a string
        if (data['durationValue'] && !(typeof data['durationValue'] === 'string' || data['durationValue'] instanceof String)) {
            throw new Error("Expected the field `durationValue` to be a primitive type in the JSON string but got " + data['durationValue']);
        }

        return true;
    }


}



/**
 * null value.
 * @member {String} nullValue
 */
Constant.prototype['nullValue'] = undefined;

/**
 * boolean value.
 * @member {Boolean} boolValue
 */
Constant.prototype['boolValue'] = undefined;

/**
 * int64 value.
 * @member {String} int64Value
 */
Constant.prototype['int64Value'] = undefined;

/**
 * uint64 value.
 * @member {String} uint64Value
 */
Constant.prototype['uint64Value'] = undefined;

/**
 * double value.
 * @member {Number} doubleValue
 */
Constant.prototype['doubleValue'] = undefined;

/**
 * string value.
 * @member {String} stringValue
 */
Constant.prototype['stringValue'] = undefined;

/**
 * bytes value.
 * @member {Blob} bytesValue
 */
Constant.prototype['bytesValue'] = undefined;

/**
 * protobuf.Duration value.  Deprecated: duration is no longer considered a builtin cel type.
 * @member {String} durationValue
 */
Constant.prototype['durationValue'] = undefined;

/**
 * protobuf.Timestamp value.  Deprecated: timestamp is no longer considered a builtin cel type.
 * @member {Date} timestampValue
 */
Constant.prototype['timestampValue'] = undefined;






export default Constant;

