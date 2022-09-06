import styles from "./center.module.css"
import React from "react";
import {useDispatch,useSelector} from "react-redux"
import { getnews, getnewsloading,getnewerror} from "../../Redux/centrebox/action";
import { NavBox } from "../newsbox.jsx/newdiv";
export const CenterBox=()=>{
    const dispatch=useDispatch();
    const newsdisplay=useSelector((state)=>state.news);
    const newsloading=useSelector((state)=>state.loading);
    const newserror=useSelector((state)=>state.error);
    
React.useEffect(()=>{
    getnewsdata()
},[])


function getnewsdata(){
    dispatch(getnewsloading())
    fetch(`https://cricbuzz-cricket.p.rapidapi.com/news/v1/index`,{
        method:"GET",
        headers: {
                'X-RapidAPI-Key': 'bd73fbab72msh41aa8b1ae34d02fp1118fcjsnb86ef1d3cf9d',
                'X-RapidAPI-Host': 'cricbuzz-cricket.p.rapidapi.com'
             }
    })
    .then((res)=>res.json())
    .then((res)=>{
       console.log(res.storyList)
        return dispatch( getnews(res.storyList))})
    .catch((error)=>dispatch(getnewerror()))

}


console.log(newsdisplay,newserror,newsloading)
    return <div className={styles.centerbox1}>
     <div>
        <img src="https://tpc.googlesyndication.com/simgad/16233217720762028300?" alt="Advertisment Logo" />
     </div>
     <div className={styles.midbox}>
        <div className={styles.firstbox}>
           
        </div>
        <div className={styles.secbox}>
          <img src="https://tpc.googlesyndication.com/simgad/17909822381541812721?" alt="adImage" />  
          <img src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_720/lsci/db/PICTURES/CMS/345300/345311.6.jpg" alt="adimg" />
          <div className={styles.newsfeed}>
            <p>Well-rounded Afghanistan look to bounce back against Pakistan</p>
            <p>A win will take Pakistan closure to the final while Afghanistan will be keen to open their 
                account in the Super 40's</p>
          </div>
        {
            newsdisplay.map((news)=>
                news.story===undefined ? console.log(news):<NavBox key={news.story.id} info={news.story}/>
            )
            
        }
        {
            newsdisplay.map((news)=>
                news.story===undefined ? console.log(news):<NavBox key={news.story.id} info={news.story}/>
            )
            
        }
        
        
        </div>
        <div className={styles.third}>
            <img src="https://tpc.googlesyndication.com/simgad/14828744798620350827?" alt="adImage" />
            <img src="https://tpc.googlesyndication.com/simgad/2819355493784373752?" alt="ad" />
            <img src="https://tpc.googlesyndication.com/simgad/11639078905771269026?" alt="ad" />
        </div>
     
     </div>
    </div>
}