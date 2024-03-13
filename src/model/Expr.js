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
import Comprehension from './Comprehension';
import Constant from './Constant';
import CreateList from './CreateList';
import CreateStruct from './CreateStruct';
import ExprCall from './ExprCall';
import Ident from './Ident';
import Select from './Select';

/**
 * The Expr model module.
 * @module model/Expr
 * @version v0.7.7
 */
class Expr {
    /**
     * Constructs a new <code>Expr</code>.
     * An abstract representation of a common expression.  Expressions are abstractly represented as a collection of identifiers, select statements, function calls, literals, and comprehensions. All operators with the exception of the &#39;.&#39; operator are modelled as function calls. This makes it easy to represent new operators into the existing AST.  All references within expressions must resolve to a [Decl][google.api.expr.v1alpha1.Decl] provided at type-check for an expression to be valid. A reference may either be a bare identifier &#x60;name&#x60; or a qualified identifier &#x60;google.api.name&#x60;. References may either refer to a value or a function declaration.  For example, the expression &#x60;google.api.name.startsWith(&#39;expr&#39;)&#x60; references the declaration &#x60;google.api.name&#x60; within a [Expr.Select][google.api.expr.v1alpha1.Expr.Select] expression, and the function declaration &#x60;startsWith&#x60;.
     * @alias module:model/Expr
     */
    constructor() { 
        
        Expr.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Expr</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Expr} obj Optional instance to populate.
     * @return {module:model/Expr} The populated <code>Expr</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Expr();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('constExpr')) {
                obj['constExpr'] = Constant.constructFromObject(data['constExpr']);
            }
            if (data.hasOwnProperty('identExpr')) {
                obj['identExpr'] = Ident.constructFromObject(data['identExpr']);
            }
            if (data.hasOwnProperty('selectExpr')) {
                obj['selectExpr'] = Select.constructFromObject(data['selectExpr']);
            }
            if (data.hasOwnProperty('callExpr')) {
                obj['callExpr'] = ExprCall.constructFromObject(data['callExpr']);
            }
            if (data.hasOwnProperty('listExpr')) {
                obj['listExpr'] = CreateList.constructFromObject(data['listExpr']);
            }
            if (data.hasOwnProperty('structExpr')) {
                obj['structExpr'] = CreateStruct.constructFromObject(data['structExpr']);
            }
            if (data.hasOwnProperty('comprehensionExpr')) {
                obj['comprehensionExpr'] = Comprehension.constructFromObject(data['comprehensionExpr']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Expr</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Expr</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // validate the optional field `constExpr`
        if (data['constExpr']) { // data not null
          Constant.validateJSON(data['constExpr']);
        }
        // validate the optional field `identExpr`
        if (data['identExpr']) { // data not null
          Ident.validateJSON(data['identExpr']);
        }
        // validate the optional field `selectExpr`
        if (data['selectExpr']) { // data not null
          Select.validateJSON(data['selectExpr']);
        }
        // validate the optional field `callExpr`
        if (data['callExpr']) { // data not null
          ExprCall.validateJSON(data['callExpr']);
        }
        // validate the optional field `listExpr`
        if (data['listExpr']) { // data not null
          CreateList.validateJSON(data['listExpr']);
        }
        // validate the optional field `structExpr`
        if (data['structExpr']) { // data not null
          CreateStruct.validateJSON(data['structExpr']);
        }
        // validate the optional field `comprehensionExpr`
        if (data['comprehensionExpr']) { // data not null
          Comprehension.validateJSON(data['comprehensionExpr']);
        }

        return true;
    }


}



/**
 * Required. An id assigned to this node by the parser which is unique in a given expression tree. This is used to associate type information and other attributes to a node in the parse tree.
 * @member {String} id
 */
Expr.prototype['id'] = undefined;

/**
 * @member {module:model/Constant} constExpr
 */
Expr.prototype['constExpr'] = undefined;

/**
 * @member {module:model/Ident} identExpr
 */
Expr.prototype['identExpr'] = undefined;

/**
 * @member {module:model/Select} selectExpr
 */
Expr.prototype['selectExpr'] = undefined;

/**
 * @member {module:model/ExprCall} callExpr
 */
Expr.prototype['callExpr'] = undefined;

/**
 * @member {module:model/CreateList} listExpr
 */
Expr.prototype['listExpr'] = undefined;

/**
 * @member {module:model/CreateStruct} structExpr
 */
Expr.prototype['structExpr'] = undefined;

/**
 * @member {module:model/Comprehension} comprehensionExpr
 */
Expr.prototype['comprehensionExpr'] = undefined;






export default Expr;

