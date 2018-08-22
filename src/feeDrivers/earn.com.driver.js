const AFeeDriver = require("./AFeeDriver");

module.exports = class EarnDotComDriver extends AFeeDriver {
  constructor() {
    super();
    this.apiUrl = "https://bitcoinfees.earn.com/api/v1/fees/recommended";
  }

  getEstimation() {
    return this.apiCall().then(response => {
      return {
        fast: response.data.fastestFee,
        medium: response.data.halfHourFee,
        slow: response.data.hourFee
      };
    });
  }
};
