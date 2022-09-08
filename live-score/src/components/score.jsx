import React from "react";


export const Score=()=>{
    const [liveScore, setLiveScore]=React.useState([]);
    const [loading,setLoading]=React.useState(false);

    React.useEffect(()=>{
        setLoading(true);
        fetch("https://www.cricbuzz.com/api/cricket-match/commentary/49670")
        .then((res)=>res.json())
        .then((res)=>{
            setLiveScore(res.commentaryList)
        })
        .catch((err)=>console.log(err))
        .finally(()=>setLoading(false));
    },[])
    console.log("liveScore",liveScore);
    if(loading){
        return <h1>loading...</h1>
    }else{
        return (
            <table>
                <thead>
                    <tr>
                        <th>Batters</th>
                        <th>R</th>
                        <th>B</th>
                        <th>4s</th>
                        <th>6s</th>
                        <th>SR</th>
                    </tr>
                </thead>
                <tbody>
                    {/* {liveScore.map(score=>{
                        return(
                            <tr>
                                <td>{score.batsmanStriker.batName}</td>
                                <td>{score.batsmanStriker.batRuns}</td>
                                <td>{score.batsmanStriker.batBalls}</td>
                                <td>{score.batsmanStriker.batFours}</td>
                                <td>{score.batsmanStriker.batSixes}</td>
                                <td>{score.batsmanStriker.batStrikeRate}</td>
                            </tr>
                        )
                    })} */}
                </tbody>
            </table>
        )
    }
        
    
}