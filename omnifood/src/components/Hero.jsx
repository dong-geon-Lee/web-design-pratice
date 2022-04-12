import React from "react";
import styled from "styled-components";
import { customers } from "../img/userData";
import heroImg from "../img/hero.png";

const Container = styled.div``;

const Wrapper = styled.section`
  background-color: #fdf2e9;
  padding: 4.8rem 0rem 9.6rem 0rem;
`;

const HeroSection = styled.div`
  max-width: 130rem;
  margin: 0 auto;
  padding: 0 3.2rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 9.6rem;
  align-items: center;
`;

const TextBox = styled.div``;

const Title = styled.h1`
  font-size: 5.2rem;
  font-weight: 700;
  color: #333;
  letter-spacing: -0.5px;
  line-height: 1.05;
  margin-bottom: 3.2rem;
`;

const Text = styled.p`
  font-size: 2rem;
  line-height: 1.6;
  margin-bottom: 4.8rem;
`;

const Link = styled.a`
  display: inline-block;
  text-decoration: none;
  font-size: 2rem;
  font-weight: 600;
  padding: 1.6rem 3.2rem;
  border-radius: 9px;
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;
  font-family: inherit;
  color: #fff;
  background-color: #e67e22;
  margin-right: 1.6rem;

  &:hover,
  &:active {
    background-color: red;
  }

  & + a {
    background-color: #fff;
    color: #555;

    &:hover,
    &:active {
      background-color: #fdf2e9;
      box-shadow: inset 0 0 0 3px #fff;
    }
  }
`;

const InfoGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;
  margin-top: 8rem;
`;

const ImgBox = styled.div`
  display: flex;
`;

const Image = styled.img`
  width: 4.8rem;
  height: 4.8rem;
  border-radius: 50%;
  margin-right: -1.6rem;
  border: 3px solid #fdf2e9;

  &:last-child {
    margin: 0;
  }
`;

const DetailText = styled.p`
  font-size: 1.8rem;
  font-weight: 600;
`;

const Span = styled.span`
  color: #cf711f;
  font-weight: 700;
`;

const HeroImgBox = styled.div``;

const HeroImg = styled.img`
  width: 100%;
`;

const Hero = () => {
  return (
    <Container>
      <Wrapper>
        <HeroSection>
          <TextBox>
            <Title>
              A healthy meal delivered to your door, every single day
            </Title>
            <Text>
              The smart 365-days-per-year food subscription that will make you
              eat healthy again. Tailored to your personal tastes and
              nutritional needs.
            </Text>
            <Link href="#cta">Start eating well</Link>
            <Link href="#how">Learn more &darr; </Link>

            <InfoGroup>
              <ImgBox>
                {customers.map((user) => (
                  <Image src={user.img} alt={user.alt} key={user.id}></Image>
                ))}
              </ImgBox>
              <DetailText>
                <Span>250,000+</Span> meals delivered last year!
              </DetailText>
            </InfoGroup>
          </TextBox>

          <HeroImgBox>
            <HeroImg
              src={heroImg}
              alt="Woman enjoying food, meals in storage container, and food bowls on a table"
            ></HeroImg>
          </HeroImgBox>
        </HeroSection>
      </Wrapper>
    </Container>
  );
};

export default Hero;
