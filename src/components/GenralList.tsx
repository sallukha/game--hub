import { ListItem, List, HStack, Image,  Spinner, Button } from "@chakra-ui/react";
import useData from "../hooks/useData";
import getCroppedImageUrl from "../service/Image-url";
 

   interface props{
    onSelectGerne: (genre: Gerne) => void;
   }   




interface Gerne {
    id: string;
    name: string;
    image_background: string;
    isLodin:boolean
}

const GenralList = ({onSelectGerne}:props) => {
    const { data: genres, isLoading } = useData<Gerne>('/genres');

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
                        <Button  onClick={()=>onSelectGerne(genre)}   fontSize="lg" variant="link" >{genre.name}</Button>
                    </HStack>
                </ListItem>
            ))}
        </List>
    );
};

export default GenralList;
