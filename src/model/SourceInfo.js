/**
 * Permify API
 * Permify is an open source authorization service for creating fine-grained and scalable authorization systems.
 *
 * The version of the OpenAPI document: v0.9.9
 * Contact: hello@permify.co
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import Expr from './Expr';

/**
 * The SourceInfo model module.
 * @module model/SourceInfo
 * @version v0.9.9
 */
class SourceInfo {
    /**
     * Constructs a new <code>SourceInfo</code>.
     * Source information collected at parse time.
     * @alias module:model/SourceInfo
     */
    constructor() { 
        
        SourceInfo.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SourceInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SourceInfo} obj Optional instance to populate.
     * @return {module:model/SourceInfo} The populated <code>SourceInfo</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SourceInfo();

            if (data.hasOwnProperty('syntaxVersion')) {
                obj['syntaxVersion'] = ApiClient.convertToType(data['syntaxVersion'], 'String');
            }
            if (data.hasOwnProperty('location')) {
                obj['location'] = ApiClient.convertToType(data['location'], 'String');
            }
            if (data.hasOwnProperty('lineOffsets')) {
                obj['lineOffsets'] = ApiClient.convertToType(data['lineOffsets'], ['Number']);
            }
            if (data.hasOwnProperty('positions')) {
                obj['positions'] = ApiClient.convertToType(data['positions'], {'String': 'Number'});
            }
            if (data.hasOwnProperty('macroCalls')) {
                obj['macroCalls'] = ApiClient.convertToType(data['macroCalls'], {'String': Expr});
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>SourceInfo</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SourceInfo</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['syntaxVersion'] && !(typeof data['syntaxVersion'] === 'string' || data['syntaxVersion'] instanceof String)) {
            throw new Error("Expected the field `syntaxVersion` to be a primitive type in the JSON string but got " + data['syntaxVersion']);
        }
        // ensure the json data is a string
        if (data['location'] && !(typeof data['location'] === 'string' || data['location'] instanceof String)) {
            throw new Error("Expected the field `location` to be a primitive type in the JSON string but got " + data['location']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['lineOffsets'])) {
            throw new Error("Expected the field `lineOffsets` to be an array in the JSON data but got " + data['lineOffsets']);
        }

        return true;
    }


}



/**
 * The syntax version of the source, e.g. `cel1`.
 * @member {String} syntaxVersion
 */
SourceInfo.prototype['syntaxVersion'] = undefined;

/**
 * The location name. All position information attached to an expression is relative to this location.  The location could be a file, UI element, or similar. For example, `acme/app/AnvilPolicy.cel`.
 * @member {String} location
 */
SourceInfo.prototype['location'] = undefined;

/**
 * Monotonically increasing list of code point offsets where newlines `\\n` appear.  The line number of a given position is the index `i` where for a given `id` the `line_offsets[i] < id_positions[id] < line_offsets[i+1]`. The column may be derivd from `id_positions[id] - line_offsets[i]`.
 * @member {Array.<Number>} lineOffsets
 */
SourceInfo.prototype['lineOffsets'] = undefined;

/**
 * A map from the parse node id (e.g. `Expr.id`) to the code point offset within the source.
 * @member {Object.<String, Number>} positions
 */
SourceInfo.prototype['positions'] = undefined;

/**
 * A map from the parse node id where a macro replacement was made to the call `Expr` that resulted in a macro expansion.  For example, `has(value.field)` is a function call that is replaced by a `test_only` field selection in the AST. Likewise, the call `list.exists(e, e > 10)` translates to a comprehension expression. The key in the map corresponds to the expression id of the expanded macro, and the value is the call `Expr` that was replaced.
 * @member {Object.<String, module:model/Expr>} macroCalls
 */
SourceInfo.prototype['macroCalls'] = undefined;






export default SourceInfo;

