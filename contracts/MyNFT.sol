// SPDX-License-Identifier: MIT

pragma solidity ^0.8.9;

import "erc721a/contracts/ERC721A.sol";


contract MyNFT is ERC721A{


    // Base url for the nfts
    string baseUrl = "https://gateway.pinata.cloud/ipfs/QmRonV1jU2QsofMPKP9rvFYsJoB7Ht86LHGQSpq2aWWvkm/";

    // URL for the prompt description
    string public prompt =
        "Art of different EYEBALL";

   constructor() ERC721A("EYEBALL", "EBL") {
    }

    // Function to mint NFT which only owner can perform
    function mint(uint256 quantity) external payable {
        // quantity is the amount nfts you want to mint
        _mint(msg.sender, quantity);
    }

    // Override the baseURI function to return the base URL for the NFTs
    function _baseURI() internal view override returns (string memory){
        return baseUrl;
    }

    // Return the URL for the prompt description
    function promptDescription() external view returns (string memory) {
        return prompt;
    }
}
