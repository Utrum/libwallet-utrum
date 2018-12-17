const bitcoinjs = require('bitgo-utxo-lib');
const networks = require('./networks');

bitcoinjs.networks.komodo = networks.komodo;
bitcoinjs.networks.utrum = networks.utrum;

module.exports = bitcoinjs;
