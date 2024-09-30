import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenralList from "./components/GenralList";
import { useState } from "react";
import {Gerne} from "./hooks/useGenres"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  const[setSelectGenre,setSelectedGenre]=useState<Gerne| null>(null)
  return (
    <Router>
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
            <GenralList onSelectGenre={(genre) => setSelectedGenre(genre)} />
          </GridItem>
        </Show>

        <GridItem area="main">
          {/* Define Routes */}
          <Routes>
            <Route path="/" element={<GameGrid setSelectGenre={setSelectedGenre} />} />
             
          </Routes>
        </GridItem>
      </Grid>
    </Router>
  );
};

export default App;
