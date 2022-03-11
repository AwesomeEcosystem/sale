import { expect } from "chai";
import { ethers } from "hardhat";
import * as dotenv from "dotenv";

dotenv.config();

const RATE = process.env.RATE || 1000000
const WALLET = process.env.WALLET || "0x98484b0BdBb0a12caC0cB266eD13cbC546D9928f"
const TOKEN = process.env.TOKEN || "0x3160591776e34C319F2Ad28Ba8c1F4829adc3907"

describe("Sale", function () {
  it("Should return the new greeting once it's changed", async function () {
    const Sale = await ethers.getContractFactory("Sale");
    const sale = await Sale.deploy(RATE, WALLET, TOKEN);
    await sale.deployed();

    expect(await sale.deployed()).to.equal(true);
  });
});
