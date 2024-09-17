import { useEffect } from "react";
import apiClintServer from "../service/api-clint-server";
import { useState } from "react";
import { AxiosResponse, CanceledError } from "axios";



export interface platform {
    id: number,
    name: string
    slug: string
}


export interface Game {
    id: number,
    name: string
    background_image: string ,
    parent_platforms: { platform: platform }[]
    metacritic: number
}





interface FetchGamesResponse {
    count: number,
    results: Game[]

}


const useGame = () => {
    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState("");
    useEffect(() => {
        const controller = new AbortController();
        apiClintServer
            .get<FetchGamesResponse>('/games', { signal: controller.signal })
            .then((res: AxiosResponse<FetchGamesResponse>) => {
                setGames(res.data.results);
            })
            .catch((err) => {

                if (err instanceof CanceledError) return
                setError(err.msg)
            });
        return () => controller.abort();
    }, []);
    return { games, error };
}



export default useGame