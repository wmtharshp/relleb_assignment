import "./App.css";
import Watches from "./components/watchesList";
import Search from "./components/search";
import styled from "styled-components";
import { useState } from "react";

export const Container = styled.div`
  margin:auto;
  width:90%;
  margin-top:10px
`

function App() {
  const [watches, setWatches] = useState([]);
  return (
    <Container>
      <Search setWatches={setWatches} watches={watches} />
      <Watches setWatches={setWatches} watches={watches} />
    </Container>
  );
}

export default App;
