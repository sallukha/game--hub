import useData from "./useData"
import { Genre } from "./useGenres"


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





 


const useGame = (_SelectedGenre?: Genre | null) =>useData<Game>("/games",{params:{genres:_SelectedGenre?.id}},[_SelectedGenre?.id])


export default useGame