const feeDrivers = require("./feeDrivers");
const _ = require("lodash");

const randomFeeProviders = _.sampleSize(feeDrivers.all, 2);

const sum = (array) => {
  let avgFast = 0;
  let avgMedium = 0;
  let avgSlow = 0;

  _.map(array, item => {
    avgFast += item.fast;
    avgMedium += item.medium;
    avgSlow += item.slow;
  });

  avgFast /= array.length;
  avgMedium /= array.length;
  avgSlow /= array.length;

  return {
    fast: Math.round(avgFast),
    medium: Math.round(avgMedium),
    slow: Math.round(avgSlow),
  }
}

exports.getCurrentEstimate = (callback) => {
  const promises = _.map(randomFeeProviders, (feeProvider, index, collection) => feeProvider.getEstimation().catch(error => {
    console.log(error.message);
  }))
  return Promise.all(promises)
    .then(results => _.filter(results, (item) => item != null))
    .then(sum);
};
