import { useState, useEffect } from "react";
import { AxiosRequestConfig, AxiosResponse, CanceledError } from "axios";
import apiClintServer from "../service/api-clint-server";

interface FetchResponse<T> {
    count: number;
    results: T[];
}

const useData = <T>(endPoint: string ,_requestConfig?:AxiosRequestConfig ,_deps?:any[]) => {
    const [data, setData] = useState<T[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        const controller = new AbortController();
        setLoading(true);

        apiClintServer
            .get<FetchResponse<T>>(endPoint, { signal: controller.signal, ..._requestConfig})
            .then((res: AxiosResponse<FetchResponse<T>>) => {
                setData(res.data.results);
                setLoading(false);
            })
            .catch((err) => {
                if (err instanceof CanceledError) return;
                setError(err.message || "An error occurred");
                setLoading(false);
            });

        return () => controller.abort();
    },  _deps ?[..._deps]:[]);

    return { data, error, isLoading };
};

export default useData;
