import React from "react";
import Hero from "../components/Hero";
import styled from "styled-components";

const Container = styled.div`
  margin: 0 auto;
  max-width: 130rem;
  padding: 9.6rem 0;
`;

const Home = () => {
  return (
    <Container>
      <Hero></Hero>
    </Container>
  );
};

export default Home;
