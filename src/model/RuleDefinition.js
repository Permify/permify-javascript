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
import AttributeType from './AttributeType';
import CheckedExpr from './CheckedExpr';

/**
 * The RuleDefinition model module.
 * @module model/RuleDefinition
 * @version v0.7.7
 */
class RuleDefinition {
    /**
     * Constructs a new <code>RuleDefinition</code>.
     * The RuleDefinition message provides detailed information about a specific rule.
     * @alias module:model/RuleDefinition
     */
    constructor() { 
        
        RuleDefinition.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>RuleDefinition</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RuleDefinition} obj Optional instance to populate.
     * @return {module:model/RuleDefinition} The populated <code>RuleDefinition</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RuleDefinition();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('arguments')) {
                obj['arguments'] = ApiClient.convertToType(data['arguments'], {'String': AttributeType});
            }
            if (data.hasOwnProperty('expression')) {
                obj['expression'] = CheckedExpr.constructFromObject(data['expression']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>RuleDefinition</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>RuleDefinition</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // validate the optional field `expression`
        if (data['expression']) { // data not null
          CheckedExpr.validateJSON(data['expression']);
        }

        return true;
    }


}



/**
 * The name of the rule, which follows a specific string pattern and has a maximum byte size.
 * @member {String} name
 */
RuleDefinition.prototype['name'] = undefined;

/**
 * Map of arguments for this rule. The key is the attribute name, and the value is the AttributeType.
 * @member {Object.<String, module:model/AttributeType>} arguments
 */
RuleDefinition.prototype['arguments'] = undefined;

/**
 * @member {module:model/CheckedExpr} expression
 */
RuleDefinition.prototype['expression'] = undefined;






export default RuleDefinition;

