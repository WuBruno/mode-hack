import { ethers } from "hardhat";

async function main() {
  const [owner] = await ethers.getSigners();
  const wallet = new ethers.Wallet(
    "0xff4f55382dc1dad042411e64cf13eafaa051e78c9f343a3ffab8ce2408b74479"
  );

  // const vaultFactory = await ethers.deployContract("VaultFactory");
  const vaultFactory = await ethers.getContractAt(
    "VaultFactory",
    "0x6e20fb06d22D122092a65aF537b4f9B6dAB27e00"
  );

  // const tx = await vaultFactory.deploy(wallet.address);
  // console.log("vaultFactory", await vaultFactory.getAddress());

  // const poSTerminal = await ethers.deployContract("PoSTerminal");
  // console.log("posTerminal", await poSTerminal.getAddress());
  const poSTerminal = await ethers.getContractAt(
    "PoSTerminal",
    "0xF5F744699a657F25C177a2582aEcC1d14b138412"
  );

  // const vaultAddress = await vaultFactory.getVault(owner.getAddress());
  // console.log("vaultAddress", vaultAddress);

  await vaultFactory.addTerminal(poSTerminal.getAddress());
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
