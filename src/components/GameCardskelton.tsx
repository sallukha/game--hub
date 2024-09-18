import { CardBody, Skeleton, Card, SkeletonText } from "@chakra-ui/react"



const GameCardskelton = () => {
    return (
        <Card width="200px"    borderRadius={10} overflow="hidden" >

            <Skeleton height="200px" />
            <CardBody>
                <SkeletonText />
            </CardBody>
        </Card>
    )
}

export default GameCardskelton
