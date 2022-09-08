import React from "react";

import { Link } from "react-router-dom";

export const Navbar=()=>{
    return(
        <div>
           <Link to="/">Live Score</Link>
           <Link to="/scorecard">Scorecard</Link>
           <Link to="/commentry">Commentry</Link>
           <Link to="/playingxi">Playing XI</Link>
           <Link to="/pointtable">Point Table</Link>
        </div>
    )
}