require('@nomiclabs/hardhat-waffle');
require('dotenv').config()

module.exports = {
  solidity: '0.8.9',
  networks: {
    goerli: {
      url: process.env.URL,
      accounts: [process.env.PRI_KEY],
    },
  },
};