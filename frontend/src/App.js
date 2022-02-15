import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import React, { useState, useEffect } from "react";
import StakeTokenAbi from "./artifacts/StakeToken.json";

 const StakeTokenAddress = "";
 const gvTokenAddress = "";
 const tokenFarmAddress = "";

const App = () => {
  const [connectedAccount, setConnectedAccount] = useState("");
  const [isConnected, setIsConnected] = useState(false);
  const [stakeAmount, setStakeAmount] = useState(0);
  const [unstakeAmount, setUnstakeAmount] = useState(0);

  useEffect(() => {
    handleConnect();
  }, []);

  useEffect(() => { 
    updateStake();
  }, [stakeAmount]);

  useEffect(() => {
    updateUnstake();
   }, [unstakeAmount]);

  
  const handleConnect = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });

        if (accounts) {
          setIsConnected(true);
          setConnectedAccount(accounts[0]);
        }
      } catch (err) {
        console.error(err);
      }
    }
  };

  // will fetch stake info for the current user
  const fetchAmountStaked = () => {
    // gets the already staked amount from contract
    if (window.ethereum) {
    }
  };

  // these functions will run when we change the stake and unstake amount
  // they are going to call / update stake and unstake amount in smart contract
  const updateStake = () => {};

  const updateUnstake = () => {};

  return (
    <div className="App">
      <Header isConnected={isConnected} setIsConnected={setIsConnected} />
      <HeroSection
        isConnected={isConnected}
        stakeAmount={stakeAmount}
        setStakeAmount={setStakeAmount}
        setUnstakeAmount={setUnstakeAmount}
      />
    </div>
  );
};

export default App;
