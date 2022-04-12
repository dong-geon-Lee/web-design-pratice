import React from "react";
import styled from "styled-components";
import { logos } from "../img/logoData";

const Container = styled.section`
  padding: 4.8rem 0rem 3.2rem 0rem;
`;

const Wrapper = styled.div`
  max-width: 120rem;
  padding: 0rem 3.2rem;
  margin: 0 auto;
`;

const Title = styled.h2`
  font-size: 1.4rem;
  text-transform: uppercase;
  letter-spacing: 0.75px;
  font-weight: 500;
  text-align: center;
  margin-bottom: 2.4rem;
  color: #888;
`;

const ImgBox = styled.div`
  display: flex;
  justify-content: space-around;
`;

const Image = styled.img`
  height: 3.2rem;
  filter: brightness(0);
  opacity: 0.5;
`;

const Featured = () => {
  return (
    <Container>
      <Wrapper>
        <Title>As featured in</Title>
        <ImgBox>
          {logos.map((logo) => (
            <Image src={logo.img} alt={logo.alt} key={logo.id}></Image>
          ))}
        </ImgBox>
      </Wrapper>
    </Container>
  );
};

export default Featured;
