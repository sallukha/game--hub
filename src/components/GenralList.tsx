import useData from "../hooks/useData";

interface Genre {
    id: string;
    name: string;
}

const GenralList = () => {
    const { data: genres, error, isLoading } = useData<Genre>('/genres'); // Pass the endpoint

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <ul>
            {genres.map((genre) => (
                <li key={genre.id}>{genre.name}</li>
            ))}
        </ul>
    );
};

export default GenralList;
