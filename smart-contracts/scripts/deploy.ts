import { ethers } from "hardhat";

async function main() {
  const [owner] = await ethers.getSigners();
  const wallet = new ethers.Wallet(
    "0xff4f55382dc1dad042411e64cf13eafaa051e78c9f343a3ffab8ce2408b74479"
  );
  console.log(owner.address);

  // Deploy Vault Factory
  // const vaultFactory = await ethers.deployContract("VaultFactory");
  // await vaultFactory.waitForDeployment();
  const vaultFactory = await ethers.getContractAt(
    "VaultFactory",
    "0xCE2E5022982F3f3E11D199eae5A59de1371748f5"
  );
  console.log("vaultFactory", await vaultFactory.getAddress());

  // // Deploy Vault
  // const tx = await vaultFactory.deploy(wallet.address);
  // await tx.wait();
  const vaultAddress = await vaultFactory.vaults(await owner.getAddress());
  console.log("vault", vaultAddress);

  // // Deploy PoSTerminal
  // const poSTerminal = await ethers.deployContract("PoSTerminal");
  // await poSTerminal.waitForDeployment();
  const poSTerminal = await ethers.getContractAt(
    "PoSTerminal",
    "0x7034baF34acA066DE42eae69E16FFADaa6e6750e"
  );
  console.log("posTerminal", await poSTerminal.getAddress());

  // Add terminal
  // await vaultFactory.addTerminal(await poSTerminal.getAddress());
  console.log(await vaultFactory.isTerminal(await poSTerminal.getAddress()));
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
