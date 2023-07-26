// const hre = require('hardhat')
const { FXRootContractAbi } = require("../contractABIs");

async function main() {
  const nftAddress = "0xa2BAcbcCDeeE8dEEF2d976682D178C1384Cfcfad";
  const nftCollection = await ethers.getContractAt("MyNFT", nftAddress);
  const fxRoot = await ethers.getContractAt(
    FXRootContractAbi,
    "0xF9bc4a80464E48369303196645e876c8C7D972de"
  );

  const signer = await ethers.getSigner();
  console.log(nftCollection.address);

  const tokenIds = [0, 1, 2, 3, 4];

  for (const tokenId of tokenIds) {
    let approveTxn = await nftCollection.approve(fxRoot.address, tokenId);
    await approveTxn.wait();
    console.log("NFT: " + tokenId + " approved");

    let txn = await fxRoot.deposit(
      nftCollection.address,
      signer.address,
      tokenId,
      "0x6566"
    );
    await txn.wait();
    console.log("NFT: " + tokenId + " deposited");
  }

  // Print the balance of the wallet
  const balance = await hre.ethers.provider.getBalance(
    "0x17c607b7645fcbb91b87acacaf14e3ca4da2a5da"
  );
  console.log("MyNFT wallet balance is: ", balance.toString());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
