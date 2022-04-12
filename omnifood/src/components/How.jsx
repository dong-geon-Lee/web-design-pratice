import React from "react";
import styled from "styled-components";
import img1 from "../img/app/app-screen-1.png";
import img2 from "../img/app/app-screen-2.png";
import img3 from "../img/app/app-screen-3.png";

const Container = styled.section`
  padding: 9.6rem 0;
`;

const TitleBox = styled.div`
  max-width: 120rem;
  padding: 0rem 3.2rem;
  margin: 0 auto;
`;

const Span = styled.span`
  display: block;
  font-size: 1.6rem;
  font-weight: 500;
  color: #cf711f;
  text-transform: uppercase;
  margin-bottom: 1.6rem;
  letter-spacing: 0.75px;
`;

const Title = styled.h2`
  font-size: 4.4rem;
  font-weight: 700;
  color: #333;
  letter-spacing: -0.5px;
  line-height: 1.2;
  margin-bottom: 9.6rem;
`;

const Wrapper = styled(TitleBox)`
  column-gap: 6.4rem;
  row-gap: 9.6rem;
  align-items: center;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

const StepBox = styled.div``;

const StepText = styled.p`
  font-size: 8.6rem;
  font-weight: 600;
  color: #ddd;
  margin-bottom: 1.2rem;
`;

const StepTitle = styled.h3`
  font-size: 3rem;
  font-weight: 700;
  letter-spacing: -0.5px;
  line-height: 1.2;
  margin-bottom: 3.2rem;
  color: #333;
`;

const StepDesc = styled.p`
  font-size: 1.8rem;
  line-height: 1.8;
`;

const ImgBox = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  &::before {
    width: 60%;
    padding-bottom: 60%;
    background-color: #fdf2e9;
    z-index: -2;
  }

  &::after {
    width: 45%;
    padding-bottom: 45%;
    background-color: #fae5d3;
    z-index: -1;
  }

  &::before,
  &::after {
    content: "";
    display: block;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

const Image = styled.img`
  width: 35%;
`;

const How = () => {
  return (
    <Container>
      <TitleBox>
        <Span>How it works</Span>
        <Title>Your daily does of health in 3 simple steps</Title>
      </TitleBox>

      <Wrapper>
        <StepBox>
          <StepText>01</StepText>
          <StepTitle>Tell us what you like (and what not)</StepTitle>
          <StepDesc>
            Never again waste time thinking about what to eat! Omnifood AI will
            create a 100% personalized weekly meal plan just for you. It makes
            sure you get all the nutrients and vitamins you need, no matter what
            diet you follow!
          </StepDesc>
        </StepBox>
        <ImgBox>
          <Image
            src={img1}
            alt="iPhone app preferences selection screen"
          ></Image>
        </ImgBox>

        <ImgBox>
          <Image
            src={img2}
            alt="iPhone app preferences selection screen"
          ></Image>
        </ImgBox>
        <StepBox>
          <StepText>02</StepText>
          <StepTitle>Tell us what you like (and what not)</StepTitle>
          <StepDesc>
            Never again waste time thinking about what to eat! Omnifood AI will
            create a 100% personalized weekly meal plan just for you. It makes
            sure you get all the nutrients and vitamins you need, no matter what
            diet you follow!
          </StepDesc>
        </StepBox>

        <StepBox>
          <StepText>03</StepText>
          <StepTitle>Tell us what you like (and what not)</StepTitle>
          <StepDesc>
            Never again waste time thinking about what to eat! Omnifood AI will
            create a 100% personalized weekly meal plan just for you. It makes
            sure you get all the nutrients and vitamins you need, no matter what
            diet you follow!
          </StepDesc>
        </StepBox>
        <ImgBox>
          <Image
            src={img3}
            alt="iPhone app preferences selection screen"
          ></Image>
        </ImgBox>
      </Wrapper>
    </Container>
  );
};

export default How;
