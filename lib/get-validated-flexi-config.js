'use strict';

var fs = require('fs');
var path = require('path');

function assert(statement, test) {
  if (!test) {
    throw new Error(statement);
  }
}

module.exports = function(projectRoot) {
  var configPath = path.join(projectRoot, 'config', 'flexi.js');
  var flexiConfig = {};

  if (fs.existsSync(configPath)) {
    flexiConfig = require(configPath);

    assert("config/flexi.js is defined, but could not be imported", flexiConfig);
    assert("config/flexi.js is defined, but did not contain property [array] breakpoints",
           flexiConfig.breakpoints instanceof Array);
    assert("config/flexi.js is defined, but did not contain property [number] columns",
           typeof flexiConfig.columns === 'number');

  } else {
    assert("You must define a config file for flexi at '" + configPath + "'",
           process.argv[2] !== 'install' && process.argv[3].indexOf('flexi') === -1);
  }

  return flexiConfig;
};
