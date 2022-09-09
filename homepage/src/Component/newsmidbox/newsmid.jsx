import React from "react";
import styles from "./newsmid.module.css"
export const Newsmid=(props)=>{
    let theme=props.theme
    return <>
    <hr/>
    <div  style={theme==="light"?null:{backgroundColor:"#1d1e1f",color:"white",border:"1px solid #2b2c2d"}} className={styles.box1}>
        
    <h1>Report: Kohli record 122*,Bhuvneshwar 5-4</h1>
    <h1>How should India manage Bhuvneshwar</h1>
    <h1>India's middle-order.Who's in who's out?</h1>
    <h1>Pant : calculative in test out of breath in T20's</h1>
    <h1>Ahmadzali: Panic set in after last result?</h1>
    <h1>reactins to Kohli 100: 'Can't deny class'</h1>
    <h1>How should India manage Bhuvneshwar</h1>
    <h1>India's middle-order.Who's in who's out?</h1>
    </div>

</>}