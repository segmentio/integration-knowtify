'use strict';

var Test = require('segmentio-integration-tester');
var mapper = require('../lib/mapper');
var Knowtify = require('../');

describe('Knowtify', function() {
  var knowtify;
  var settings;
  var test;

  beforeEach(function() {
    settings = { apiToken: '84fb4517d6d0c5b6acd1f4bf1048559d' };
    knowtify = new Knowtify(settings);
    test = Test(knowtify, __dirname);
    test.mapper(mapper);
  });

  it('should have the correct settings', function() {
    test
      .name('Knowtify')
      .channels(['server', 'mobile', 'client'])
      .ensure('settings.apiToken')
      .retries(2);
  });

  describe('.validate()', function() {
    it('should not be valid without an api key', function() {
      delete settings.apiToken;
      test.invalid({}, settings);
    });

    it('should be valid with complete settings', function() {
      test.valid({}, settings);
    });
  });

  describe('mapper', function() {
    describe('identify', function() {
      it('should map basic identify', function() {
        test.maps('identify-basic');
      });
    });

    describe('track', function() {
      it('should map basic track', function() {
        test.maps('track-basic');
      });
    });
  });

  describe('.identify()', function() {
    it('should send basic identify', function(done) {
      var json = test.fixture('identify-basic');
      var output = json.output;
      output.timestamp = new Date(output.timestamp);
      test
        .identify(json.input)
        .sends(json.output)
        .expects(200)
        .end(done);
    });

    it('should error on invalid key', function(done) {
      var json = test.fixture('identify-basic');
      test
        .set({ apiToken: 'x' })
        .identify(json.input)
        .error('Unexpected token B', done);
    });
  });

  describe('.track()', function() {
    it('should send basic track', function(done) {
      var json = test.fixture('track-basic');
      var output = json.output;
      output.timestamp = new Date(output.timestamp);
      test
        .track(json.input)
        .sends(json.output)
        .expects(200)
        .end(done);
    });

    it('should error on invalid key', function(done) {
      var json = test.fixture('track-basic');
      test
        .set({ apiToken: 'x' })
        .track(json.input)
        .error('Unexpected token B', done);
    });
  });
});
