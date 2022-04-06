import React from "react";
import styled from "styled-components";
import img1 from "../assets/customers/customer-1.jpg";
import img2 from "../assets/customers/customer-2.jpg";
import img3 from "../assets/customers/customer-3.jpg";
import img4 from "../assets/customers/customer-4.jpg";
import img5 from "../assets/customers/customer-5.jpg";
import img6 from "../assets/customers/customer-6.jpg";
import img7 from "../assets/hero.png";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 9.6rem;
`;

const LeftSide = styled.div`
  padding: 9.6rem 0;
`;

const Title = styled.h1`
  font-size: 5.6rem;
  font-weight: 900;
  letter-spacing: -0.5px;
`;

const Text = styled.p`
  font-size: 2rem;
  margin: 3rem 0;
  line-height: 1.5;
`;

const ButtonBox = styled.div`
  margin: 4rem 0 9rem;
  display: flex;
  align-items: center;
`;

const Button = styled.button`
  border-radius: 9px;
  padding: 1.4rem 2rem;
  color: #fff;
  background-color: #e67e22;
  display: inline-block;
  font-size: 2rem;
  border: none;
  font-weight: 800;
  transition: all 0.3s ease-in;

  &:hover {
    background-color: red;
  }
`;

const RightButton = styled(Button)`
  background-color: #fff;
  color: #000;
  margin-left: 3rem;

  &:hover {
    background-color: #eee;
  }
`;

const FaceImg = styled.img`
  width: 4.8rem;
  height: 4.8rem;
  border-radius: 50%;
  border: 3px solid #fff;
  margin-right: -1.3rem;
`;

const RightSide = styled.div`
  padding: 9.6rem 0;
`;

const ImgGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ImgBox = styled.div``;

const Image = styled.img`
  width: 100%;
  height: 100%;
`;

const ParaGraph = styled.p`
  margin-left: 3rem;
  font-size: 2rem;
  font-weight: 700;
`;

const ParaNumber = styled.span`
  color: #cf711f;
  font-weight: 700;
`;

const Hero = () => {
  return (
    <Container>
      <LeftSide>
        <Title>A healthy meal delivered to your door, every single day</Title>
        <Text>
          The smart 365-days-per-year food subscription that will make you eat
          healthy again. Tailored to your personal tastes and nutritional needs.
        </Text>
        <ButtonBox>
          <Button>Start eating well</Button>
          <RightButton>Learn more &darr;</RightButton>
        </ButtonBox>
        <ImgGroup>
          <ImgBox>
            <FaceImg src={img1}></FaceImg>
            <FaceImg src={img2}></FaceImg>
            <FaceImg src={img3}></FaceImg>
            <FaceImg src={img4}></FaceImg>
            <FaceImg src={img5}></FaceImg>
            <FaceImg src={img6}></FaceImg>
          </ImgBox>
          <ParaGraph>
            <ParaNumber>250,000+</ParaNumber> meals delivered last year!
          </ParaGraph>
        </ImgGroup>
      </LeftSide>

      <RightSide>
        <ImgBox>
          <Image src={img7}></Image>
        </ImgBox>
      </RightSide>
    </Container>
  );
};

export default Hero;
