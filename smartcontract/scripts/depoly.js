const hre = require("hardhat");

async function main() {
  const PayWallet = await hre.ethers.getContractFactory("PayWallet");
  const paywallet = await PayWallet.deploy();
  await paywallet.waitForDeployment();

  console.log("PayWallet Token deployed: ",await paywallet.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
