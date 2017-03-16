
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
  .endpoint('https://www.knowtify.io/hook/segment')
  .ensure('settings.apiToken')
  .mapper(mapper)
  .retries(2);

Knowtify.prototype.identify = request;
Knowtify.prototype.track = request;

function request(payload, fn){
  return this
    .post()
    .query({ token: this.settings.apiToken })
    .type('json')
    .send(payload)
    .end(this.handle(function(err) {
      if (err && err.statusCode && !err.status) {
        err.status = err.statusCode;
      }
      return fn.apply(null, arguments);
    }));
};
