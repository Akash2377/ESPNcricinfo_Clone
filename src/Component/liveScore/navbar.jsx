import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const NavbarWrapper = styled.div`
  display: flex;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px,
    rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
  align-items: center;
  justify-content: space-around;
  gap: 20px;
  padding: 10px;
`;
const StyledLink = styled(Link)`
  &:hover {
    color: #4ac4ee;
  }
`;

export const NavbarLive = () => {
  return (
    <NavbarWrapper>
      <StyledLink to="/score">Live Score</StyledLink>
      <StyledLink to="/scorecard">Scorecard</StyledLink>
      <StyledLink to="/commentry">Commentry</StyledLink>
      <StyledLink to="/playingxi">Playing XI</StyledLink>
      <StyledLink to="/pointtable">Point Table</StyledLink>
    </NavbarWrapper>
  );
};
