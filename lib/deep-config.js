var defaultsDeep = require("lodash.defaultsdeep");
var fs           = require("fs");
var path         = require("path");


function envSync(basepath) {
  var out = {};

  try {
    var files = fs.readdirSync(basepath)
  } catch(err) {
    if(err.code === "ENOENT") {
      return out;
    } else {
      throw err;
    }
  }

  files
    .forEach(function(filepath) {
      var matches = filepath.match(/^(.*)\.(js|json)$/)
      if(matches) {
        var env  = matches[1];
        var type = matches[2];
        var val  = require(
          path.join(basepath, filepath)
        );

        out[env] = val;
      }
    });

  return out;
}

module.exports = function (basepath, env) {
  env = env || "development";

  var config = defaultsDeep(
    envSync(basepath),
    {
      default: {}
    }
  );

  return defaultsDeep(
    config[env] || {},
    config["default"]
  )
}
