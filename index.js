var deepConfig = require("./lib/deep-config")

module.exports = deepConfig(
  __dirname+"/../../config",
  process.env.NODE_ENV
);
