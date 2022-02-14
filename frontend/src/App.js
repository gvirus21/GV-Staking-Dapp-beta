import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import React, { useState, useEffect } from "react";

const App = () => {
  const [connectedAccount, setConnectedAccount] = useState("");
  const [isConnected, setIsConnected] = useState(false);

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

  useEffect(() => {
    handleConnect();
  }, []);

  return (
    <div className="App">
      <Header isConnected={isConnected} setIsConnected={setIsConnected} />
      <HeroSection isConnected={isConnected} />
    </div>
  );
};

export default App;
