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

const Header = ({ isConnected, setIsConnected }) => {
  const [accountAddress, setAccountAddress] = useState("0x86798");
  const [userBalance, setUserBalance] = useState(null);

  function truncate(accountAddress) {
    if (accountAddress.length > 5) {
      return accountAddress.substring(0, 5) + "...";
    }
    return accountAddress;
  }

  const trimmedAddress = truncate(accountAddress);

  const connect = async () => {
    if (typeof window.ethereum !== "undefined") {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });

        if (accounts) {
          accountChangeHandler(accounts[0]);
          setAccountAddress(accountAddress[0]);
          console.log(accountAddress[0]);
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
    console.log(newAccount);
    getUserBalance(newAccount);
    setIsConnected(true);
  };

  const getUserBalance = async (address) => {
    const balance = await window.ethereum.request({
      method: "eth_getBalance",
      params: [address],
    });
    setUserBalance(balance);
    console.log("user balance: ", userBalance);
  };

  useEffect(() => {
    console.log(accountAddress);
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
