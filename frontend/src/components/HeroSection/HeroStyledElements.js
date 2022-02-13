import styled from "styled-components";

export const HeroSectionMainContainer = styled.div`
  width: 80%;
  max-width: 50rem;
  height: 50rem;
  margin: 0 auto;
  padding: 5rem 0;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FormHeading = styled.h1`
  font-weight: 700;
  font-size: 2rem;
  color: #fff;
`;

export const DashboardContainer = styled.div`
  height: 20rem;
  width: 80%;
  max-width: 50rem;
  margin: 2rem 0;
  /* background-color: #fff; */

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const DashboardInnerContainer = styled.div`
  width: 30rem;
  display: flex;
  justify-content: space-between;
  margin: 1rem 0;
`;

export const DashboardLabel = styled.h1`
  font-weight: 500;
  font-size: 1.5rem;
  color: #fff;
  text-align: center;
`;

export const DashboardValue = styled.h1`
  font-weight: 500;
  font-size: 1.5rem;
  color: #2666cf;
  text-align: center;
`;

export const StakingForm = styled.form`
  margin: 5rem 0;
  height: 8rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const InputContainer = styled.div`
  width: 27rem;
  display: flex;
  justify-content: space-between;
  margin: 1rem 0;
`;

export const FormInput = styled.input`
  font-size: 1.2rem;
  width: 20rem;
  outline: none;
  border: none;
  border-radius: 10px;
  padding: 0.1rem 0.8rem;
`;

export const FormButton = styled.button`
  width: 5rem;
  height: 3rem;
  font-size: 1rem;
  border-radius: 10px;
  background-color: #270082;
  border: none;
  outline: none;
  color: #fff;

  &:hover {
    background-color: #270082;
  }

  &:active {
    background-color: #270068;
  }
`;

export const WarningLabel = styled.p`
  font-size: 1rem;
  color: #fff;
  margin: 2rem;
`;
