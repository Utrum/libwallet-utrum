const bitcoinjs = require('bitcoinjs-lib');
const networks = require('./networks');

bitcoinjs.networks.komodo = networks.komodo;
bitcoinjs.networks.monaize = networks.monaize;
bitcoinjs.networks.utrum = networks.utrum;

module.exports = bitcoinjs;
