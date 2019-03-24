/**
 * SCORM Cloud Rest API
 * REST API used for SCORM Cloud integrations.
 *
 * OpenAPI spec version: 2.0 beta
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.RusticiSoftwareCloudV2);
  }
}(this, function(expect, RusticiSoftwareCloudV2) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new RusticiSoftwareCloudV2.RegistrationSchema();
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

  describe('RegistrationSchema', function() {
    it('should create an instance of RegistrationSchema', function() {
      // uncomment below and update the code to test RegistrationSchema
      //var instane = new RusticiSoftwareCloudV2.RegistrationSchema();
      //expect(instance).to.be.a(RusticiSoftwareCloudV2.RegistrationSchema);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new RusticiSoftwareCloudV2.RegistrationSchema();
      //expect(instance).to.be();
    });

    it('should have the property instance (base name: "instance")', function() {
      // uncomment below and update the code to test the property instance
      //var instane = new RusticiSoftwareCloudV2.RegistrationSchema();
      //expect(instance).to.be();
    });

    it('should have the property xapiRegistrationId (base name: "xapiRegistrationId")', function() {
      // uncomment below and update the code to test the property xapiRegistrationId
      //var instane = new RusticiSoftwareCloudV2.RegistrationSchema();
      //expect(instance).to.be();
    });

    it('should have the property dispatchId (base name: "dispatchId")', function() {
      // uncomment below and update the code to test the property dispatchId
      //var instane = new RusticiSoftwareCloudV2.RegistrationSchema();
      //expect(instance).to.be();
    });

    it('should have the property updated (base name: "updated")', function() {
      // uncomment below and update the code to test the property updated
      //var instane = new RusticiSoftwareCloudV2.RegistrationSchema();
      //expect(instance).to.be();
    });

    it('should have the property registrationCompletion (base name: "registrationCompletion")', function() {
      // uncomment below and update the code to test the property registrationCompletion
      //var instane = new RusticiSoftwareCloudV2.RegistrationSchema();
      //expect(instance).to.be();
    });

    it('should have the property registrationCompletionAmount (base name: "registrationCompletionAmount")', function() {
      // uncomment below and update the code to test the property registrationCompletionAmount
      //var instane = new RusticiSoftwareCloudV2.RegistrationSchema();
      //expect(instance).to.be();
    });

    it('should have the property registrationSuccess (base name: "registrationSuccess")', function() {
      // uncomment below and update the code to test the property registrationSuccess
      //var instane = new RusticiSoftwareCloudV2.RegistrationSchema();
      //expect(instance).to.be();
    });

    it('should have the property score (base name: "score")', function() {
      // uncomment below and update the code to test the property score
      //var instane = new RusticiSoftwareCloudV2.RegistrationSchema();
      //expect(instance).to.be();
    });

    it('should have the property totalSecondsTracked (base name: "totalSecondsTracked")', function() {
      // uncomment below and update the code to test the property totalSecondsTracked
      //var instane = new RusticiSoftwareCloudV2.RegistrationSchema();
      //expect(instance).to.be();
    });

    it('should have the property firstAccessDate (base name: "firstAccessDate")', function() {
      // uncomment below and update the code to test the property firstAccessDate
      //var instane = new RusticiSoftwareCloudV2.RegistrationSchema();
      //expect(instance).to.be();
    });

    it('should have the property lastAccessDate (base name: "lastAccessDate")', function() {
      // uncomment below and update the code to test the property lastAccessDate
      //var instane = new RusticiSoftwareCloudV2.RegistrationSchema();
      //expect(instance).to.be();
    });

    it('should have the property completedDate (base name: "completedDate")', function() {
      // uncomment below and update the code to test the property completedDate
      //var instane = new RusticiSoftwareCloudV2.RegistrationSchema();
      //expect(instance).to.be();
    });

    it('should have the property createdDate (base name: "createdDate")', function() {
      // uncomment below and update the code to test the property createdDate
      //var instane = new RusticiSoftwareCloudV2.RegistrationSchema();
      //expect(instance).to.be();
    });

    it('should have the property course (base name: "course")', function() {
      // uncomment below and update the code to test the property course
      //var instane = new RusticiSoftwareCloudV2.RegistrationSchema();
      //expect(instance).to.be();
    });

    it('should have the property learner (base name: "learner")', function() {
      // uncomment below and update the code to test the property learner
      //var instane = new RusticiSoftwareCloudV2.RegistrationSchema();
      //expect(instance).to.be();
    });

    it('should have the property globalObjectives (base name: "globalObjectives")', function() {
      // uncomment below and update the code to test the property globalObjectives
      //var instane = new RusticiSoftwareCloudV2.RegistrationSchema();
      //expect(instance).to.be();
    });

    it('should have the property sharedData (base name: "sharedData")', function() {
      // uncomment below and update the code to test the property sharedData
      //var instane = new RusticiSoftwareCloudV2.RegistrationSchema();
      //expect(instance).to.be();
    });

    it('should have the property suspendedActivityId (base name: "suspendedActivityId")', function() {
      // uncomment below and update the code to test the property suspendedActivityId
      //var instane = new RusticiSoftwareCloudV2.RegistrationSchema();
      //expect(instance).to.be();
    });

    it('should have the property activityDetails (base name: "activityDetails")', function() {
      // uncomment below and update the code to test the property activityDetails
      //var instane = new RusticiSoftwareCloudV2.RegistrationSchema();
      //expect(instance).to.be();
    });

  });

}));