import { Badge } from "@chakra-ui/react";

interface Props {
    score: number;
}

const CricTicScore = ({ score }: Props) => {
     
    let colorScheme = score > 75 ? "green" : score > 60 ? "yellow" : "red";

    return (
        <Badge
            colorScheme={colorScheme}
            fontSize="16px"
            paddingX={3}
            borderRadius={5}
        >
            {score}
        </Badge>
    );
};

export default CricTicScore;
