# env-accessors

[![Build Status](http://img.shields.io/travis/wilmoore/node-env-accessors.svg)](https://travis-ci.org/wilmoore/node-env-accessors) [![NPM version](http://img.shields.io/npm/v/env-accessors.svg)](https://www.npmjs.org/package/env-accessors) [![NPM downloads](http://img.shields.io/npm/dm/env-accessors.svg)](https://www.npmjs.org/package/env-accessors) [![LICENSE](http://img.shields.io/npm/l/env-accessors.svg)](license)

> process.env accessor functions.

    $ npm install env-accessors --save

## API

###### .del

> aliases: -

Delete given key from `process.env`.

    del('DISABLED_SERVICES');

###### .get

> aliases: -

Get given key's value from `process.env`.

    get('DATABASE_NAME');

###### .has

> aliases: -

Whether `process.env` contains given key.

    has('NEW_RELIC_LICENSE_KEY');

###### .missing

> aliases: -

Whether given key is missing from `process.env`.

    missing('NEW_RELIC_LICENSE_KEY');

###### .required

> aliases: assert

Thows a `ReferenceError` if given key is missing from `process.env`.

    required('NEW_RELIC_LICENSE_KEY');

###### .set

> aliases: put

Set value for `process.env[key]`.

    set({ DATABASE_HOST: 'localhost' });

## License

  [MIT](license)
