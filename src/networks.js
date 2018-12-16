/* const komodo = {
  messagePrefix: '\x18Komodo Signed Message:\n',
  bip32: {
    public: 0x0488B21E,
    private: 0x0488ADE4,
  },
  pubKeyHash: 0x3c,
  scriptHash: 0x55,
  wif: 0xbc,
} */

const komodo = {
    messagePrefix: '\x19Komodo Signed Message:\n',
    bip44: 141,
    bip32: {
      public: 0x0488b21e,
      private: 0x0488ade4,
    },
    pubKeyHash: 0x3c,
    scriptHash: 0x55,
    wif: 0xbc,
    consensusBranchId: {
      1: 0x00,
      2: 0x00,
      3: 0x5ba81b19,
      4: 0x76b809bb,
    },
    dustThreshold: 1000,
    isZcash: true,
    sapling: true,
    saplingActivationTimestamp: 1544835600,
    kmdInterest: true,
}

const monaize = Object.assign({}, komodo);
monaize.messagePrefix = '\x18Monaize Signed Message:\n';

const utrum = Object.assign({}, komodo);
utrum.messagePrefix = '\x18Utrum Signed Message:\n';

module.exports = {
  komodo,
  monaize,
  utrum
}
