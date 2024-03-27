/**
 * Permify API
 * Permify is an open source authorization service for creating fine-grained and scalable authorization systems.
 *
 * The version of the OpenAPI document: v0.7.9
 * Contact: hello@permify.co
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import Expr from './Expr';
import SourceInfo from './SourceInfo';
import V1alpha1Reference from './V1alpha1Reference';
import V1alpha1Type from './V1alpha1Type';

/**
 * The CheckedExpr model module.
 * @module model/CheckedExpr
 * @version v0.7.9
 */
class CheckedExpr {
    /**
     * Constructs a new <code>CheckedExpr</code>.
     * A CEL expression which has been successfully type checked.
     * @alias module:model/CheckedExpr
     */
    constructor() { 
        
        CheckedExpr.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CheckedExpr</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CheckedExpr} obj Optional instance to populate.
     * @return {module:model/CheckedExpr} The populated <code>CheckedExpr</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CheckedExpr();

            if (data.hasOwnProperty('referenceMap')) {
                obj['referenceMap'] = ApiClient.convertToType(data['referenceMap'], {'String': V1alpha1Reference});
            }
            if (data.hasOwnProperty('typeMap')) {
                obj['typeMap'] = ApiClient.convertToType(data['typeMap'], {'String': V1alpha1Type});
            }
            if (data.hasOwnProperty('sourceInfo')) {
                obj['sourceInfo'] = SourceInfo.constructFromObject(data['sourceInfo']);
            }
            if (data.hasOwnProperty('exprVersion')) {
                obj['exprVersion'] = ApiClient.convertToType(data['exprVersion'], 'String');
            }
            if (data.hasOwnProperty('expr')) {
                obj['expr'] = Expr.constructFromObject(data['expr']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CheckedExpr</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CheckedExpr</code>.
     */
    static validateJSON(data) {
        // validate the optional field `sourceInfo`
        if (data['sourceInfo']) { // data not null
          SourceInfo.validateJSON(data['sourceInfo']);
        }
        // ensure the json data is a string
        if (data['exprVersion'] && !(typeof data['exprVersion'] === 'string' || data['exprVersion'] instanceof String)) {
            throw new Error("Expected the field `exprVersion` to be a primitive type in the JSON string but got " + data['exprVersion']);
        }
        // validate the optional field `expr`
        if (data['expr']) { // data not null
          Expr.validateJSON(data['expr']);
        }

        return true;
    }


}



/**
 * A map from expression ids to resolved references.  The following entries are in this table:  - An Ident or Select expression is represented here if it resolves to a   declaration. For instance, if `a.b.c` is represented by   `select(select(id(a), b), c)`, and `a.b` resolves to a declaration,   while `c` is a field selection, then the reference is attached to the   nested select expression (but not to the id or or the outer select).   In turn, if `a` resolves to a declaration and `b.c` are field selections,   the reference is attached to the ident expression. - Every Call expression has an entry here, identifying the function being   called. - Every CreateStruct expression for a message has an entry, identifying   the message.
 * @member {Object.<String, module:model/V1alpha1Reference>} referenceMap
 */
CheckedExpr.prototype['referenceMap'] = undefined;

/**
 * A map from expression ids to types.  Every expression node which has a type different than DYN has a mapping here. If an expression has type DYN, it is omitted from this map to save space.
 * @member {Object.<String, module:model/V1alpha1Type>} typeMap
 */
CheckedExpr.prototype['typeMap'] = undefined;

/**
 * @member {module:model/SourceInfo} sourceInfo
 */
CheckedExpr.prototype['sourceInfo'] = undefined;

/**
 * The expr version indicates the major / minor version number of the `expr` representation.  The most common reason for a version change will be to indicate to the CEL runtimes that transformations have been performed on the expr during static analysis. In some cases, this will save the runtime the work of applying the same or similar transformations prior to evaluation.
 * @member {String} exprVersion
 */
CheckedExpr.prototype['exprVersion'] = undefined;

/**
 * @member {module:model/Expr} expr
 */
CheckedExpr.prototype['expr'] = undefined;






export default CheckedExpr;

