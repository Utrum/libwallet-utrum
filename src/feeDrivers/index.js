const EarnComDriver = require("./earn.com.driver");
const BlockCypherDriver = require("./blockcypher.driver");

exports.all = [];

exports.all.push(
  new EarnComDriver(),
  new BlockCypherDriver(),
);
