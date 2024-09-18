import useData from "./useData"
export interface Gerne {
    id: string,
    name: string
}

const useGenres = () => useData<Gerne>("/genres")



export default useGenres;