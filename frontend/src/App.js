import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import React, { useState, useEffect } from "react";

const App = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [provider, setProvider] = useState();

  return (
    <div className="App">
      <Header isConnected={isConnected} setIsConnected={setIsConnected} />
      <HeroSection isConnected={isConnected} />
    </div>
  );
};

export default App;
