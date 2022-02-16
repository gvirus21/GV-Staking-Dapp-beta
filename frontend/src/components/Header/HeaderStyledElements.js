import styled from "styled-components";

export const HeaderMainContainer = styled.header`
  width: 100%;
  height: 7rem;
`;

export const HeaderInnerContainer = styled.div`
  width: 80%;
  min-width: 750px;
  height: 7rem;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.h1`
  font-family: "Poppins";
  font-size: 1.5rem;
  color: #fff;
  text-transform: uppercase;
`;

export const ConnectButton = styled.button`
  padding: 1rem 2rem;
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

export const AddressLabel = styled.div`
  height: 2rem;
  width: 5rem;
  padding: 0.1rem 0.3rem;
  border-radius: 10px;
  background-color: #270082;
`;

export const ConnectedLabel = styled.p`
  font-size: 1rem;
  color: #fff;
  /* height: 2rem; */
  max-width: 2rem;
  overflow: hidden
`;
