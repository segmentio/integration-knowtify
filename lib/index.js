
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
 //.endpoint('http://www.knowtify.io/hook/segment')

var Knowtify = module.exports = integration('Knowtify')
  .channels(['server', 'mobile', 'client'])
  .endpoint('http://www.knowtify.io/hook/segment')
  .ensure('settings.apiToken')
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
    .query({ token: this.settings.apiToken })
    .type('json')
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
 //.auth(this.settings.apiToken)

Knowtify.prototype.track = function(payload, fn){
  return this
    .post()
    .query({ token: this.settings.apiToken })
    .type('json')
    .send(payload)
    .end(this.handle(fn));
};
