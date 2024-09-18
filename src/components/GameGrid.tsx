import { SimpleGrid } from "@chakra-ui/react";
import useGame from "../hooks/useGame";
import GameCard from "./GameCard";
import GameCardskelton from "./GameCardskelton";

const GameGrid = () => {
    const { games, error, isLoding } = useGame();

    const skeleton = [1, 2, 3, 4, 5, 6]
    return (
        <div>
            {error && <p>{error}</p>}
            <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 5 }} spacing={10} padding={10}>
                {isLoding && skeleton.map(skeleton => <GameCardskelton key={skeleton} />)}
                {games.map((game) => (
                    <GameCard key={game.id} game={game} />
                ))}
            </SimpleGrid>
        </div>
    );
};

export default GameGrid;
