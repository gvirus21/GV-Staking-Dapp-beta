//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.11;

import "hardhat/console.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract DappToken is ERC20 {

    constructor() ERC20("DApp Token", "DAPP") {
        _mint(msg.sender, 1000000);
    }
}