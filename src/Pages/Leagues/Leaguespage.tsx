import React from "react"
import axios from "axios"
import { useState, useEffect } from "react"


interface League{
    count:number
    filters: any
    competitions: Competition[]
    

}
interface Competition {
    id: number
    area: string
    name: String
    code: string | null
    type: string
    emblem: string | null
    plan: string
    currentSeason?: string;
    numberOfAvailableSeasons:number
    lastUpdate:string

}

interface ApiResponse {
    count: number
    filters: any
    competitions: Competition[];
}

const leagueUrl:string = "./../../json/competitions.json";

const Leagues:React.FC = () =>{
    const [league, setLeague] = useState<League | null>(null);
    useEffect(()=>{
        axios.get<ApiResponse>(leagueUrl).then((response) => {
            setLeague(response.data);
        })
    },[]);
    console.log(league)
    if (!league) return (
        <>
        <p>
            Data Not Found.
        </p>
        </>
    );
    const competitionList=league.competitions.map((competition)=>(
        <li key={competition.id}>
            <p>
                Id: {competition.id}
            </p>
        </li>
    ))
    return(
        <>
        <p>{league.count}</p>
        <p>{competitionList}</p>

        {/* <p>{league.name}</p> */}
        </>
    )
}
export default Leagues;