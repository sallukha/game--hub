
import useGenres from "../hooks/useGenres"




const GenralList = () => {
    const { genres } = useGenres();
    return (
        <ul>
            {genres.map(genre => <li key={genre.id}>{genre.name}</li>)}
        </ul>
    )
}

export default GenralList
