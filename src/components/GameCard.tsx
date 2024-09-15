import { Card, CardBody, Heading, HStack, Image } from "@chakra-ui/react"
import { Game } from "../hooks/useGame"
import PlateFormIconlist from "./PlateFormIconlist"
import CricTicScore from "./CricTicScore"
interface props {
    game: Game


}
const GameCard = ({ game }: props) => {
    return (
        <Card borderRadius={10} overflow={"hidden"} >
            <Image src={game.background_image} />
            <CardBody>
                <Heading fontSize='2xl'>{game.name}</Heading>
                <HStack justifyContent="space-between">
                    <PlateFormIconlist platforms={game.parent_platforms.map(p => p.platform)} />
                    <CricTicScore score={game.metacritic} />
                </HStack>

            </CardBody>
        </Card>
    )
}

export default GameCard
