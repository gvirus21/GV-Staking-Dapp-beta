//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.11;

import "./GVToken.sol";
import "./StakeToken.sol";
// import "";

import "hardhat/console.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract TokenFarm is Ownable {
    string public name = "Token farm";
    address owner;
    GVToken public gvToken;
    StakeToken public stakeToken;

    address[] public stakers;

    mapping(address => uint256) public stakingBalance;
    mapping(address => bool) public hasStaked;
    mapping(address => bool) public isStaking;

    constructor(GVToken _gvToken, StakeToken _stakeToken) public {
        gvToken = _gvToken;
        stakeToken = _stakeToken;
        owner = msg.sender;
    }

    function stakeTokens(uint256 _amount) public {
        require(_amount > 0, "Amount can't be Zero");

        // transfer Tokens from staker to this contract's address for staking
        stakeToken.transferFrom(msg.sender, address(this), _amount);

        stakingBalance[msg.sender] += _amount;

        if (!hasStaked[msg.sender]) {
            stakers.push(msg.sender);
        } 

        isStaking[msg.sender] = true;
        hasStaked[msg.sender] = true;
    }
}
