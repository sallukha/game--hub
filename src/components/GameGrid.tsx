import { AxiosResponse } from "axios";
import apiClintServer from "../service/api-clint-server";
import { useEffect, useState } from "react";

interface Game {
    id: number,
    name: string
}

interface FetchGamesResponse {
    count: number,
    results: Game[]   
}

const GameGrid = () => {
    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState("");

    useEffect(() => {
        apiClintServer
            .get<FetchGamesResponse>('/games')
            .then((res: AxiosResponse<FetchGamesResponse>) => {
                setGames(res.data.results); 
            })
            .catch((err) => {
                setError("Failed to fetch games");
                console.error(err);
            });
    }, []);

    return (
        <div>
            {error && <p>{error}</p>}
            <ul>
                {games.map(game => <li key={game.id}>{game.name}</li>)}
            </ul>
        </div>
    );
};

export default GameGrid;
