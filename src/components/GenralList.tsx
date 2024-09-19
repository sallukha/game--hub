import { ListItem, List, HStack, Image, Text } from "@chakra-ui/react";
import useData from "../hooks/useData";
import getCroppedImageUrl from "../service/Image-url";

interface Genre {
    id: string;
    name: string;
    image_background: string;  
}

const GenralList = () => {
    const { data: genres, error, isLoading } = useData<Genre>('/genres');

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <List >
            {genres.map((genre) => (
                <ListItem key={genre.id}   paddingY="10px" >
                    <HStack>
                        
                        {genre.image_background && (
                            <Image 
                                boxSize="32px" 
                                borderRadius={8} 
                                src={getCroppedImageUrl(genre.image_background)} 
                                alt={genre.name}
                            />
                        )}
                        <Text  fontSize="lg" >{genre.name}</Text>
                    </HStack>
                </ListItem>
            ))}
        </List>
    );
};

export default GenralList;
