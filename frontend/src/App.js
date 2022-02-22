import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import React, { useState, useEffect } from "react";
import StakeTokenAbi from "./artifacts/StakeToken.json";

const StakeTokenAddress = "";
const gvTokenAddress = "";
const tokenFarmAddress = "";

const App = () => {
  const [connectedAccount, setConnectedAccount] = useState("0xDefault");
  const [stakeAmount, setStakeAmount] = useState(0);
  const [unstakeAmount, setUnstakeAmount] = useState(0);
  const [daysLeft, setDaysLeft] = useState(7);
  const [stakingDuration, setStakingDuration] = useState(3);
  const [staking, setStaking] = useState(false);
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {   
    fetchStakedAmount();
    let counter = 0;

    const intervalID = setInterval(() => {
      updateReward();
      counter++;
      if (counter === stakingDuration) {
        clearInterval(intervalID);
      }
    }, 60000);
  }, []);

  useEffect(() => {
    updateStake();
  }, [stakeAmount]);

  useEffect(() => {
    updateUnstake();
  }, [unstakeAmount]);


  // will fetch stake info for the current user
  const fetchStakedAmount = () => {
    // gets the already staked amount from contract
    if (window.ethereum) {
      // get staked amount of user from contract and update stakeAmount
    }
  };

  //
  const updateStake = () => {
    console.log("stakeAmount: ", stakeAmount);
    console.log("stakeDuration: ", stakingDuration);
  };

  const updateUnstake = () => {
    console.log(unstakeAmount);
  };

  const updateReward = () => {
    console.log("updating reward");
  };

  return (
    <div className="App">
      <Header
        isConnected={isConnected}
        setIsConnected={setIsConnected}
        connectedAccount={connectedAccount}
        setConnectedAccount={setConnectedAccount}
      />
      <HeroSection
        staking={staking}
        setStaking={setStaking}
        isConnected={isConnected}
        stakeAmount={stakeAmount}
        setStakeAmount={setStakeAmount}
        daysLeft={daysLeft}
        setUnstakeAmount={setUnstakeAmount}
        setStakingDuration={setStakingDuration}
      />
    </div>
  );
};

export default App;
