import React from "react";

const initScore={

}

export const Scorecard=()=>{
    const [liveScore, setLiveScore]=React.useState([]);

    React.useEffect(()=>{
        fetch("https://www.cricbuzz.com/api/cricket-match/commentary/51245")
        .then((res)=>res.json())
        .then((res)=>setLiveScore(res.commentaryList))
        .catch((err)=>console.log(err));
    },[])
    console.log(liveScore);
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
                {liveScore.map(score=>{
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
                })}
            </tbody>
        </table>
    )
        
    
}