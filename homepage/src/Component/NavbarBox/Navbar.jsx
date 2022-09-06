import React from "react";
import { Box } from '@chakra-ui/react'
import {Link} from "react-router-dom"
import {IoMdMoon} from 'react-icons/io';
import {BsTranslate} from 'react-icons/bs';
import {GrApps} from 'react-icons/gr';
import {FaSearch} from 'react-icons/fa';
import {FaTh} from 'react-icons/fa';
import styles from "./Nav.module.css"

export const Navbar=()=>{

    return(<div className={styles.nvi}>
    <Box  className={styles.Navbox} bg='#03a9f4' w='100%' p={4} >
    <img src="https://wassets.hscicdn.com/static/images/logo.png" alt="logo"/>
    <div style={{
      display:"flex",
      gap:"30px",
      marginLeft:"20px"
    }}>
    <Link to="">Live Scores</Link>
    <Link to="">Series</Link>
    <Link to="">Teams</Link>
    <Link to="">News</Link>
    <Link to="">Features</Link>
    <Link to="">Videos</Link>
    <Link to="">Stats</Link>
    </div>
    <div  style={{
      display:"flex",
      gap:"30px"
    }}>
      <Link to="" style={{display:"flex",gap:"10px"}}><img src="https://wassets.hscicdn.com/static/images/fantasy-home.png" style={{width:"20px"}}/>
        Fantasy</Link>
      <Link to="">Edition IN</Link>
      <IoMdMoon  size="24px"/>
      <BsTranslate size="24px" />
      <FaTh size="24px"/>
  <FaSearch  size="20px"/>

   
    </div>

</Box>
<Box  className={styles.Navbox2} bg='#white' w='100%' p={4} >
<div>Asia Cup 2022</div>
<div className={styles.hr}></div>
<div>

    <Link style={{fontWeight:700}} to="">Home</Link>
    <Link to="">Fixtures and Results</Link>
    <Link to="">Table</Link>
    <Link to="">Videos</Link>
    <Link to="">Stats</Link>
    <Link to="">Squads</Link>
    <Link to="">Seasons</Link>
    <Link to="">Photos</Link>
</div>
  </Box>

</div>

)
}