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
  const connect = async () => {
    if (typeof window.ethereum !== "undefined") {
      // need to work on connect feature
      try {
        await window.ethereum.request({ method: "eth_requestAccounts" });
        setIsConnected(true);
      } catch (err) {
        console.error(err);
      }
    } else {
      console.log("no ethe found :( ");
    }
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
