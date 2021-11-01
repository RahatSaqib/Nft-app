// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.5 <0.9;
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract NFT is ERC721{
    uint public nextTokenId;
    address public admin;

    constructor() ERC721('NFT APP','NFT'){
        admin = msg.sender;
    }
    function mint(address to) external{
        require(msg.sender == admin ,'Only admin');
        _safeMint(to, nextTokenId);
        nextTokenId++;
    }
    function _baseURI() internal view override returns(string memory){
        return 'https://secret-island-15010.herokuapp.com/';
    }
}