//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.11;

import "hardhat/console.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";


contract TokenFarm is Ownable {
    // stake token

    //owner -> balance
    mapping(address => uint256) stakingBalance;

    function stakeTokens(uint256 amount, address token) public {
        require( amount > 0, "Amount can not be Zero" );

    }
    
}