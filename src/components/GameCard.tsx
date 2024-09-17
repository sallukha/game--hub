import { Card, CardBody, Heading, HStack, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGame";
import PlateFormIconlist from "./PlateFormIconlist";
import CricTicScore from "./CricTicScore";
import getCroppedImageUrl from "../service/Image-url"; // Corrected the function name

interface Props {
    game: Game; 
}

const GameCard = ({ game }: Props) => {
    return (
        <Card borderRadius={10} overflow="hidden">
            <Image
                src={getCroppedImageUrl(game.background_image) || "fallback_image_url"}
                alt={game.name}
            />

            <CardBody>
                <Heading fontSize="2xl">{game.name}</Heading>
                <HStack justifyContent="space-between">
                    <PlateFormIconlist platforms={game.parent_platforms.map(p => p.platform)} />
                    <CricTicScore score={game.metacritic} />
                </HStack>
            </CardBody>
        </Card>
    );
};

export default GameCard;
