//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.11;

import "hardhat/console.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract GVToken is ERC20 {

    constructor() ERC20("GVToken", "GVT") {
        _mint(msg.sender, 10000000000000000);
    }
}

