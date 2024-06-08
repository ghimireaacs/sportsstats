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
        <div className="flex bg-red-400 w-64 h-64 rounded-md m-2 justify-center items-center ">
            {/* THIS HANDLES EACH GRID of CARD */}
        <div key={competition.id} className="bg-white w-24 flex h-32 ">
        
                {/* Id: {competition.id} */}
            
        </div>
        </div>
    ))
    return(
        <>
        <div className="bg-blue-400 flex flex-wrap m-auto">
            {/* FULL BACKGROUND */}
        {/* <p>{league.count}</p> */}
        {competitionList}
        
        {/* <p>{league.name}</p> */}
        </div>
        </>
    )
}
export default Leagues;