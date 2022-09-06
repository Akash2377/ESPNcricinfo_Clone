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

    return(
    <Box fontSize="16px" alignContent="center" gap="20px" justifyContent="space-around" className="Navbox" bg='#03a9f4' w='100%'  display="flex" p={4} color='white'>
    <img  style={{width:"138px"}} src="https://wassets.hscicdn.com/static/images/logo.png" alt="logo"/>
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
      <h1 className={styles.akash}>hy</h1>
</Box>)
}