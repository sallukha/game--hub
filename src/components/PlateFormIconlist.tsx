import { platform } from "../hooks/useGame"
import { FaWindows, FaApple, FaLinux, FaPlaystation, FaAndroid, FaXbox } from "react-icons/fa"
import { MdPhoneIphone } from "react-icons/md"
import { SiNintendo } from "react-icons/si"
import { BsGlobe } from "react-icons/bs"
import { IconType } from "react-icons"
import { Icon } from "@chakra-ui/react"
import { HStack } from "@chakra-ui/react"

interface props {
    platforms: platform[]
}

const PlateFormIconlist = ({ platforms }: props) => {


    const IconMap: { [key: string]: IconType } = {
        pc: FaWindows,
        playstation: FaPlaystation,
        xbox: FaXbox,
        nintendo: SiNintendo,
        mac: FaApple,
        android: FaAndroid,
        linux: FaLinux,
        ios: MdPhoneIphone,
        web: BsGlobe
    }

    return (
        <HStack marginY={7} >
            {platforms.map((platform) => (
                <Icon key={platform.slug} as={IconMap[platform.slug]} color="gray.500" />
            ))}
        </HStack>
    )
}

export default PlateFormIconlist
