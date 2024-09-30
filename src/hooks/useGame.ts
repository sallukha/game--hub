import { useEffect } from "react";
import apiClintServer from "../service/api-clint-server";
import { useState } from "react";
import { AxiosResponse, CanceledError } from "axios";
import { Gerne } from "./useGenres";


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


const useGame = (setSelectGenre:Gerne|null) => {
    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState("");
    const [isLoding ,setLoding]=useState(false)
    useEffect(() => {
        const controller = new AbortController();
        setLoding(true)
        apiClintServer
            .get<FetchGamesResponse>('/games', { signal: controller.signal })
            .then((res: AxiosResponse<FetchGamesResponse>) => {
                setGames(res.data.results);
                setLoding(false)
            })
            .catch((err) => {

                if (err instanceof CanceledError) return
                setError(err.msg)
                setLoding(false)
            });
        return () => controller.abort();
    }, []);
    return { games, error ,isLoding };
}



export default useGame