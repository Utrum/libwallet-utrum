const fs = require('fs');
const coins = require('./coins').all;

fs.writeFile('static/coins.json', JSON.stringify(coins, null, 2), (err) => {
  if (err) {
    throw new Error(err);
  }
});
