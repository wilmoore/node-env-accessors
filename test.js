'use strict';

/*!
 * imports.
 */

var envc = require('envc');
var test = require('tape');

/*!
 * imports (local).
 */

var del = require('./').del;
var get = require('./').get;
var has = require('./').has;
var missing = require('./').missing;
var required = require('./').required;
var set = require('./').set;

/*!
 * helpers.
 */

var envs = {};
var testKey = 'TEST_ENV_ACCESSORS_KEY';
var testVal = 'test-env-accessors-val';

/**
 * inject variables.
 */

function inject() {
  envs = envc();
}

/**
 * reset variables.
 */

function reset() {
  var key;

  for (key in envs) delete process.env[envs[key]];
  for (key in fixture()) delete process.env[key];
}

/**
 * produce fixture(s).
 */

function fixture() {
  var out = {};
  out[testKey] = testVal;
  return out;
}

/*!
 * tests.
 */

test('.get()', function (t) {
  t.plan(1);
  inject();
  t.equal(get('TEST_FIXTURE_LOADED'), 'YES');
  reset();
});

test('.has()', function (t) {
  t.plan(1);
  inject();
  t.assert(has('TEST_FIXTURE_LOADED'));
  reset();
});

test('.missing', function (t) {
  t.plan(1);
  t.assert(missing(testKey));
});

test('.set', function (t) {
  t.plan(1);
  set(fixture());
  t.equal(process.env[testKey], testVal);
  reset();
});

test('.required', function (t) {
  t.plan(1);

  try {
    required(testKey);
  } catch (e) {
    console.log(e.name);
    t.equal(e.constructor, ReferenceError);
  }
});

test('.del()', function (t) {
  t.plan(1);
  set(fixture());
  del(testKey);
  t.equal(process.env[testKey], undefined);
  reset();
});
