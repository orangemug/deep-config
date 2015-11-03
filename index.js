var deepConfig = require("./lib/deep-config")

module.exports = deepConfig(
  __dirname+"../",
  process.env.NODE_ENV
);
