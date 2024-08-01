require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-verify");

require("dotenv").config();
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",
  networks: {
    amoy: {
      url: process.env.POLYGON_AMOY,
      accounts: [process.env.PRIVATE_KEY],
    },
  },
  etherscan: {
    apiKey: process.env.API_KEY,
  },
   sourcify: {
    // Disabled by default
    // Doesn't need an API key
    enabled: true
  }
};
