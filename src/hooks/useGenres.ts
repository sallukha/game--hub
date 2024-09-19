import useData from "./useData"
export interface Gerne {
    id: string,
    name: string
    image_background: string;
}

const useGenres = () => useData<Gerne>("/genres")



export default useGenres;