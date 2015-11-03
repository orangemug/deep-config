# deep-config
A deep merged config from your `./config` directory

![stability-stable](https://img.shields.io/badge/stability-stable-green.svg)
[![circleci](https://circleci.com/gh/orangemug/deep-config.png?style=shield)](https://circleci.com/gh/orangemug/deep-config)
[![Dependency Status](https://david-dm.org/orangemug/deep-config.svg)](https://david-dm.org/orangemug/deep-config)
[![Dev Dependency Status](https://david-dm.org/orangemug/deep-config/dev-status.svg)](https://david-dm.org/orangemug/deep-config#info=devDependencies)


## Install
To install

    npm i git://github.com/orangemug/deep-config.git --save


## Usage
Create some config in the base of your project like so

    config/
    ├── default.js
    ├── development.js
    ├── production.js
    └── staging.js

It'll use [lodash.defaultsDeep](https://lodash.com/docs#defaultsDeep) to merge the objects and `default` will always be included if present. The library will use the `NODE_ENV` defaulting to `development` if not present.

To get the config just require it

    var config = require("deep-config");


## License
[MIT](LICENSE)
