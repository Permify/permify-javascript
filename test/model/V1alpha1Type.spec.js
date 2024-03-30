/**
 * Permify API
 * Permify is an open source authorization service for creating fine-grained and scalable authorization systems.
 *
 * The version of the OpenAPI document: v0.8.0
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
    instance = new PermifyApi.V1alpha1Type();
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

  describe('V1alpha1Type', function() {
    it('should create an instance of V1alpha1Type', function() {
      // uncomment below and update the code to test V1alpha1Type
      //var instance = new PermifyApi.V1alpha1Type();
      //expect(instance).to.be.a(PermifyApi.V1alpha1Type);
    });

    it('should have the property dyn (base name: "dyn")', function() {
      // uncomment below and update the code to test the property dyn
      //var instance = new PermifyApi.V1alpha1Type();
      //expect(instance).to.be();
    });

    it('should have the property _null (base name: "null")', function() {
      // uncomment below and update the code to test the property _null
      //var instance = new PermifyApi.V1alpha1Type();
      //expect(instance).to.be();
    });

    it('should have the property primitive (base name: "primitive")', function() {
      // uncomment below and update the code to test the property primitive
      //var instance = new PermifyApi.V1alpha1Type();
      //expect(instance).to.be();
    });

    it('should have the property wrapper (base name: "wrapper")', function() {
      // uncomment below and update the code to test the property wrapper
      //var instance = new PermifyApi.V1alpha1Type();
      //expect(instance).to.be();
    });

    it('should have the property wellKnown (base name: "wellKnown")', function() {
      // uncomment below and update the code to test the property wellKnown
      //var instance = new PermifyApi.V1alpha1Type();
      //expect(instance).to.be();
    });

    it('should have the property listType (base name: "listType")', function() {
      // uncomment below and update the code to test the property listType
      //var instance = new PermifyApi.V1alpha1Type();
      //expect(instance).to.be();
    });

    it('should have the property mapType (base name: "mapType")', function() {
      // uncomment below and update the code to test the property mapType
      //var instance = new PermifyApi.V1alpha1Type();
      //expect(instance).to.be();
    });

    it('should have the property _function (base name: "function")', function() {
      // uncomment below and update the code to test the property _function
      //var instance = new PermifyApi.V1alpha1Type();
      //expect(instance).to.be();
    });

    it('should have the property messageType (base name: "messageType")', function() {
      // uncomment below and update the code to test the property messageType
      //var instance = new PermifyApi.V1alpha1Type();
      //expect(instance).to.be();
    });

    it('should have the property typeParam (base name: "typeParam")', function() {
      // uncomment below and update the code to test the property typeParam
      //var instance = new PermifyApi.V1alpha1Type();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instance = new PermifyApi.V1alpha1Type();
      //expect(instance).to.be();
    });

    it('should have the property error (base name: "error")', function() {
      // uncomment below and update the code to test the property error
      //var instance = new PermifyApi.V1alpha1Type();
      //expect(instance).to.be();
    });

    it('should have the property abstractType (base name: "abstractType")', function() {
      // uncomment below and update the code to test the property abstractType
      //var instance = new PermifyApi.V1alpha1Type();
      //expect(instance).to.be();
    });

  });

}));
