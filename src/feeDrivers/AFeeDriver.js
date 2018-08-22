const axios = require("axios");

module.exports = class AFeeProvider {
  constructor() {
    // if (this.apiUrl == null) {
    //     throw new Error("You have to set apiUrl atttribute");
    // }
  }

  apiCall() {
    return axios.get(this.apiUrl).then(response => {
      if (response.status !== 200) return Promise.reject(new Error(`Can't fetch provider ${this.constructor.name}`));
      return response;
    });
  }

  getEstimation() {
    throw new Error("You have to implement the getEstimation method");
  }
};
