
/**
 * Module dependencies.
 */

var integration = require('segmentio-integration');
var mapper = require('./mapper');

/**
 * Expose `Knowtify`
 *
 * http://www.knowtify.io/api
 */

var Knowtify = module.exports = integration('Knowtify')
  .channels(['server', 'mobile', 'client'])
  .endpoint('http://www.knowtify.io/api/v1')
  .ensure('settings.apiKey')
  .mapper(mapper)
  .retries(2);

/**
 * Identify.
 *
 * http://www.knowtify.io/api
 *
 * @param {Object} payload
 * @param {Function} fn
 * @api public
 */

Knowtify.prototype.identify = function(payload, fn){
  return this
    .post()
    .send(payload)
    .end(this.handle(fn));
};

/**
 * Track.
 *
 * http://www.knowtify.io/api
 *
 * @param {Object} payload
 * @param {Function} fn
 * @api public
 */

Knowtify.prototype.track = function(payload, fn){
  return this
    .post()
    .send(payload)
    .end(this.handle(fn));
};

/**
 * Page.
 *
 * http://www.knowtify.io/api
 *
 * @param {Object} payload
 * @param {Function} fn
 * @api public
 */

Knowtify.prototype.page = function(payload, fn){
  return this
    .post()
    .send(payload)
    .end(this.handle(fn));
};

/**
 * Screen.
 *
 * http://www.knowtify.io/api
 *
 * @param {Object} payload
 * @param {Function} fn
 * @api public
 */

Knowtify.prototype.screen = function(payload, fn){
  return this
    .post()
    .send(payload)
    .end(this.handle(fn));
};

/**
 * Group.
 *
 * http://www.knowtify.io/api
 *
 * @param {Object} payload
 * @param {Function} fn
 * @api public
 */

Knowtify.prototype.group = function(payload, fn){
  return this
    .post()
    .send(payload)
    .end(this.handle(fn));
};

/**
 * Alias.
 *
 * http://www.knowtify.io/api
 *
 * @param {Object} payload
 * @param {Function} fn
 * @api public
 */

Knowtify.prototype.alias = function(payload, fn){
  return this
    .post()
    .send(payload)
    .end(this.handle(fn));
};
