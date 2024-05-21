/**
 * Permify API
 * Permify is an open source authorization service for creating fine-grained and scalable authorization systems.
 *
 * The version of the OpenAPI document: v0.8.7
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
    instance = new PermifyApi.PermissionApi();
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

  describe('PermissionApi', function() {
    describe('permissionsCheck', function() {
      it('should call permissionsCheck successfully', function(done) {
        //uncomment below and update the code to test permissionsCheck
        //instance.permissionsCheck(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('permissionsExpand', function() {
      it('should call permissionsExpand successfully', function(done) {
        //uncomment below and update the code to test permissionsExpand
        //instance.permissionsExpand(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('permissionsLookupEntity', function() {
      it('should call permissionsLookupEntity successfully', function(done) {
        //uncomment below and update the code to test permissionsLookupEntity
        //instance.permissionsLookupEntity(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('permissionsLookupEntityStream', function() {
      it('should call permissionsLookupEntityStream successfully', function(done) {
        //uncomment below and update the code to test permissionsLookupEntityStream
        //instance.permissionsLookupEntityStream(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('permissionsLookupSubject', function() {
      it('should call permissionsLookupSubject successfully', function(done) {
        //uncomment below and update the code to test permissionsLookupSubject
        //instance.permissionsLookupSubject(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('permissionsSubjectPermission', function() {
      it('should call permissionsSubjectPermission successfully', function(done) {
        //uncomment below and update the code to test permissionsSubjectPermission
        //instance.permissionsSubjectPermission(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
