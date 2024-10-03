import { SimpleGrid } from "@chakra-ui/react";
import useGame, { Game } from "../hooks/useGame";
import GameCard from "./GameCard";
import GameCardskelton from "./GameCardskelton";
import GameCardContainer from "./GameCardContainer";
import { Genre } from "../hooks/useGenres";
 
   interface props{
    SelectedGenre: Genre |null
    
   }


function GameGrid({SelectedGenre}:props) {
    const {     data,error, isLoding  } = useGame(SelectedGenre);

    const skeletons = [1, 2, 3, 4, 5, 6];

    return (
        <div>
            {error && <p>{error}</p>}
            <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 5 }} spacing={10} padding={10}>
                {isLoding && skeletons.map((skeleton) => (
                    <GameCardContainer>
                        <GameCardskelton key={skeleton} />
                    </GameCardContainer>
                ))}
                {data.map((game: Game) => (
                    <GameCardContainer key={game.id}>
                        <GameCard game={game} />
                    </GameCardContainer>

                ))}
            </SimpleGrid>
        </div>
    );
}

export default GameGrid;
