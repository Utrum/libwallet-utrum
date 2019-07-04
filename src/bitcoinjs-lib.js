const bitcoinjs = require('bitgo-utxo-lib');
const networks = require('./networks');

Object.keys(networks).forEach( network  => {
  bitcoinjs.networks[network] = networks[network];
});

module.exports = bitcoinjs;
