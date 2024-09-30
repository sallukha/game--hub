import { ListItem, List, HStack, Image,  Spinner, Button } from "@chakra-ui/react";
import useData from "../hooks/useData";
import getCroppedImageUrl from "../service/Image-url";


   interface props{
    onSelectGenre:(genre :Genre)=>void
   }   




interface Genre {
    id: string;
    name: string;
    image_background: string;
}

const GenralList = ({onSelectGenre}:props) => {
    const { data: genres, isLoading } = useData<Genre>('/genres');

    if (isLoading) return <Spinner />
     

    return (
        <List >
            {genres.map((genre) => (
                <ListItem key={genre.id} paddingY="10px" >
                    <HStack>

                        {genre.image_background && (
                            <Image
                                boxSize="32px"
                                borderRadius={8}
                                src={getCroppedImageUrl(genre.image_background)}
                                alt={genre.name}
                            />
                            
                        )}
                        <Button  onClick={()=>onSelectGenre(genre)}   fontSize="lg" variant="link" >{genre.name}</Button>
                    </HStack>
                </ListItem>
            ))}
        </List>
    );
};

export default GenralList;
