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
  font-size: 1.5rem;
  color: #fff;
  letter-spacing: 1px;
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
  height: 3rem;
  width: 7rem;
  padding: 1rem 1rem;
  border-radius: 10px;
  background-color: #270082;
`;

export const ConnectedLabel = styled.p`
  font-size: 1rem;
  color: #fff;
  max-width: 7rem;
`;
