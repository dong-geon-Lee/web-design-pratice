import React from "react";
import Home from "./pages/Home";
import styled from "styled-components";

const Container = styled.div`
  background-color: #fdf2e9;
`;

const App = () => {
  return (
    <Container>
      <Home></Home>
    </Container>
  );
};

export default App;
