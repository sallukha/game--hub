import { HStack, Img, } from "@chakra-ui/react";
 
import logo from "../assets/logo.webp";
import ColorModeswitch from "./ColorModeswitch";

const NavBar = () => {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Img src={logo} boxSize={"60px"} />
      <HStack spacing={4}>
        
      
         
        <ColorModeswitch />
      </HStack>
    </HStack>
  );
};

export default NavBar;
