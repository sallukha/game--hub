import { SimpleGrid } from "@chakra-ui/react";
import useGame from "../hooks/useGame";
import GameCard from "./GameCard"; 

const GameGrid = () => {
    const { games, error } = useGame();

    return (
        <div>
            {error && <p>{error}</p>}
            <SimpleGrid columns={{  sm:1,  md: 2,  lg:3 ,   xl:5 }} spacing={10} padding={10}>
                {games.map((game) => (
                    <GameCard key={game.id} game={game} />  
                ))}
            </SimpleGrid>
        </div>
    );
};

export default GameGrid;
