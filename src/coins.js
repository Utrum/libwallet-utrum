const bitcoinjs = require('./bitcoinjs-lib');

const coins = [
  {
    ticker: 'BTC',
    name: 'bitcoin',
    network: bitcoinjs.networks.bitcoin,
    path: "m/44'/0'/0'",
    explorer: 'https://insight.bitpay.com',
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
    ticker: 'TESTBTC',
    name: 'bitcoin',
    network: bitcoinjs.networks.testnet,
    path: "m/44'/0'/0'",
    explorer: 'https://test-insight.bitpay.com',
    electrum: [
      {
        host: 'test-btc.electrum.monaize.com', port: 10000, mode: 'tcp',
      },
    ],
  },
  {
    ticker: 'KMD',
    name: 'komodo',
    network: bitcoinjs.networks.komodo,
    fee: 10000,
    path: "m/44'/141'/0'",
    explorer: 'https://kmdexplorer.ru',
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
    ticker: 'TESTKMD',
    name: 'komodo',
    network: bitcoinjs.networks.komodo,
    path: "m/44'/141'/0'",
    fee: 10000,
    explorer: 'https://kmd.explorer.monaize.com',
    electrum: [
      {
        host: 'test-ac.electrum.monaize.com', port: 10001, mode: 'tcp',
      },
    ],
  },
  {
    ticker: 'MNZ',
    name: 'monaize',
    network: bitcoinjs.networks.monaize,
    path: "m/44'/141'/0'",
    fee: 0,
    explorer: 'https://www.mnzexplorer.com/',
    electrum: [
      {
        host: 'mnz.electrum.monaize.com', port: 10002, mode: 'tcp',
      },
    ],
  },
  {
    ticker: 'TESTMNZ',
    name: 'monaize',
    network: bitcoinjs.networks.monaize,
    path: "m/44'/141'/0'",
    fee: 0,
    explorer: 'https://mnz.explorer.monaize.com',
    electrum: [
      {
        host: 'test-ac.electrum.monaize.com', port: 10002, mode: 'tcp',
      },
    ],
  },
  {
    ticker: 'OOT',
    name: 'utrum',
    network: bitcoinjs.networks.utrum,
    path: "m/44'/141'/0'",
    fee: 0,
    explorer: 'https://explorer.utrum.io/',
    electrum: [
      {
        host: 'electrum1.utrum.io', port: 10088, mode: 'tcp',
      },
      {
        host: 'electrum2.utrum.io', port: 10088, mode: 'tcp',
      }
    ],
  }
];

function getCoin(coin) {
  return coins.find(el => el.name === coin || el.ticker === coin);
}

module.exports = {
  get: getCoin,
  all: coins,
};
