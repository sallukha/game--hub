import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenralList from "./components/GenralList";

const App = () => {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}  >
          <GenralList/>
        </GridItem>
      </Show>

      <GridItem area="main"  >
        <GameGrid />

      </GridItem>
    </Grid>
  );
};

export default App;
