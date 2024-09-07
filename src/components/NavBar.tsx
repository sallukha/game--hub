import { HStack,Img } from "@chakra-ui/react"

  import logo from "../assets/logo.webp"

const NavBar = () => {
  return (
      <HStack>
  
      <Img src={logo} boxSize={"60px"} />


      </HStack>
  
  )
}

export default NavBar
