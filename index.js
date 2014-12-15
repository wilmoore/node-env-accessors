'use strict';

/*!
 * imports.
 */

var format = require('util').format;

/*!
 * exports.
 */

exports.assert = required;
exports.contains = has;
exports.del = del;
exports.get = get;
exports.has = has;
exports.missing = missing;
exports.put = set;
exports.required = required;
exports.set = set;

/*!
 * init.
 */

var requireError = 'Missing required environment variable "%s"';

/**
 * Thows a `ReferenceError` if given key is missing from `process.env`.
 * aliases: assert
 *
 * @param {String} key
 * @return {String}
 * @api public
 * @throws {ReferenceError}
 */

function required(key) {
  if (missing(key)) throw new ReferenceError(format(requireError, key));
}

/**
 * Get given key's value from `process.env`.
 *
 * @param {String} key
 * @return {String}
 * @api public
 */

function get(key) {
  return process.env[key];
}

/**
 * Set value for `process.env[key]`.
 * aliases: put
 *
 * @param {String} key
 * @return {String}
 * @api public
 */

function set(dictionary) {
  for (var key in dictionary) {
    if (missing(key)) process.env[key] = dictionary[key];
  }
}

/**
 * Delete given key from `process.env`.
 *
 * @param {String} key
 * @api public
 */

function del(key) {
  delete process.env[key];
}

/**
 * Whether `process.env` contains given key.
 * aliases: contains
 *
 * @param {String} key
 * @return {Boolean}
 * @api public
 */

function has(key) {
  return process.env.hasOwnProperty(key);
}

/**
 * Whether given key is missing from `process.env`.
 *
 * @param {String} key
 * @return {Boolean}
 * @api public
 */

function missing(key) {
  return !has(key);
}
