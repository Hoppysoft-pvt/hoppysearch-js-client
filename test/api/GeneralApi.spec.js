/*
 * SearchHS
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.42
 *
 * Do not edit the class manually.
 *
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
    factory(root.expect, root.SearchHs);
  }
}(this, function(expect, SearchHs) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new SearchHs.GeneralApi();
  });

  describe('(package)', function() {
    describe('GeneralApi', function() {
      describe('v1ClearIndexDelete', function() {
        it('should call v1ClearIndexDelete successfully', function(done) {
          // TODO: uncomment v1ClearIndexDelete call
          /*

          instance.v1ClearIndexDelete(function(error, data, response) {
            if (error) {
              done(error);
              return;
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('v1DeletePost', function() {
        it('should call v1DeletePost successfully', function(done) {
          // TODO: uncomment, update parameter values for v1DeletePost call
          /*
          var opts = {};

          instance.v1DeletePost(opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('v1IndexPost', function() {
        it('should call v1IndexPost successfully', function(done) {
          // TODO: uncomment, update parameter values for v1IndexPost call
          /*
          var opts = {};

          instance.v1IndexPost(opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('v1SearchGet', function() {
        it('should call v1SearchGet successfully', function(done) {
          // TODO: uncomment, update parameter values for v1SearchGet call
          /*
          var opts = {};

          instance.v1SearchGet(opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('v1SearchPost', function() {
        it('should call v1SearchPost successfully', function(done) {
          // TODO: uncomment, update parameter values for v1SearchPost call
          /*
          var opts = {};

          instance.v1SearchPost(opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('v1StatsGet', function() {
        it('should call v1StatsGet successfully', function(done) {
          // TODO: uncomment v1StatsGet call
          /*

          instance.v1StatsGet(function(error, data, response) {
            if (error) {
              done(error);
              return;
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
    });
  });

}));
