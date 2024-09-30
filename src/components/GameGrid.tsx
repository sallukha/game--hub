import { SimpleGrid } from "@chakra-ui/react";
import useGame from "../hooks/useGame";
import GameCard from "./GameCard";
import GameCardskelton from "./GameCardskelton";
import GameCardContainer from "./GameCardContainer";
import { Gerne } from "../hooks/useGenres";
interface props{
    setSelectGenre:Gerne|null
}
const GameGrid = ({setSelectGenre}:props) => {
    const { games, error, isLoding } = useGame(setSelectGenre);

    const skeletons = [1, 2, 3, 4, 5, 6];

    return (
        <div>
            {error && <p>{error}</p>}
            <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 5 }} spacing={10} padding={10}>
                {isLoding && skeletons.map((skeleton) => (
                    <GameCardContainer >
                        <GameCardskelton key={skeleton} />
                    </GameCardContainer>
                ))}
                {games.map((game) => (
                    <GameCardContainer key={game.id}>
                        <GameCard game={game} />
                    </GameCardContainer>

                ))}
            </SimpleGrid>
        </div>
    );
};

export default GameGrid;
