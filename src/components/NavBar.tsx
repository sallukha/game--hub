import { HStack, Img, Button, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import logo from "../assets/logo.webp";
import ColorModeswitch from "./ColorModeswitch";

const NavBar = () => {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Img src={logo} boxSize={"60px"} />
      <HStack spacing={4}>
        
        <Link as={RouterLink} to="/login">
          <Button variant="outline" colorScheme="teal">
            Login
          </Button>
        </Link>
        <Link as={RouterLink} to="/signup">
          <Button colorScheme="teal">Sign Up</Button>
        </Link>
        <ColorModeswitch />
      </HStack>
    </HStack>
  );
};

export default NavBar;
