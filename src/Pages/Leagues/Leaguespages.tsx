import React, { useState, useEffect } from "react";
import axios from "axios";

// Define interfaces for the data structure
interface Area {
  id: number;
  name: string;
  code: string;
  flag: string | null;
}

interface CurrentSeason {
  id: number;
  startDate: string;
  endDate: string;
  currentMatchday: number;
  winner: string | null;
}

interface Competition {
  id: number;
  area: Area;
  name: string;
  code: string;
  type: string;
  emblem: string;
  plan: string;
  currentSeason: CurrentSeason;
}

interface ApiResponse {
  count: number;
  filters: any; // You can define a more specific type if needed
  competitions: Competition[];
}

const leagueUrl: string = "https://api.football-data.org/v4/competitions";

const Leagues: React.FC = () => {
  const [competitions, setCompetitions] = useState<Competition[]>([]);

  useEffect(() => {
    const fetchLeagues = async () => {
      try {
        const response = await axios.get<ApiResponse>(leagueUrl, {
          headers: { 'X-Auth-Token': process.env.REACT_APP_FOOTBALL_API_TOKEN }
        });
        setCompetitions(response.data.competitions);
      } catch (error) {
        console.error("Error fetching leagues:", error);
      }
    };

    fetchLeagues();
  }, []);

  if (competitions.length === 0) return <p>Loading...</p>;

  return (
    <div>
      <h1>Competitions</h1>
      <ul>
        {competitions.map(competition => (
          <li key={competition.id}>
            <p>ID: {competition.id}</p>
            <p>Name: {competition.name}</p>
            <p>Area: {competition.area.name}</p>
            <p>Type: {competition.type}</p>
            <img src={competition.emblem} alt={`${competition.name} emblem`} width={50} height={50} />
            {/* Add other competition details as needed */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Leagues;
