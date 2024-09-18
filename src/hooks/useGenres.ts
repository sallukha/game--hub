import { useState, useEffect  } from "react";
import { AxiosResponse  , CanceledError} from "axios";
 
 
import apiClintServer from "../service/api-clint-server";
interface Gerne {
    id: string,
    name: string
}


interface FetchGenresResponse {
    count: number
    results: Gerne[]
}


const useGenres = () => {
    const [genres, setGenres] = useState<Gerne[]>([]);
    const [error, setError] = useState("");
    const [isLoding, setLoding] = useState(false)
    useEffect(() => {
        const controller = new AbortController();
        setLoding(true)
        apiClintServer
            .get<FetchGenresResponse>('/genres', { signal: controller.signal })
            .then((res: AxiosResponse<FetchGenresResponse>) => {
                setGenres(res.data.results);
                setLoding(false)
            })
            .catch((err) => {

                if (err instanceof CanceledError) return
                setError(err.msg)
                setLoding(false)
            });
        return () => controller.abort();
    }, []);
    return { genres, error, isLoding };
}


export default useGenres;