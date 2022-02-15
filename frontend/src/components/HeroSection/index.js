import React, { useEffect, useState } from "react";
import {
  HeroSectionMainContainer,
  FormHeading,
  StakingForm,
  InputContainer,
  FormInput,
  FormButton,
  WarningLabel,
  DashboardContainer,
  DashboardInnerContainer,
  DashboardLabel,
  DashboardValue,
} from "./HeroStyledElements";
const HeroSection = ({
  isConnected,
  stakeAmount,
  setStakeAmount,
  setUnstakeAmount,
}) => {
  const [warningLabelText, setWarningLabelText] = useState("");
  const [stakeInputValue, setStakeInputValue] = useState();
  const [unstakeInputValue, setUnstakeInputValue] = useState();

  function stake() {
    console.log("stake amount: ", stakeInputValue);
    setStakeAmount(stakeAmount + stakeInputValue);
  }

  function unstake() {
    console.log("unstake amount: ", unstakeInputValue);
    setUnstakeAmount(unstakeInputValue)
  }

  return (
    <>
      <HeroSectionMainContainer>
        {isConnected ? (
          <FormHeading>Your Dashboard</FormHeading>
        ) : (
          <FormHeading>Hi, Welcome</FormHeading>
        )}

        {isConnected ? (
          <>
            <DashboardContainer>
              <DashboardInnerContainer>
                <DashboardLabel>Your staked amount: </DashboardLabel>
                <DashboardValue>5000</DashboardValue>
              </DashboardInnerContainer>
              <DashboardInnerContainer>
                <DashboardLabel>Minutes left: </DashboardLabel>
                <DashboardValue>1</DashboardValue>
              </DashboardInnerContainer>
              <DashboardInnerContainer>
                <DashboardLabel>Your reward</DashboardLabel>
                <DashboardValue>5100</DashboardValue>
              </DashboardInnerContainer>
            </DashboardContainer>
            <StakingForm>
              <InputContainer>
                <FormInput
                  id="stakeInput"
                  placeholder="Enter Stake amount in GVT"
                  type="number"
                  min="0"
                  value={stakeInputValue}
                  onChange={(e) => {
                    setStakeInputValue(e.target.value);
                  }}
                />
                <FormButton
                  onClick={(e) => {
                    e.preventDefault();
                    stake(e);
                    setStakeInputValue(0);
                  }}
                >
                  Stake
                </FormButton>
              </InputContainer>
              <InputContainer>
                <FormInput
                  id="unstakeInput"
                  placeholder="Enter Unstake amount in GVT"
                  type="number"
                  min="0"
                  value={unstakeInputValue}
                  onChange={(e) => {
                    setUnstakeInputValue(e.target.value);
                  }}
                />
                <FormButton
                  onClick={(e) => {
                    e.preventDefault();
                    unstake();
                    setUnstakeInputValue(0);
                  }}
                >
                  Unstake
                </FormButton>
              </InputContainer>
            </StakingForm>
            <WarningLabel>{warningLabelText}</WarningLabel>
          </>
        ) : (
          <WarningLabel>Please Connect your wallet to continue</WarningLabel>
        )}
      </HeroSectionMainContainer>
    </>
  );
};

export default HeroSection;
