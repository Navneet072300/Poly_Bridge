// const hre = require('hardhat')
const { FXRootContractAbi } = require("../contractABIs");
async function main() {
  const networkAddress = "https://ethereum-goerli.publicnode.com";
  const privateKey = process.env.PRIVATE_KEY;
  const provider = new ethers.providers.JsonRpcProvider(networkAddress);

  // Create a wallet instance
  const wallet = new ethers.Wallet(privateKey, provider);

  // Get ERC721A contract instance
  const NFT = await ethers.getContractFactory("MyNFT");
  const nft = await NFT.attach("0x90469BDE0bfE5cC5c3eaf3915d5535dc1CBCF794");

  // Test balanceOf
  const balance = await nft.balanceOf(wallet.address);

  // Print the balance of the wallet
  console.log("MyNFT wallet balance is: ", balance.toString());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
