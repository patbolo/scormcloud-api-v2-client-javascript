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
    define(['rustici-software-cloud-v2/ApiClient', 'rustici-software-cloud-v2/rustici-software-cloud-v2-model/BatchTagsSchema', 'rustici-software-cloud-v2/rustici-software-cloud-v2-model/MessageSchema', 'rustici-software-cloud-v2/rustici-software-cloud-v2-model/TagListSchema', 'rustici-software-cloud-v2/rustici-software-cloud-v2-model/ZoomiCompanyId', 'rustici-software-cloud-v2/rustici-software-cloud-v2-model/ZoomiCourseOptionsSchema'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../rustici-software-cloud-v2-model/BatchTagsSchema'), require('../rustici-software-cloud-v2-model/MessageSchema'), require('../rustici-software-cloud-v2-model/TagListSchema'), require('../rustici-software-cloud-v2-model/ZoomiCompanyId'), require('../rustici-software-cloud-v2-model/ZoomiCourseOptionsSchema'));
  } else {
    // Browser globals (root is window)
    if (!root.RusticiSoftwareCloudV2) {
      root.RusticiSoftwareCloudV2 = {};
    }
    root.RusticiSoftwareCloudV2.WebsiteApi = factory(root.RusticiSoftwareCloudV2.ApiClient, root.RusticiSoftwareCloudV2.BatchTagsSchema, root.RusticiSoftwareCloudV2.MessageSchema, root.RusticiSoftwareCloudV2.TagListSchema, root.RusticiSoftwareCloudV2.ZoomiCompanyId, root.RusticiSoftwareCloudV2.ZoomiCourseOptionsSchema);
  }
}(this, function(ApiClient, BatchTagsSchema, MessageSchema, TagListSchema, ZoomiCompanyId, ZoomiCourseOptionsSchema) {
  'use strict';

  /**
   * Website service.
   * @module rustici-software-cloud-v2/rustici-software-cloud-v2-api/WebsiteApi
   * @version 1.0.0
   */

  /**
   * Constructs a new WebsiteApi. 
   * @alias module:rustici-software-cloud-v2/rustici-software-cloud-v2-api/WebsiteApi
   * @class
   * @param {module:rustici-software-cloud-v2/ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:rustici-software-cloud-v2/ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the deleteApplicationZoomiKeys operation.
     * @callback module:rustici-software-cloud-v2/rustici-software-cloud-v2-api/WebsiteApi~deleteApplicationZoomiKeysCallback
     * @param {String} error Error message, if any.
     * @param {'String'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete the keys for an application.
     * @param {module:rustici-software-cloud-v2/rustici-software-cloud-v2-api/WebsiteApi~deleteApplicationZoomiKeysCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link 'String'}
     */
    this.deleteApplicationZoomiKeys = function(callback) {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['APP_NORMAL', 'OAUTH'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = 'String';

      return this.apiClient.callApi(
        '/zoomi/key', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteInvitationTags operation.
     * @callback module:rustici-software-cloud-v2/rustici-software-cloud-v2-api/WebsiteApi~deleteInvitationTagsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete tags for this invitation
     * @param {String} invitationId invitation id
     * @param {module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/TagListSchema} tags 
     * @param {module:rustici-software-cloud-v2/rustici-software-cloud-v2-api/WebsiteApi~deleteInvitationTagsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteInvitationTags = function(invitationId, tags, callback) {
      var postBody = tags;

      // verify the required parameter 'invitationId' is set
      if (invitationId == undefined || invitationId == null) {
        throw new Error("Missing the required parameter 'invitationId' when calling deleteInvitationTags");
      }

      // verify the required parameter 'tags' is set
      if (tags == undefined || tags == null) {
        throw new Error("Missing the required parameter 'tags' when calling deleteInvitationTags");
      }


      var pathParams = {
        'invitationId': invitationId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['APP_NORMAL', 'OAUTH'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/invitations/{invitationId}/tags', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteZoomiCourse operation.
     * @callback module:rustici-software-cloud-v2/rustici-software-cloud-v2-api/WebsiteApi~deleteZoomiCourseCallback
     * @param {String} error Error message, if any.
     * @param {'String'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Deletes the course in zoomi
     * @param {String} courseId 
     * @param {Number} versionId The course version
     * @param {module:rustici-software-cloud-v2/rustici-software-cloud-v2-api/WebsiteApi~deleteZoomiCourseCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link 'String'}
     */
    this.deleteZoomiCourse = function(courseId, versionId, callback) {
      var postBody = null;

      // verify the required parameter 'courseId' is set
      if (courseId == undefined || courseId == null) {
        throw new Error("Missing the required parameter 'courseId' when calling deleteZoomiCourse");
      }

      // verify the required parameter 'versionId' is set
      if (versionId == undefined || versionId == null) {
        throw new Error("Missing the required parameter 'versionId' when calling deleteZoomiCourse");
      }


      var pathParams = {
        'courseId': courseId,
        'versionId': versionId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['APP_NORMAL', 'OAUTH'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = 'String';

      return this.apiClient.callApi(
        '/zoomi/course/{courseId}/version/{versionId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getApplicationZoomiCompanyId operation.
     * @callback module:rustici-software-cloud-v2/rustici-software-cloud-v2-api/WebsiteApi~getApplicationZoomiCompanyIdCallback
     * @param {String} error Error message, if any.
     * @param {'String'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Gets the zoomi company id of an application.
     * @param {module:rustici-software-cloud-v2/rustici-software-cloud-v2-api/WebsiteApi~getApplicationZoomiCompanyIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link 'String'}
     */
    this.getApplicationZoomiCompanyId = function(callback) {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['APP_NORMAL', 'OAUTH'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = 'String';

      return this.apiClient.callApi(
        '/zoomi', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getApplicationZoomiPublicKey operation.
     * @callback module:rustici-software-cloud-v2/rustici-software-cloud-v2-api/WebsiteApi~getApplicationZoomiPublicKeyCallback
     * @param {String} error Error message, if any.
     * @param {'String'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Gets the public key for an application.
     * @param {module:rustici-software-cloud-v2/rustici-software-cloud-v2-api/WebsiteApi~getApplicationZoomiPublicKeyCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link 'String'}
     */
    this.getApplicationZoomiPublicKey = function(callback) {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['APP_NORMAL', 'OAUTH'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = 'String';

      return this.apiClient.callApi(
        '/zoomi/key', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getCourseZoomiEnabled operation.
     * @callback module:rustici-software-cloud-v2/rustici-software-cloud-v2-api/WebsiteApi~getCourseZoomiEnabledCallback
     * @param {String} error Error message, if any.
     * @param {'String'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Gets the zoomi enabled value of a course
     * @param {String} courseId 
     * @param {Number} versionId The course version
     * @param {module:rustici-software-cloud-v2/rustici-software-cloud-v2-api/WebsiteApi~getCourseZoomiEnabledCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link 'String'}
     */
    this.getCourseZoomiEnabled = function(courseId, versionId, callback) {
      var postBody = null;

      // verify the required parameter 'courseId' is set
      if (courseId == undefined || courseId == null) {
        throw new Error("Missing the required parameter 'courseId' when calling getCourseZoomiEnabled");
      }

      // verify the required parameter 'versionId' is set
      if (versionId == undefined || versionId == null) {
        throw new Error("Missing the required parameter 'versionId' when calling getCourseZoomiEnabled");
      }


      var pathParams = {
        'courseId': courseId,
        'versionId': versionId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['APP_NORMAL', 'OAUTH'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = 'String';

      return this.apiClient.callApi(
        '/zoomi/course/{courseId}/version/{versionId}/enabled', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getInvitationTags operation.
     * @callback module:rustici-software-cloud-v2/rustici-software-cloud-v2-api/WebsiteApi~getInvitationTagsCallback
     * @param {String} error Error message, if any.
     * @param {module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/TagListSchema} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the tags for this invitation
     * @param {String} invitationId invitation id
     * @param {module:rustici-software-cloud-v2/rustici-software-cloud-v2-api/WebsiteApi~getInvitationTagsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/TagListSchema}
     */
    this.getInvitationTags = function(invitationId, callback) {
      var postBody = null;

      // verify the required parameter 'invitationId' is set
      if (invitationId == undefined || invitationId == null) {
        throw new Error("Missing the required parameter 'invitationId' when calling getInvitationTags");
      }


      var pathParams = {
        'invitationId': invitationId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['APP_NORMAL', 'OAUTH'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = TagListSchema;

      return this.apiClient.callApi(
        '/invitations/{invitationId}/tags', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getZoomiCourseStatus operation.
     * @callback module:rustici-software-cloud-v2/rustici-software-cloud-v2-api/WebsiteApi~getZoomiCourseStatusCallback
     * @param {String} error Error message, if any.
     * @param {'String'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Gets the status for a course and imports to Zoomi
     * @param {String} courseId 
     * @param {Number} versionId The course version
     * @param {module:rustici-software-cloud-v2/rustici-software-cloud-v2-api/WebsiteApi~getZoomiCourseStatusCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link 'String'}
     */
    this.getZoomiCourseStatus = function(courseId, versionId, callback) {
      var postBody = null;

      // verify the required parameter 'courseId' is set
      if (courseId == undefined || courseId == null) {
        throw new Error("Missing the required parameter 'courseId' when calling getZoomiCourseStatus");
      }

      // verify the required parameter 'versionId' is set
      if (versionId == undefined || versionId == null) {
        throw new Error("Missing the required parameter 'versionId' when calling getZoomiCourseStatus");
      }


      var pathParams = {
        'courseId': courseId,
        'versionId': versionId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['APP_NORMAL', 'OAUTH'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = 'String';

      return this.apiClient.callApi(
        '/zoomi/course/{courseId}/version/{versionId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the putInvitationTags operation.
     * @callback module:rustici-software-cloud-v2/rustici-software-cloud-v2-api/WebsiteApi~putInvitationTagsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Set the tags for this invitation
     * @param {String} invitationId invitation id
     * @param {module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/TagListSchema} tags 
     * @param {module:rustici-software-cloud-v2/rustici-software-cloud-v2-api/WebsiteApi~putInvitationTagsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.putInvitationTags = function(invitationId, tags, callback) {
      var postBody = tags;

      // verify the required parameter 'invitationId' is set
      if (invitationId == undefined || invitationId == null) {
        throw new Error("Missing the required parameter 'invitationId' when calling putInvitationTags");
      }

      // verify the required parameter 'tags' is set
      if (tags == undefined || tags == null) {
        throw new Error("Missing the required parameter 'tags' when calling putInvitationTags");
      }


      var pathParams = {
        'invitationId': invitationId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['APP_NORMAL', 'OAUTH'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/invitations/{invitationId}/tags', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the putInvitationTagsBatch operation.
     * @callback module:rustici-software-cloud-v2/rustici-software-cloud-v2-api/WebsiteApi~putInvitationTagsBatchCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Sets all of the provided tags on all of the provided invitations
     * @param {module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/BatchTagsSchema} batch Object representing an array of ids to apply an array of tags to.
     * @param {module:rustici-software-cloud-v2/rustici-software-cloud-v2-api/WebsiteApi~putInvitationTagsBatchCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.putInvitationTagsBatch = function(batch, callback) {
      var postBody = batch;

      // verify the required parameter 'batch' is set
      if (batch == undefined || batch == null) {
        throw new Error("Missing the required parameter 'batch' when calling putInvitationTagsBatch");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['APP_NORMAL', 'OAUTH'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/invitations/tags', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the setApplicationZoomiCompanyId operation.
     * @callback module:rustici-software-cloud-v2/rustici-software-cloud-v2-api/WebsiteApi~setApplicationZoomiCompanyIdCallback
     * @param {String} error Error message, if any.
     * @param {'String'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Set the zoomi company id value of an application.
     * @param {module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/ZoomiCompanyId} zoomiCompanyId 
     * @param {module:rustici-software-cloud-v2/rustici-software-cloud-v2-api/WebsiteApi~setApplicationZoomiCompanyIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link 'String'}
     */
    this.setApplicationZoomiCompanyId = function(zoomiCompanyId, callback) {
      var postBody = zoomiCompanyId;

      // verify the required parameter 'zoomiCompanyId' is set
      if (zoomiCompanyId == undefined || zoomiCompanyId == null) {
        throw new Error("Missing the required parameter 'zoomiCompanyId' when calling setApplicationZoomiCompanyId");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['APP_NORMAL', 'OAUTH'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = 'String';

      return this.apiClient.callApi(
        '/zoomi', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the setCourseZoomiEnabled operation.
     * @callback module:rustici-software-cloud-v2/rustici-software-cloud-v2-api/WebsiteApi~setCourseZoomiEnabledCallback
     * @param {String} error Error message, if any.
     * @param {'String'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Set the zoomi enabled value of a course.
     * @param {String} courseId 
     * @param {Number} versionId The course version
     * @param {Object} opts Optional parameters
     * @param {module:rustici-software-cloud-v2/rustici-software-cloud-v2-model/ZoomiCourseOptionsSchema} opts.zoomiCourseOptions 
     * @param {module:rustici-software-cloud-v2/rustici-software-cloud-v2-api/WebsiteApi~setCourseZoomiEnabledCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link 'String'}
     */
    this.setCourseZoomiEnabled = function(courseId, versionId, opts, callback) {
      opts = opts || {};
      var postBody = opts['zoomiCourseOptions'];

      // verify the required parameter 'courseId' is set
      if (courseId == undefined || courseId == null) {
        throw new Error("Missing the required parameter 'courseId' when calling setCourseZoomiEnabled");
      }

      // verify the required parameter 'versionId' is set
      if (versionId == undefined || versionId == null) {
        throw new Error("Missing the required parameter 'versionId' when calling setCourseZoomiEnabled");
      }


      var pathParams = {
        'courseId': courseId,
        'versionId': versionId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['APP_NORMAL', 'OAUTH'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = 'String';

      return this.apiClient.callApi(
        '/zoomi/course/{courseId}/version/{versionId}/enabled', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));