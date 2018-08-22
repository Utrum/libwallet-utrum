const assert = require('assert');
const coins = require('../src/coins').all;
const { Wallet } =  require('../src/wallet');
const { generatePrivKey } = require('../utils/generatePrivKey');

const passphrase = 'default';
const privateKeyHex = generatePrivKey(passphrase);

const addresses = {
  'TESTBTC': 'muoG3H2bCsCTxfgDbBthL4Dn4U2s2k61qP',
  'TESTMNZ': 'RPZVpjptzfZnFZZoLnuSbfLexjtkhe6uvn',
  'TESTKMD': 'RPZVpjptzfZnFZZoLnuSbfLexjtkhe6uvn',
  'BTC': '1FHJkDwcPqmDBZCbscvKW91TCUSA9JiBMx',
  'MNZ': 'RPZVpjptzfZnFZZoLnuSbfLexjtkhe6uvn',
  'KMD': 'RPZVpjptzfZnFZZoLnuSbfLexjtkhe6uvn',
  'OOT': 'RPZVpjptzfZnFZZoLnuSbfLexjtkhe6uvn',
}

describe("Wallet", () => {
  describe("Initialization", () => {
    const data = coins;
    coins.forEach(function(coin, index){
      const isTest = coin.ticker.indexOf('TEST') > 0 ? true : false
      const wallet = new Wallet(privateKeyHex, coin, isTest);
      it(`should generate first address ${addresses[coin.ticker]} for ${coin.ticker}`, function(done) {
        assert.equal(wallet.address, addresses[coin.ticker])
        done();
      });
    });
  });
});