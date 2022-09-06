import React from "react";
import styles from "./newdiv.module.css"
export const NavBox=({info})=>{
  const  {hline,intro}=info
    console.log(info);
    return <div className={styles.mainbox}>

    <img src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_720/lsci/db/PICTURES/CMS/330200/330251.6.jpg" alt="hy" />

<div>
    <p className={styles.head}>{hline}</p>
    <p className={styles.con}>{intro}</p>
</div>
    </div>
}