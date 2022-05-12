// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
import { ethers } from "hardhat";
import * as dotenv from "dotenv";

dotenv.config();

const RATE = process.env.RATE || 1000000;
const WALLET = process.env.WALLET || "0x98484b0BdBb0a12caC0cB266eD13cbC546D9928f";
const TOKEN = process.env.TOKEN || "0xA287aA5eA1534e2F981f22CCA35b5757b995f305";

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
