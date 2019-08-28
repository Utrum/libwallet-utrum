const bitcoinjs = require('./bitcoinjs-lib');

const coins = [
  {
    ticker: 'BTC',
    name: 'bitcoin',
    network: bitcoinjs.networks.bitcoin,
    path: "m/44'/0'/0'",
    explorer: 'https://insight.bitpay.com',
    hasHodlProgram: false,
    electrum: [
      {
        host: 'electrum.hsmiths.com', port: 50001, mode: 'tcp',
      },
      {
        host: 'helicarrier.bauerj.eu', port: 50001, mode: 'tcp',
      },
    ],
  },
  {
    ticker: 'KMD',
    name: 'komodo',
    network: bitcoinjs.networks.komodo,
    fee: 10000,
    path: "m/44'/141'/0'",
    explorer: 'https://kmdexplorer.io',
    hasHodlProgram: false,
    electrum: [
      {
        host: 'electrum1.cipig.net', port: 10001, mode: 'tcp',
      },
      {
        host: 'electrum2.cipig.net', port: 10001, mode: 'tcp',
      },
    ],
  },
  {
    ticker: 'OOT',
    name: 'utrum',
    network: bitcoinjs.networks.komodo_nonsapling,
    path: "m/44'/141'/0'",
    fee: 10000,
    explorer: 'https://explorer.utrum.io/',
    hasHodlProgram: true,
    electrum: [
      {
        host: 'electrum1.utrum.io', port: 10088, mode: 'tcp',
      },
      {
        host: 'electrum2.utrum.io', port: 10088, mode: 'tcp',
      }
    ],
  },
  {
    ticker: 'ZILLA',
    name: 'chainzilla',
    network: bitcoinjs.networks.komodo_nonsapling,
    path: "m/44'/141'/0'",
    fee: 10000,
    explorer: 'https://zilla.explorer.komodo.top/',
    hasHodlProgram: true,
    electrum: [],
  },
  {
    ticker: 'DP',
    name: 'digitalprice',
    network: bitcoinjs.networks.komodo,
    path: "m/44'/141'/0'",
    fee: 10000,
    explorer: 'https://dp.explorer.komodo.top/',
    hasHodlProgram: false,
    electrum: [],
  },
];

function getCoin(coin) {
  return coins.find(el => el.name === coin || el.ticker === coin);
}

module.exports = {
  get: getCoin,
  all: coins,
};
