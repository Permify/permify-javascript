/**
 * Permify API
 * Permify is an open source authorization service for creating fine-grained and scalable authorization systems.
 *
 * The version of the OpenAPI document: v0.9.1
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
    instance = new PermifyApi.Leaf();
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

  describe('Leaf', function() {
    it('should create an instance of Leaf', function() {
      // uncomment below and update the code to test Leaf
      //var instance = new PermifyApi.Leaf();
      //expect(instance).to.be.a(PermifyApi.Leaf);
    });

    it('should have the property computedUserSet (base name: "computedUserSet")', function() {
      // uncomment below and update the code to test the property computedUserSet
      //var instance = new PermifyApi.Leaf();
      //expect(instance).to.be();
    });

    it('should have the property tupleToUserSet (base name: "tupleToUserSet")', function() {
      // uncomment below and update the code to test the property tupleToUserSet
      //var instance = new PermifyApi.Leaf();
      //expect(instance).to.be();
    });

    it('should have the property computedAttribute (base name: "computedAttribute")', function() {
      // uncomment below and update the code to test the property computedAttribute
      //var instance = new PermifyApi.Leaf();
      //expect(instance).to.be();
    });

    it('should have the property call (base name: "call")', function() {
      // uncomment below and update the code to test the property call
      //var instance = new PermifyApi.Leaf();
      //expect(instance).to.be();
    });

  });

}));
