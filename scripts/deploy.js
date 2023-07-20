async function main() {
  const Nft = await ethers.getContractFactory("MyNFT");
  const nft = await Nft.deploy();
  await nft.deployed();

  console.log("MyNFT deployed to:", nft.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
