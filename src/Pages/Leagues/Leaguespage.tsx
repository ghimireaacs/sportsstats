import React from "react"
import axios from "axios"
import { useState, useEffect } from "react"
interface League{
    count:number

    

}

const leagueUrl:string = "https://api.football-data.org/v4/competitions";

const Leagues:React.FC = () =>{
    const [league, setLeague] = useState<League | null>(null);
    useEffect(()=>{
        axios.get(leagueUrl).then((response) => {
            setLeague(response.data);
        })
    },[]);

    if (!league) return (
        <>
        <p>
            Data Not Found.
        </p>
        </>
    );
    return(
        <>
        <p>{league.count}</p>
        {/* <p>{league.name}</p> */}
        </>
    )
}
export default Leagues;