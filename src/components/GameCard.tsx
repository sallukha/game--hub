import { Card, CardBody, Heading, Image } from "@chakra-ui/react"
import { Game } from "../hooks/useGame"
import PlateFormIconlist from "./PlateFormIconlist"
interface props {
    game: Game


}
const GameCard = ({ game }: props) => {
    return (
        <Card borderRadius={10} overflow={"hidden"} >
            <Image src={game.background_image} />
            <CardBody>
                <Heading fontSize='2xl'>{game.name}</Heading>

                <PlateFormIconlist platforms={game.parent_platforms.map(p => p.platform)} />
            </CardBody>
        </Card>
    )
}

export default GameCard
