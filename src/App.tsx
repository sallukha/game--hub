import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenralList from "./components/GenralList";
import {  useState } from "react";
import {Genre} from "./hooks/useGenres"
 

const App = () => {
  const[  SelectedGenre,  setSelectedGenre]=useState<Genre| null>(null)
  return (
    
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
      >
        <GridItem area="nav">
          <NavBar />
        </GridItem>

        <Show above="lg">
          <GridItem area="aside" paddingX={5}>
            <GenralList onSelectGerne={(genre) => setSelectedGenre(genre)} />
          </GridItem>
        </Show>

        <GridItem area="main">
        
           <GameGrid  SelectedGenre={SelectedGenre}/>
             
         
        </GridItem>
      </Grid>
    
  );
};

export default App;
