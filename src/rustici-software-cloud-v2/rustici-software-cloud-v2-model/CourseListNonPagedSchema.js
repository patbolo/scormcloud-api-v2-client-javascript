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
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['rustici-software-cloud-v2/ApiClient', 'rustici-software-cloud-v2/rustici-software-cloud-v2-model/CourseSchema'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./CourseSchema'));
  } else {
    // Browser globals (root is window)
    if (!root.RusticiSoftwareCloudV2) {
      root.RusticiSoftwareCloudV2 = {};
    }
    root.RusticiSoftwareCloudV2.CourseListNonPagedSchema = factory(root.RusticiSoftwareCloudV2.ApiClient, root.RusticiSoftwareCloudV2.CourseSchema);
  }
}(this, function(ApiClient, CourseSchema) {
  'use strict';




  /**
   * The CourseListNonPagedSchema model module.
   * @module rustici-software-cloud-v2/rustici-software-cloud-v2-model/CourseListNonPagedSchema
   * @version 1.1.0-beta
   */

  /**
   * Constructs a new <code>CourseListNonPagedSchema</code>.
   * @alias module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/CourseListNonPagedSchema
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>CourseListNonPagedSchema</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/CourseListNonPagedSchema} obj Optional instance to populate.
   * @return {module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/CourseListNonPagedSchema} The populated <code>CourseListNonPagedSchema</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('courses')) {
        obj['courses'] = ApiClient.convertToType(data['courses'], [CourseSchema]);
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/CourseSchema>} courses
   */
  exports.prototype['courses'] = undefined;



  return exports;
}));


