const komodo = {
  messagePrefix: '\x18Komodo Signed Message:\n',
  bip32: {
    public: 0x0488B21E,
    private: 0x0488ADE4,
  },
  pubKeyHash: 0x3c,
  scriptHash: 0x55,
  wif: 0xbc,
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