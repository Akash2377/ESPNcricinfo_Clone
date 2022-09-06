import * as types from "./actiontype";
import { useDispatch } from "react-redux";
export const getnews=(data)=>(
    {
        type:types.GETNEWS,
        payload:data

    }
)
export const getnewsloading=()=>(
    {
        type:types.GETNEWSLOADING
    }
)
export const getnewerror=()=>(
    {
        type:types.GETNEWSERROR
    }
)

export const Fetchdata=()=>{
    const dispatch=useDispatch()
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

