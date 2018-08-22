const AFeeDriver = require("./AFeeDriver");

module.exports = class BlockCypherDriver extends AFeeDriver {
  constructor() {
    super();
    this.apiUrl = "https://api.blockcypher.com/v1/btc/main";
  }

  getEstimation() {
    return this.apiCall().then(response => {
      return {
        fast: Number(response.data.high_fee_per_kb / 1000),
        medium: Number(response.data.medium_fee_per_kb / 1000),
        slow: Number(response.data.low_fee_per_kb / 1000),
      };
    })
  }
};
