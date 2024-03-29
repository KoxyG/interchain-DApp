require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config({ path: ".env" });
require("solidity-coverage");

const PRIVATE_KEY = process.env.PRIVATE_KEY;

// This is a sample Hardhat task. To learn how to create your own go to
// <https://hardhat.org/guides/create-task.html>
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to <https://hardhat.org/config/> to learn more

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
  networks: {
    scroll_sepolia: {
      url: "https://sepolia-rpc.scroll.io",
      chainId: 534351,
      accounts: [PRIVATE_KEY],
    },
    eth_sepolia: {
      url: "https://gateway.tenderly.co/public/sepolia",
      chainId: 11155111,
      accounts: [PRIVATE_KEY],
    },
  },
};
