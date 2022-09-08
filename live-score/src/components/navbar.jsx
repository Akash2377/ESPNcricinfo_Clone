import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const NavbarWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  background: pink;
  color: white;
  padding: 20px;
`;



export const Navbar=()=>{
    return(
        <NavbarWrapper>
           <Link to="/">Live Score</Link>
           <Link to="/scorecard">Scorecard</Link>
           <Link to="/commentry">Commentry</Link>
           <Link to="/playingxi">Playing XI</Link>
           <Link to="/pointtable">Point Table</Link>
        </NavbarWrapper>
    )
}