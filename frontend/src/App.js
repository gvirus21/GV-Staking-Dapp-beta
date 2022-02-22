import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import React, { useState, useEffect } from "react";
import StakeTokenAbi from "./artifacts/StakeToken.json";

const StakeTokenAddress = "";
const gvTokenAddress = "";
const tokenFarmAddress = "";

const App = () => {
  const [staking, setStaking] = useState(false);
  const [connectedAccount, setConnectedAccount] = useState("0xDefault");
  const [isConnected, setIsConnected] = useState(false);
  const [stakeAmount, setStakeAmount] = useState(0);
  const [stakingDuration, setStakingDuration] = useState(3);
  const [unstakeAmount, setUnstakeAmount] = useState(0);

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

  // const handleAutoConnect = async () => { }

  // const handleConnect = async () => {
  //   if (window.ethereum) {
  //     try {
  //       const accounts = await window.ethereum.request({
  //         method: "eth_requestAccounts",
  //       });

  //       if (accounts) {
  //         setIsConnected(true);
  //         setConnectedAccount(accounts[0]);
  //       }
  //     } catch (err) {
  //       console.error(err);
  //     }
  //   }
  // };

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
        setUnstakeAmount={setUnstakeAmount}
        setStakingDuration={setStakingDuration}
      />
    </div>
  );
};

export default App;
