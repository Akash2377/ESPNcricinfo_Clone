import React from "react";
import styles from "./rightnewdiv.module.css"

let imgarr=[
    
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcF4RzKYHWEGg4nMND0KWR4GdzIgWWkBVyjQ&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNu54tTRRCKQ7yhyck8mvX440QodlqcUaFxA&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ-BfW5qht04iHrdbCdgng8ct1Sm2xW9J0vQ&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9vXx7IFPlQHvFe3HIbiCX0tdE7GPb80-EyA&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMFsafs6FevpBIqSH2hisUPvfCCN1F3fWohQ&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUhtuS_RFEAy_zyhGB1US7alGSIu6MStK-4g&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcYrLyFULcDjNHbcFY-6jzRLI4LF8Eite3Dw&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTH62MmhFGZ56Cwloz7Jidn3Mb7MWpjcP_Pg&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROsxrWs9fIKB8DGpQhZms320oT3FP2ha_Kvw&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbB1LThtAsT0h0IoSO7HZM5Tr2oSZYW4Hrrw&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMudxUsKwMxvmps5BUsK9xLERWLrQAFKd0pA&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIzI56QKuAv-dtROkwqw9af5ObDtbXrmuynQ&usqp=CAU"

]

let i=0;
export const RightNavBox=(props)=>
{
 const  {hline}=props.info
  const theme=props.theme
    //console.log(info);
   i++;
   if(i>imgarr.length-1){
    i=0;
   }
    console.log(i);
    return <div className={styles.Rmainbox}  style={theme==="light"?null:{backgroundColor:"#1d1e1f",color:"white",border:"1px solid #2b2c2d"}}  >
 
    <img src={imgarr[i]} alt="hy" />
   

<div>
    <p className={styles.Rhead}>{hline}</p>
  
</div>
    </div>
}