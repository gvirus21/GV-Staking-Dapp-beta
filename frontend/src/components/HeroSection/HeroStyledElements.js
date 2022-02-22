import styled from "styled-components";

export const HeroSectionMainContainer = styled.div`
  width: 80%;
  max-width: 50rem;
  margin: 0 auto;
  padding: 2rem 0;

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
  padding: 1rem 4rem;
  max-width: 50rem;
  margin: 2rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  background: linear-gradient(45deg, #1a1a40, #270082);
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
  color: #faeee7;
  text-align: center;
`;

export const DashboardValue = styled.h1`
  font-weight: 500;
  font-size: 1.5rem;
  color: #faeee7;
  text-align: center;
`;
export const PlaceHolderDiv = styled.div`
  height: 5rem;
  width: 10rem;
`;

export const StakingForm = styled.form`
  margin: 1rem 0;
  padding: 1rem 4rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-radius: 20px;
  max-width: 50rem;

  background: linear-gradient(45deg, #041562, #11468f);
`;

export const InputContainer = styled.div`
  width: 30rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1rem 0;
`;

export const FormInput = styled.input`
  font-size: 1.2rem;
  height: 3rem;
  width: 15rem;
  text-align: right;
  outline: none;
  border: none;
  border-radius: 10px;
  padding: 0.1rem 0.8rem;
  margin: 1rem 0;
`;

export const DurationSelector = styled.select`
  margin: 1rem 0.5rem;
  padding: 0.5rem 0.5rem;
  border: none;
  outline: none;
  border-radius: 10px;
`;

export const DurationOption = styled.option``;

export const DurationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const DurationLabel = styled.p`
  color: #fff;
`;

export const FormButton = styled.button`
  margin: 1rem 0;
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
