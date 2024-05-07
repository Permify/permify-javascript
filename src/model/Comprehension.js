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
import Expr from './Expr';

/**
 * The Comprehension model module.
 * @module model/Comprehension
 * @version v0.8.3
 */
class Comprehension {
    /**
     * Constructs a new <code>Comprehension</code>.
     * A comprehension expression applied to a list or map.  Comprehensions are not part of the core syntax, but enabled with macros. A macro matches a specific call signature within a parsed AST and replaces the call with an alternate AST block. Macro expansion happens at parse time.  The following macros are supported within CEL:  Aggregate type macros may be applied to all elements in a list or all keys in a map:  *  &#x60;all&#x60;, &#x60;exists&#x60;, &#x60;exists_one&#x60; -  test a predicate expression against    the inputs and return &#x60;true&#x60; if the predicate is satisfied for all,    any, or only one value &#x60;list.all(x, x &lt; 10)&#x60;. *  &#x60;filter&#x60; - test a predicate expression against the inputs and return    the subset of elements which satisfy the predicate:    &#x60;payments.filter(p, p &gt; 1000)&#x60;. *  &#x60;map&#x60; - apply an expression to all elements in the input and return the    output aggregate type: &#x60;[1, 2, 3].map(i, i * i)&#x60;.  The &#x60;has(m.x)&#x60; macro tests whether the property &#x60;x&#x60; is present in struct &#x60;m&#x60;. The semantics of this macro depend on the type of &#x60;m&#x60;. For proto2 messages &#x60;has(m.x)&#x60; is defined as &#39;defined, but not set&#x60;. For proto3, the macro tests whether the property is set to its default. For map and struct types, the macro tests whether the property &#x60;x&#x60; is defined on &#x60;m&#x60;.
     * @alias module:model/Comprehension
     */
    constructor() { 
        
        Comprehension.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Comprehension</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Comprehension} obj Optional instance to populate.
     * @return {module:model/Comprehension} The populated <code>Comprehension</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Comprehension();

            if (data.hasOwnProperty('iterVar')) {
                obj['iterVar'] = ApiClient.convertToType(data['iterVar'], 'String');
            }
            if (data.hasOwnProperty('iterRange')) {
                obj['iterRange'] = Expr.constructFromObject(data['iterRange']);
            }
            if (data.hasOwnProperty('accuVar')) {
                obj['accuVar'] = ApiClient.convertToType(data['accuVar'], 'String');
            }
            if (data.hasOwnProperty('accuInit')) {
                obj['accuInit'] = Expr.constructFromObject(data['accuInit']);
            }
            if (data.hasOwnProperty('loopCondition')) {
                obj['loopCondition'] = Expr.constructFromObject(data['loopCondition']);
            }
            if (data.hasOwnProperty('loopStep')) {
                obj['loopStep'] = Expr.constructFromObject(data['loopStep']);
            }
            if (data.hasOwnProperty('result')) {
                obj['result'] = Expr.constructFromObject(data['result']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Comprehension</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Comprehension</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['iterVar'] && !(typeof data['iterVar'] === 'string' || data['iterVar'] instanceof String)) {
            throw new Error("Expected the field `iterVar` to be a primitive type in the JSON string but got " + data['iterVar']);
        }
        // validate the optional field `iterRange`
        if (data['iterRange']) { // data not null
          Expr.validateJSON(data['iterRange']);
        }
        // ensure the json data is a string
        if (data['accuVar'] && !(typeof data['accuVar'] === 'string' || data['accuVar'] instanceof String)) {
            throw new Error("Expected the field `accuVar` to be a primitive type in the JSON string but got " + data['accuVar']);
        }
        // validate the optional field `accuInit`
        if (data['accuInit']) { // data not null
          Expr.validateJSON(data['accuInit']);
        }
        // validate the optional field `loopCondition`
        if (data['loopCondition']) { // data not null
          Expr.validateJSON(data['loopCondition']);
        }
        // validate the optional field `loopStep`
        if (data['loopStep']) { // data not null
          Expr.validateJSON(data['loopStep']);
        }
        // validate the optional field `result`
        if (data['result']) { // data not null
          Expr.validateJSON(data['result']);
        }

        return true;
    }


}



/**
 * The name of the iteration variable.
 * @member {String} iterVar
 */
Comprehension.prototype['iterVar'] = undefined;

/**
 * @member {module:model/Expr} iterRange
 */
Comprehension.prototype['iterRange'] = undefined;

/**
 * The name of the variable used for accumulation of the result.
 * @member {String} accuVar
 */
Comprehension.prototype['accuVar'] = undefined;

/**
 * @member {module:model/Expr} accuInit
 */
Comprehension.prototype['accuInit'] = undefined;

/**
 * @member {module:model/Expr} loopCondition
 */
Comprehension.prototype['loopCondition'] = undefined;

/**
 * @member {module:model/Expr} loopStep
 */
Comprehension.prototype['loopStep'] = undefined;

/**
 * @member {module:model/Expr} result
 */
Comprehension.prototype['result'] = undefined;






export default Comprehension;

