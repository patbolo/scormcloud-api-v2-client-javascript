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
    instance = new RusticiSoftwareCloudV2.ObjectiveSchema();
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

  describe('ObjectiveSchema', function() {
    it('should create an instance of ObjectiveSchema', function() {
      // uncomment below and update the code to test ObjectiveSchema
      //var instane = new RusticiSoftwareCloudV2.ObjectiveSchema();
      //expect(instance).to.be.a(RusticiSoftwareCloudV2.ObjectiveSchema);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new RusticiSoftwareCloudV2.ObjectiveSchema();
      //expect(instance).to.be();
    });

    it('should have the property primary (base name: "primary")', function() {
      // uncomment below and update the code to test the property primary
      //var instane = new RusticiSoftwareCloudV2.ObjectiveSchema();
      //expect(instance).to.be();
    });

    it('should have the property score (base name: "score")', function() {
      // uncomment below and update the code to test the property score
      //var instane = new RusticiSoftwareCloudV2.ObjectiveSchema();
      //expect(instance).to.be();
    });

    it('should have the property scoreMax (base name: "scoreMax")', function() {
      // uncomment below and update the code to test the property scoreMax
      //var instane = new RusticiSoftwareCloudV2.ObjectiveSchema();
      //expect(instance).to.be();
    });

    it('should have the property scoreMin (base name: "scoreMin")', function() {
      // uncomment below and update the code to test the property scoreMin
      //var instane = new RusticiSoftwareCloudV2.ObjectiveSchema();
      //expect(instance).to.be();
    });

    it('should have the property scoreRaw (base name: "scoreRaw")', function() {
      // uncomment below and update the code to test the property scoreRaw
      //var instane = new RusticiSoftwareCloudV2.ObjectiveSchema();
      //expect(instance).to.be();
    });

    it('should have the property previousScoreScaled (base name: "previousScoreScaled")', function() {
      // uncomment below and update the code to test the property previousScoreScaled
      //var instane = new RusticiSoftwareCloudV2.ObjectiveSchema();
      //expect(instance).to.be();
    });

    it('should have the property firstScoreScaled (base name: "firstScoreScaled")', function() {
      // uncomment below and update the code to test the property firstScoreScaled
      //var instane = new RusticiSoftwareCloudV2.ObjectiveSchema();
      //expect(instance).to.be();
    });

    it('should have the property progressMeasure (base name: "progressMeasure")', function() {
      // uncomment below and update the code to test the property progressMeasure
      //var instane = new RusticiSoftwareCloudV2.ObjectiveSchema();
      //expect(instance).to.be();
    });

    it('should have the property firstSuccessTimeStamp (base name: "firstSuccessTimeStamp")', function() {
      // uncomment below and update the code to test the property firstSuccessTimeStamp
      //var instane = new RusticiSoftwareCloudV2.ObjectiveSchema();
      //expect(instance).to.be();
    });

    it('should have the property objectiveCompletion (base name: "objectiveCompletion")', function() {
      // uncomment below and update the code to test the property objectiveCompletion
      //var instane = new RusticiSoftwareCloudV2.ObjectiveSchema();
      //expect(instance).to.be();
    });

    it('should have the property objectiveSuccess (base name: "objectiveSuccess")', function() {
      // uncomment below and update the code to test the property objectiveSuccess
      //var instane = new RusticiSoftwareCloudV2.ObjectiveSchema();
      //expect(instance).to.be();
    });

    it('should have the property previousObjectiveSuccess (base name: "previousObjectiveSuccess")', function() {
      // uncomment below and update the code to test the property previousObjectiveSuccess
      //var instane = new RusticiSoftwareCloudV2.ObjectiveSchema();
      //expect(instance).to.be();
    });

  });

}));