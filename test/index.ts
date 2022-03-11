import { expect } from "chai";
import { ethers } from "hardhat";

describe("Sale", function () {
  it("Should return the new greeting once it's changed", async function () {
    const Sale = await ethers.getContractFactory("Sale");
    const sale = await Sale.deploy();
    await sale.deployed();

    expect(await sale.deployed()).to.equal(true);
  });
});
