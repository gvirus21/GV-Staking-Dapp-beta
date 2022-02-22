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
    mapping(address => uint256) public rewardBalance;
    mapping(address => uint256) public stakingDays;
    mapping(address => bool) public hasStaked;
    mapping(address => bool) public isStaking;

    event stakeData( uint indexed _stakedAmount, address indexed _account);

    constructor(GVToken _gvToken, StakeToken _stakeToken) {
        gvToken = _gvToken;
        stakeToken = _stakeToken;
        owner = msg.sender;
    }

    function getStakeBalance() public returns (uint256) {
        require( isStaking[msg.sender], "User is not staking" );
        return stakingBalance[msg.sender];
    }



    function stakeTokens(uint256 _amount, uint256 _days) public {
        require(_amount > 0, "Amount can't be Zero");
        require(isStaking[msg.sender] == false, "User is Already staking");

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
        require(stakingBalance[msg.sender] > 0, "You haven't staked");
        require(_amount > 0, "Amount can't be zero");
        require(stakingBalance[msg.sender] >= _amount, "Can't unstake more than Staking balance");

        uint balance = stakingBalance[msg.sender];
        stakeToken.transfer(msg.sender, _amount);
        stakingBalance[msg.sender] -= _amount;
        
        if (stakingBalance[msg.sender] == 0) {
            isStaking[msg.sender] = false;
        }
    }

    function addReward() public {
        // get the user's staked balance
        uint256 balance = stakingBalance[msg.sender];

        //calculate 1% of total stake amount
        uint256 incrementAmount = balance/100; 

        //add same amount of GVTokens to userReward mapping
        rewardBalance[msg.sender] += incrementAmount;
    }

     function issueReward() public {
        //check user has rewards or not

        //get the reward of user in a variable

        //transfer total reward to user account
        gvToken.transfer(msg.sender, rewardBalance[msg.sender]);

    }
}


// agenda:
// learn safemath from openzappelin to calculate a percentage
// look into practical application of events