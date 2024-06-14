import React from "react"
import axios from "axios"
import { useState, useEffect } from "react"
import {Link, useParams } from 'react-router-dom'


import About from "../About"



interface League{
    count:number
    filters: any
    competitions: Competition[]
    competitionFiltered: Competition[]
}
interface Competition {
    id: number
    area: string
    name: string
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
    competitions: Competition[]
    competitionFiltered: Competition[];
}

const leagueUrl:string = "./../../json/league.json";

const Competitions:React.FC = () =>{
    const [league, setLeague] = useState<League | null>(null);
    useEffect(()=>{
        axios.get<ApiResponse>(leagueUrl).then((response) => {
            setLeague(response.data);
        })
    },[]);
    // console.log(league)
    if (!league) return (
        <>
        <p>
            Data Not Found.
        </p>
        </>
    );
    const competitionFiltered = league.competitions.filter((competition) =>
        competition.plan === "TIER_ONE");


    const competitionList=competitionFiltered.map((competition)=>(
        
        <Link to={competition.code} element={<About />} > 
        <div className="flex flex-col border-2 shadow-2xl shadow-lime-700 w-48 h-64 rounded-md m-8 justify-center items-center ">
            {/* THIS HANDLES EACH GRID of CARD */}
            
        <div key={competition.id} className="w-36 flex h-36 ">
            {/* Handles each card inside card */}
        
                <img src={competition.emblem} className="h-100 "></img>
            
        </div>
        <div className="m-4 text-white text-center uppercase text-sm">
            <p>{competition.id}</p>
        <p>{competition.name}</p>
        {/* <p>{competition.plan}</p> */}
        </div>
        </div>
        </Link>
    ))
 
    return(
        <>
        <div className=" flex flex-wrap m-auto justify-center ml-64 mr-64 mt-24 border-2 bg-green-800">
            {/* Body BACKGROUND */}
        {/* <p>{league.count}</p> */}
        {competitionList}
        
        {/* <p>{league.name}</p> */}
        </div>
        </>
    )
}
export default Competitions;