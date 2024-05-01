/**
 * Permify API
 * Permify is an open source authorization service for creating fine-grained and scalable authorization systems.
 *
 * The version of the OpenAPI document: v0.8.2
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
    instance = new PermifyApi.Constant();
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

  describe('Constant', function() {
    it('should create an instance of Constant', function() {
      // uncomment below and update the code to test Constant
      //var instance = new PermifyApi.Constant();
      //expect(instance).to.be.a(PermifyApi.Constant);
    });

    it('should have the property nullValue (base name: "nullValue")', function() {
      // uncomment below and update the code to test the property nullValue
      //var instance = new PermifyApi.Constant();
      //expect(instance).to.be();
    });

    it('should have the property boolValue (base name: "boolValue")', function() {
      // uncomment below and update the code to test the property boolValue
      //var instance = new PermifyApi.Constant();
      //expect(instance).to.be();
    });

    it('should have the property int64Value (base name: "int64Value")', function() {
      // uncomment below and update the code to test the property int64Value
      //var instance = new PermifyApi.Constant();
      //expect(instance).to.be();
    });

    it('should have the property uint64Value (base name: "uint64Value")', function() {
      // uncomment below and update the code to test the property uint64Value
      //var instance = new PermifyApi.Constant();
      //expect(instance).to.be();
    });

    it('should have the property doubleValue (base name: "doubleValue")', function() {
      // uncomment below and update the code to test the property doubleValue
      //var instance = new PermifyApi.Constant();
      //expect(instance).to.be();
    });

    it('should have the property stringValue (base name: "stringValue")', function() {
      // uncomment below and update the code to test the property stringValue
      //var instance = new PermifyApi.Constant();
      //expect(instance).to.be();
    });

    it('should have the property bytesValue (base name: "bytesValue")', function() {
      // uncomment below and update the code to test the property bytesValue
      //var instance = new PermifyApi.Constant();
      //expect(instance).to.be();
    });

    it('should have the property durationValue (base name: "durationValue")', function() {
      // uncomment below and update the code to test the property durationValue
      //var instance = new PermifyApi.Constant();
      //expect(instance).to.be();
    });

    it('should have the property timestampValue (base name: "timestampValue")', function() {
      // uncomment below and update the code to test the property timestampValue
      //var instance = new PermifyApi.Constant();
      //expect(instance).to.be();
    });

  });

}));
