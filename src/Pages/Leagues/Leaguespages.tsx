import React, { useState, useEffect } from "react";
import axios from "axios";

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
  code: string | null;
  type: string;
  emblem: string | null;
  plan: string;
  currentSeason: CurrentSeason;
  numberOfAvailableSeasons: number;
  lastUpdated: string;
}

interface ApiResponse {
  count: number;
  filters: any;
  competitions: Competition[];
}

const leagueUrl: string = "./json/competitions.json";

const Leagues: React.FC = () => {
  const [competitions, setCompetitions] = useState<Competition[]>([]);

  useEffect(() => {
    axios.get<ApiResponse>(leagueUrl).then((response) => {
      setCompetitions(response.data.competitions);
    });
  }, []);



  return (
    <div>
      <h1>Competitions</h1>

      <ul>
        {competitions.map((competition) => (
          <li key={competition.id}>
            <p>Name: {competition.name}</p>
            <p>Type: {competition.type}</p>
            {/* Display other competition details */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Leagues;
