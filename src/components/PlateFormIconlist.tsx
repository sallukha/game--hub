import { platform } from "../hooks/useGame"
import { Text } from "@chakra-ui/react"
interface props {
    platforms: platform[]


}
const PlateFormIconlist = ({ platforms }: props) => {
    return (
        <div>
            {platforms.map((platform) => <Text>{platform.name}</Text>)}
        </div>
    )
}

export default PlateFormIconlist
