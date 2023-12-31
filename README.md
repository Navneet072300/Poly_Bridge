# Polygon-Advanced-Module-1

This is the first project in Polygon-Advance, in this project, I was tasked to deploy an NFT collection on the Ethereum blockchain, Map the collection to Polygon, and Transfer assets over via the Polygon Bridge.

## Getting Started

### Executing program

Download the codes by downloading the entire repository which will give you access to other contents of the repository. Navigate to the Poly_Proof project directory,  run:

```shell

 npm install

```

After installing the dependencies, run the test file by using the following command:

```shell
npx hardhat test
```

### Deploying the ERC721 Contract and Batch Mint NFTs

Run the following command to deploy and batch-mint NFTs using the deployed ERC721 contract:

``` shell
npx hardhat run scripts/deployandmint.js --network goerli
```

The script will mint the specified number of NFTs and assign them to your address.

### Approve and Deposit NFTs to Polygon Mumbai

Run the following commands to approve and deposit the minted NFTs from Ethereum to the Polygon Mumbai network using the FxPortal Bridge:

```shell
npx hardhat run scripts/batchTransfer.js --network goerli
```
## Output
![image](https://github.com/Navneet072300/Poly_Bridge/assets/89797286/3d8e0747-72fd-4ea1-9432-b27fb0da98c0)



## Author

Navneet Shahi

## License

This project is licensed under the [MIT License](LICENSE).
You can make a copy of the project to use for your own purposes.
