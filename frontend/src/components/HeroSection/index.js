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
  DurationSelector,
  DurationOption,
  DurationContainer,
  DurationLabel,
} from "./HeroStyledElements";
const HeroSection = ({
  isConnected,
  stakeAmount,
  setStakeAmount,
  setUnstakeAmount,
  setStakingDuration,
}) => {
  const [warningLabelText, setWarningLabelText] = useState("");
  const [stakeInputValue, setStakeInputValue] = useState(0);
  // const [stakingDuration, setStakingDuration] = useState(3);
  const [unstakeInputValue, setUnstakeInputValue] = useState(0);

  function stake() {
    // adding old stake value(if there is any) + new input stake value
    setStakeAmount(Number(stakeAmount) + Number(stakeInputValue));
  }

  function unstake() {
    setUnstakeAmount(unstakeInputValue);
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
                <DashboardLabel>Days left: </DashboardLabel>
                <DashboardValue>1</DashboardValue>
              </DashboardInnerContainer>
              <DashboardInnerContainer>
                <DashboardLabel>Your reward</DashboardLabel>
                <DashboardValue>500</DashboardValue>
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
                <DurationContainer>
                   <DurationSelector
                  onChange={(e) => {
                    setStakingDuration(e.target.value);
                  }}
                >
                  <DurationOption>3</DurationOption>
                  <DurationOption>7</DurationOption>
                  <DurationOption>14</DurationOption>
                  </DurationSelector>
                  <DurationLabel>Days</DurationLabel>
                </DurationContainer>
               
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
                  min="10"
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
