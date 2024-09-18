import { CardBody, Skeleton, Card, SkeletonText } from "@chakra-ui/react"



const GameCardskelton = () => {
    return (
        <Card  >

            <Skeleton height="200px" />
            <CardBody>
                <SkeletonText />
            </CardBody>
        </Card>
    )
}

export default GameCardskelton
