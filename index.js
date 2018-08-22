const { Wallet } = require('./src/wallet');
const { generatePrivKey } = require('./utils/generatePrivKey');
const coins = require('./src/coins');
const fees = require('./src/fees');

module.exports = {
  Wallet,
  generatePrivKey,
  coins,
  fees,
};
