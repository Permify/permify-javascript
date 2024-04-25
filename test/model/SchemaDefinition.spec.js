/**
 * Permify API
 * Permify is an open source authorization service for creating fine-grained and scalable authorization systems.
 *
 * The version of the OpenAPI document: v0.8.1
 * Contact: hello@permify.co
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.PermifyApi);
  }
}(this, function(expect, PermifyApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new PermifyApi.SchemaDefinition();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('SchemaDefinition', function() {
    it('should create an instance of SchemaDefinition', function() {
      // uncomment below and update the code to test SchemaDefinition
      //var instance = new PermifyApi.SchemaDefinition();
      //expect(instance).to.be.a(PermifyApi.SchemaDefinition);
    });

    it('should have the property entityDefinitions (base name: "entityDefinitions")', function() {
      // uncomment below and update the code to test the property entityDefinitions
      //var instance = new PermifyApi.SchemaDefinition();
      //expect(instance).to.be();
    });

    it('should have the property ruleDefinitions (base name: "ruleDefinitions")', function() {
      // uncomment below and update the code to test the property ruleDefinitions
      //var instance = new PermifyApi.SchemaDefinition();
      //expect(instance).to.be();
    });

    it('should have the property references (base name: "references")', function() {
      // uncomment below and update the code to test the property references
      //var instance = new PermifyApi.SchemaDefinition();
      //expect(instance).to.be();
    });

  });

}));
