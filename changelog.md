# Change Log
All notable changes to this project will be documented in this file.

## 0.2.2 - 2018-01-17
### Changed
- .required and .assert throw a `ReferenceError` if given key is missing from `process.env` and return given key's value from `process.env` otherwise.
- switch from `faucet` to `tap-spec`.

## 0.2.0 - 2014-12-15
### Added
- .contains (alias for .has)
