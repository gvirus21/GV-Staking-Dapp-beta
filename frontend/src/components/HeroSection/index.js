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
  PlaceHolderDiv,
} from "./HeroStyledElements";
const HeroSection = ({
  staking,
  setStaking,
  isConnected,
  stakeAmount,
  setStakeAmount,
  setUnstakeAmount,
  setStakingDuration,
  daysLeft,
}) => {
  const [dashboardTitle, setDashboardTilte] = useState(
    "You haven't staked anything yet!"
  );
  const [stakeInputValue, setStakeInputValue] = useState(0);
  const [unstakeInputValue, setUnstakeInputValue] = useState(0);

  useEffect(() => {
    if (staking) {
      setDashboardTilte("Your Dashboard");
    }
  }, [staking]);
  function stake() {
    setStakeAmount(Number(stakeAmount) + Number(stakeInputValue));
    setStaking(true);
  }

  function unstake() {
    setUnstakeAmount(unstakeInputValue);
  }

  return (
    <>
      <HeroSectionMainContainer>
        {isConnected ? (
          <FormHeading>{dashboardTitle}</FormHeading>
        ) : (
          <FormHeading>Hi, Welcome</FormHeading>
        )}

        {isConnected ? (
          <>
            {staking ? (
              <DashboardContainer>
                <DashboardInnerContainer>
                  <DashboardLabel>Your staked amount: </DashboardLabel>
                  <DashboardValue>{stakeAmount}</DashboardValue>
                </DashboardInnerContainer>
                <DashboardInnerContainer>
                  <DashboardLabel>Days left: </DashboardLabel>
                  <DashboardValue>{daysLeft}</DashboardValue>
                </DashboardInnerContainer>
                <DashboardInnerContainer>
                  <DashboardLabel>Your reward</DashboardLabel>
                  <DashboardValue>500</DashboardValue>
                </DashboardInnerContainer>
              </DashboardContainer>
            ) : (
              <PlaceHolderDiv></PlaceHolderDiv>
            )}
            <StakingForm>
              {staking ? (
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
              ) : (
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
              )}
            </StakingForm>
          </>
        ) : (
          <WarningLabel>Please Connect your wallet to continue</WarningLabel>
        )}
      </HeroSectionMainContainer>
    </>
  );
};

export default HeroSection;
