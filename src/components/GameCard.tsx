import { Card, CardBody, Heading, Image } from "@chakra-ui/react"
import { Game } from "../hooks/useGame" 
import { Text } from "@chakra-ui/react"
interface props {
    game: Game


}
const GameCard = ({ game }: props) => { 
    return (
        <Card borderRadius={10} overflow={"hidden"} >
            <Image src={game.background_image} />
            <CardBody>
                <Heading fontSize='2xl'>{game.name}</Heading>

                { game.parent_platforms.map(({platform})=><Text>{platform.name}</Text>)}
            </CardBody>
        </Card>
    )
}

export default GameCard
