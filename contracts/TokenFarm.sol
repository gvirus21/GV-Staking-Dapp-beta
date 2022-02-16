//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.11;

import "./GVToken.sol";
import "./StakeToken.sol";

import "hardhat/console.sol";

contract TokenFarm {
    string public name = "Token farm";
    address public owner;
    GVToken public gvToken;
    StakeToken public stakeToken;

    address[] public stakers;

    mapping(address => uint256) public stakingBalance;
    mapping(address => uint256) public stakingDays;
    mapping(address => bool) public hasStaked;
    mapping(address => bool) public isStaking;

    event stakeData( uint indexed _stakedAmount, address indexed _account);

    constructor(GVToken _gvToken, StakeToken _stakeToken) {
        gvToken = _gvToken;
        stakeToken = _stakeToken;
        owner = msg.sender;
    }

    // function getStakeInfo() public {

    //     // if (hasStaked[msg.sender]) {
            
    //     // } else {
             
    //     // }

    // }

    function getStakeBalance() public returns (uint256) {
        require( isStaking[msg.sender], "User is not staking" );
        return stakingBalance[msg.sender];
    }



    function stakeTokens(uint256 _amount, uint256 _days) public {
        require(_amount > 0, "Amount can't be Zero");

        // transfer Tokens from staker to this contract's address for staking
        stakeToken.transferFrom(msg.sender, address(this), _amount);

        stakingBalance[msg.sender] += _amount;
        stakingDays[msg.sender] = _days;

        if (!hasStaked[msg.sender]) {
            stakers.push(msg.sender);
        } 

        isStaking[msg.sender] = true;
        hasStaked[msg.sender] = true;

    }

    function unstakeTokens( uint256 _amount ) public {
        require(stakingBalance[msg.sender] > 0, "Staking balance is can't be zero");
        require(_amount > 0, "Amount can't be zero");
        require(stakingBalance[msg.sender] >= _amount, "Can't unstake more than Staking balance");

        uint balance = stakingBalance[msg.sender];

        stakeToken.transfer(msg.sender, _amount);

        stakingBalance[msg.sender] -= _amount;
        
        if (stakingBalance[msg.sender] == 0) {
            isStaking[msg.sender] = false;
        }
    }

    function issueReward() public {

        //get total number of days of stakeing currency
        uint256 daysStaked = 0;

        //calculate the reward
        //( number of tokens staked / 20) * daysStaked
        // ex: (5000 / 20) * 7 days = 1750 GVT


        //send the result amount of GVT from admin to staker

        


    }
}
