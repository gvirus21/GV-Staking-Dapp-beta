//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.11;

import "./GVToken.sol";
import "./StakeToken.sol";

import "hardhat/console.sol";

contract TokenFarm {
    string public name = "Token farm";
    address public owner;
    uint256 public totalSupply;
    
    GVToken public gvToken;
    StakeToken public stakeToken;

    uint256 public rewardRate = 100;
    uint256 public lastUpdateTime;
    uint256 public rewardPerTokenStored;

    struct StakeInfo {
        address staker;
        uint256 startAt;
        uint256 endAt;
        uint256 stakeAmount;
    }

    mapping(address => StakeInfo) public stakeInfos;
    mapping(address => uint256) public rewards;
    mapping(address => bool) public hasStaked;
    mapping(address => bool) public isStaking;
    mapping(address => uint) public userRewardPerTokenPaid;

    constructor(GVToken _gvToken, StakeToken _stakeToken) {
        gvToken = _gvToken;
        stakeToken = _stakeToken;
        owner = msg.sender;
    }

    function rewardPerToken() public view returns (uint) {
        if (totalSupply == 0) {
            return 0;
        }
        return
            rewardPerTokenStored +
            (((block.timestamp - lastUpdateTime) * rewardRate * 1e18) / totalSupply);
    }


      function earned(address _account) public view returns (uint) {
        return
            ((stakeInfos[_account].stakeAmount *
                (rewardPerToken() - userRewardPerTokenPaid[_account])) / 1e18) +
            rewards[_account];
    }


    modifier updateReward(address _account, uint256 _duration) {
        // handles reward for each stake
        rewardPerTokenStored = rewardPerToken();
        lastUpdateTime = block.timestamp;

        rewards[_account] = earned(_account);
        userRewardPerTokenPaid[_account] = rewardPerTokenStored;
        _;
    }

    function stake(uint256 _amount, uint256 _duration)
        external
        updateReward(msg.sender, _duration)
    {
        require(_amount > 0, "Amount Can't be Zero");

        totalSupply += _amount;
        StakeInfo memory stakeInfo = StakeInfo(
            msg.sender,
            block.timestamp,
            _duration,
            _amount
        );

        stakeInfos[msg.sender] = stakeInfo;
        stakeToken.transferFrom(msg.sender, address(this), _amount);

    }

    modifier checkCanUnstake(address _account) {
        uint256 timePassed = block.timestamp - stakeInfos[msg.sender].startAt;
        require(
            timePassed >= stakeInfos[msg.sender].endAt,
            "Stake duration is higher"
        );
        _;
    }

    function unstake(uint256 _amount) external checkCanUnstake(msg.sender) {
        totalSupply -= _amount;
        stakeInfos[msg.sender].stakeAmount += _amount;
        stakeToken.transfer(msg.sender, _amount);
    }

    function getReward() external { // also needs to update reward
        uint256 reward = rewards[msg.sender];
        rewards[msg.sender] = 0;
        gvToken.transfer(msg.sender, reward);
    }


}