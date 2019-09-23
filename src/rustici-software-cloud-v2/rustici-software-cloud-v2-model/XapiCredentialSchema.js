/**
 * SCORM Cloud Rest API
 * REST API used for SCORM Cloud integrations.
 *
 * OpenAPI spec version: 2.0
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
    define(['rustici-software-cloud-v2/ApiClient', 'rustici-software-cloud-v2/rustici-software-cloud-v2-model/XapiCredentialAuthTypeSchema', 'rustici-software-cloud-v2/rustici-software-cloud-v2-model/XapiCredentialPermissionsLevelSchema'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./XapiCredentialAuthTypeSchema'), require('./XapiCredentialPermissionsLevelSchema'));
  } else {
    // Browser globals (root is window)
    if (!root.RusticiSoftwareCloudV2) {
      root.RusticiSoftwareCloudV2 = {};
    }
    root.RusticiSoftwareCloudV2.XapiCredentialSchema = factory(root.RusticiSoftwareCloudV2.ApiClient, root.RusticiSoftwareCloudV2.XapiCredentialAuthTypeSchema, root.RusticiSoftwareCloudV2.XapiCredentialPermissionsLevelSchema);
  }
}(this, function(ApiClient, XapiCredentialAuthTypeSchema, XapiCredentialPermissionsLevelSchema) {
  'use strict';




  /**
   * The XapiCredentialSchema model module.
   * @module rustici-software-cloud-v2/rustici-software-cloud-v2-model/XapiCredentialSchema
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>XapiCredentialSchema</code>.
   * @alias module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/XapiCredentialSchema
   * @class
   * @param name {String} 
   * @param secret {String} 
   * @param isEnabled {Boolean} 
   * @param auth {module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/XapiCredentialAuthTypeSchema} 
   * @param permissionsLevel {module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/XapiCredentialPermissionsLevelSchema} 
   */
  var exports = function(name, secret, isEnabled, auth, permissionsLevel) {
    var _this = this;


    _this['name'] = name;

    _this['secret'] = secret;
    _this['isEnabled'] = isEnabled;
    _this['auth'] = auth;
    _this['permissionsLevel'] = permissionsLevel;
  };

  /**
   * Constructs a <code>XapiCredentialSchema</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/XapiCredentialSchema} obj Optional instance to populate.
   * @return {module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/XapiCredentialSchema} The populated <code>XapiCredentialSchema</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('info')) {
        obj['info'] = ApiClient.convertToType(data['info'], 'String');
      }
      if (data.hasOwnProperty('secret')) {
        obj['secret'] = ApiClient.convertToType(data['secret'], 'String');
      }
      if (data.hasOwnProperty('isEnabled')) {
        obj['isEnabled'] = ApiClient.convertToType(data['isEnabled'], 'Boolean');
      }
      if (data.hasOwnProperty('auth')) {
        obj['auth'] = XapiCredentialAuthTypeSchema.constructFromObject(data['auth']);
      }
      if (data.hasOwnProperty('permissionsLevel')) {
        obj['permissionsLevel'] = XapiCredentialPermissionsLevelSchema.constructFromObject(data['permissionsLevel']);
      }
    }
    return obj;
  }

  /**
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {String} info
   */
  exports.prototype['info'] = undefined;
  /**
   * @member {String} secret
   */
  exports.prototype['secret'] = undefined;
  /**
   * @member {Boolean} isEnabled
   */
  exports.prototype['isEnabled'] = undefined;
  /**
   * @member {module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/XapiCredentialAuthTypeSchema} auth
   */
  exports.prototype['auth'] = undefined;
  /**
   * @member {module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/XapiCredentialPermissionsLevelSchema} permissionsLevel
   */
  exports.prototype['permissionsLevel'] = undefined;



  return exports;
}));

