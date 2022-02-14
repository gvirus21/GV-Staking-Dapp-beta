import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import {
  HeaderMainContainer,
  ConnectButton,
  ConnectedLabel,
  HeaderInnerContainer,
  Logo,
} from "./HeaderStyledElements";

const Header = ({ isConnected, setIsConnected }) => {
  const [defaultAccont, setDefaultAccount] = useState(null);
  const [userBalance, setUserBalance] = useState(null);

  const connect = async () => {
    if (typeof window.ethereum !== "undefined") {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });

        if (accounts) {
          accountChangeHandler(accounts[0]);
          setIsConnected(true);
        }
        
      } catch (err) {
        console.error(err);
      }
    } else {
      alert("Wallet not found");
    }
  };

  const accountChangeHandler = (newAccount) => {
    console.log(newAccount)
    getUserBalance(newAccount);
    setIsConnected(true);
  };

  const getUserBalance = async (address) => {
    const balance = await window.ethereum.request({ method: "eth_getBalance", params: [address, ] });
    setUserBalance(balance);
    console.log("user balance: ", userBalance)
  };

  useEffect(() => {}, []);
  return (
    <>
      <HeaderMainContainer>
        <HeaderInnerContainer>
          <Logo>Gv Staking Dapp</Logo>

          {isConnected ? (
            <ConnectedLabel> 🟢 Connected</ConnectedLabel>
          ) : (
            <ConnectButton onClick={() => connect()}>Connect</ConnectButton>
          )}
        </HeaderInnerContainer>
      </HeaderMainContainer>
    </>
  );
};

export default Header;
