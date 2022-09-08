import React from "react";

const intiState=[
    {
    batBalls: 12,
    batDots: 7,
    batFours: 0,
    batId: 7662,
    batName: "Glenn Maxwell",
    batMins: 15,
    batRuns: 7,
    batSixes: 0,
    batStrikeRate: 58.33
}
]

export const Score=()=>{
    const [liveScore, setLiveScore]=React.useState(intiState);
    const [loading,setLoading]=React.useState(false);

    React.useEffect(()=>{
        setLoading(true);
        fetch("https://www.cricbuzz.com/api/cricket-match/commentary/48088")
        .then((res)=>res.json())
        .then((res)=>{
            setLiveScore(res.commentaryList[0].batsmanStriker)
        })
        .catch((err)=>console.log(err))
        .finally(()=>setLoading(false));
    },[])
    let {batName,batRuns,batBalls,batFours,batSixes,batStrikeRate}=liveScore;
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
                            <tr>
                                <td>{batName}</td>
                                <td>{batRuns}</td>
                                <td>{batBalls}</td>
                                <td>{batFours}</td>
                                <td>{batSixes}</td>
                                <td>{batStrikeRate}</td>
                            </tr>
                            <tr>
                                <td>David Warner</td>
                                <td>{batRuns}</td>
                                <td>{batBalls}</td>
                                <td>{batFours}</td>
                                <td>{batSixes}</td>
                                <td>{batStrikeRate}</td>
                            </tr>

                </tbody>
            </table>
        )
    }
        
    
}