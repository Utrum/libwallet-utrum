const bitcoinjs = require('./bitcoinjs-lib');
const coinSelect = require('coinselect');
const cs = require('coinstring');

/* eslint class-methods-use-this: "off" */

class Wallet {
  prepareTx(unspentTxs, address, amount, feeRate, data) {
    let dataScript;

    if (data) {
      const opReturnData = Buffer.from(data, 'utf-8');
      dataScript = bitcoinjs.script.nullData.output.encode(opReturnData);
    }

    const utxos = [];
    unspentTxs.forEach((tx) => {
      utxos.push({
        txId: tx.tx_hash,
        vout: tx.tx_pos,
        value: tx.value,
      });
    });

    const targets = [
      {
        address,
        value: amount,
      },
    ];

    if (this.coin.fee != null) {
      feeRate = 0;
    }

    /* eslint prefer-const: "off" */
    let { inputs, outputs, fee } = coinSelect(utxos, targets, feeRate);

    if (!inputs || !outputs) {
      return null;
    }

    let finalFee = fee;
    if (this.coin.fee != null) {
      finalFee = this.coin.fee;
      outputs.forEach(output => {
        if (!output.address) {
          output.value -= this.coin.fee;
        }
      });
    }

    return {
      inputs,
      outputs,
      fee: finalFee,
      dataScript,
    };
  }

  buildTx(inputs, outputs, feeRate, dataScript) {
    let txb = new bitcoinjs.TransactionBuilder(this.coin.network, feeRate);

    // support overwintered transactions
    if (this.coin.network.coin === 'zec') {
      txb.setVersion(4)
      txb.setVersionGroupId(0x892F2085)
    }

    // add support to kmd rewards (by setting locktime every time)
    if (this.coin.ticker === 'KMD') {
      var locktime = Math.round(new Date().getTime()/1000) - 777
      txb.setLockTime(locktime)
    }

    // bitgo-utxo-lib stuff
    var keyPair = this.privkey
    var pk = bitcoinjs.crypto.hash160(keyPair.getPublicKeyBuffer())
    var spk = bitcoinjs.script.pubKeyHash.output.encode(pk)

    inputs.forEach(
      input => txb.addInput(input.txId, input.vout, 0xffffffff, spk)
    );

    outputs.forEach((output) => {
      if (!output.address) {
        output.address = this.address; /* eslint no-param-reassign: "off" */
      }
      txb.addOutput(output.address, output.value);
    });

    if (dataScript) {
      txb.addOutput(dataScript, 0);
    }

    for (let i = 0; i < inputs.length; i += 1) {
      txb.sign( i, this.privkey, null, 0x01, inputs[i].value )
    }

    return txb.build();
  }

  constructor(privKeyHex, coin, isTest) {
    this.coin = coin;
    this.isTest = isTest;

    if ((coin.ticker == 'OOT' || coin.ticker == 'KMD') && privKeyHex.substr(0, 6) == '-PWIF-') {
      var WIF = privKeyHex.substr(6).split(',')[0];
      const version = coin.network.wif;
      this.privkey = bitcoinjs.ECPair.fromWIF(WIF, this.coin.network);
      this.address = this.privkey.getAddress();
      return;
    }

    if (privKeyHex.substr(0, 6) == '-PWIF-') {
      privKeyHex = privKeyHex.split(',')[1];
    }

    let privateKeyHexBuf;
    try {
      privKeyHex += '01';
      privateKeyHexBuf = Buffer.from(privKeyHex, 'hex');
    } catch (e) {
      throw new Error(e);
    }

    if (this.isTest && coin.ticker === 'BTC') {
      this.coin.network = bitcoinjs.networks.testnet;
      const version = bitcoinjs.networks.testnet.wif;
      const newWif = cs.encode(privateKeyHexBuf, version);
      this.privkey = bitcoinjs.ECPair.fromWIF(newWif, bitcoinjs.networks.testnet);
    } else {
      const version = coin.network.wif;
      const newWif = cs.encode(privateKeyHexBuf, version);
      this.privkey = bitcoinjs.ECPair.fromWIF(newWif, this.coin.network);
    }
    this.address = this.privkey.getAddress();
  }
}

module.exports = {
  Wallet,
};
