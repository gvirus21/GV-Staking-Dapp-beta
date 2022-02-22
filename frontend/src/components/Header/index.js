import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import {
  HeaderMainContainer,
  ConnectButton,
  ConnectedLabel,
  HeaderInnerContainer,
  Logo,
  AddressLabel,
} from "./HeaderStyledElements";

const Header = ({
  isConnected,
  setIsConnected,
  connectedAccount,
  setConnectedAccount,
}) => {
  function truncate(connectedAccount) {
    if (connectedAccount.length > 5) {
      return connectedAccount.substring(0, 5) + "...";
    }
    return connectedAccount;
  }

  const trimmedAddress = truncate(connectedAccount);

  const connect = async () => {
    if (typeof window.ethereum !== "undefined") {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });

        if (accounts) {
          setConnectedAccount(accounts[0]);
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

    // won't set if their is no new account
    if (newAccount[0]) {
      setConnectedAccount(newAccount[0]);
      setIsConnected(true);
    }
  };

  useEffect(() => {
    if (window.ethereum) {
      window.ethereum.on("accountsChanged", accountChangeHandler);

      // auto connect
      window.ethereum
        .request({ method: "eth_accounts" })
        .then(accountChangeHandler)
        .catch((err) => {
          console.log("auto connect error: ", err);
        });
    }
  }, []);

  return (
    <>
      <HeaderMainContainer>
        <HeaderInnerContainer>
          <Logo>Gv Stake</Logo>

          {isConnected ? (
            <AddressLabel>
              <ConnectedLabel>{trimmedAddress}</ConnectedLabel>
            </AddressLabel>
          ) : (
            <ConnectButton onClick={() => connect()}>Connect</ConnectButton>
          )}
        </HeaderInnerContainer>
      </HeaderMainContainer>
    </>
  );
};

export default Header;
