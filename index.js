var deepConfig = require("./lib/deep-config")
var path       = require("path");

var dirname = path.dirname(require.main.filename);

module.exports = deepConfig(
  dirname+"/config",
  process.env.NODE_ENV
);
