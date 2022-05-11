// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
import { ethers } from "hardhat";
import * as dotenv from "dotenv";

dotenv.config();

// const RATE = process.env.RATE || 1000000;
// const WALLET = process.env.WALLET || "0x8c8eC00fb235dE3922182b47d2E8f8e69268039a";  //"0x98484b0BdBb0a12caC0cB266eD13cbC546D9928f"
const TOKEN = process.env.TOKEN || "0x19a1165A79AFAAeFd805969B32a0640d4Db9f131"; //"0x3160591776e34C319F2Ad28Ba8c1F4829adc3907"

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy
  const Sale = await ethers.getContractFactory("Sale");
  const sale = await Sale.deploy(TOKEN);

  await sale.deployed();

  console.log("Sale deployed to:", sale.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
