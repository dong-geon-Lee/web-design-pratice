import React from "react";
import styled from "styled-components";
import img1 from "../img/meals/meal-1.jpg";
import img2 from "../img/meals/meal-2.jpg";
import { FaApple } from "react-icons/fa";
import { FaGrinStars } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";

const Container = styled.section`
  padding: 9.6rem 0;
`;

const TitleBox = styled.div`
  max-width: 120rem;
  padding: 0rem 3.2rem;
  margin: 0 auto;
  text-align: center;
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

const Title = styled.section`
  font-size: 4.4rem;
  line-height: 1.2;
  margin-bottom: 9.6rem;
`;

const Wrapper = styled.div`
  max-width: 120rem;
  padding: 0rem 3.2rem;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 6.4rem;
  row-gap: 9.6rem;
  margin-bottom: 4.8rem;
`;

const MealGroup = styled.div`
  box-shadow: 0 2.4rem 4.8rem rgba(0, 0, 0, 0.075);
  border-radius: 11px;
  overflow: hidden;
  transition: all 0.4s ease;

  &:hover {
    transform: translateY(-1.2rem);
    box-shadow: 0 3.2rem 6.4rem rgba(0, 0, 0, 0.06);
  }
`;

const Image = styled.img`
  width: 100%;
`;

const MealBox = styled.div`
  padding: 3.2rem 4.8rem 4.8rem 4.8rem;
`;

const Tag = styled.div`
  margin-bottom: 1.2rem;
  display: flex;
  gap: 0.4rem;
`;

const TagText = styled.span`
  display: inline-block;
  padding: 0.4rem 0.8rem;
  font-size: 1.2rem;
  text-transform: uppercase;
  color: #333;
  border-radius: 100px;
  font-weight: 600;
  background-color: #51cf66;

  &:nth-child(2) {
    background-color: #ffd43b;
  }
`;

const TagText2 = styled(TagText)`
  background-color: #94d82d;
`;

const MealText = styled.p`
  font-size: 2.4rem;
  color: #333;
  font-weight: 600;
  margin-bottom: 3.2rem;
`;

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const Items = styled.li`
  font-size: 1.8rem;
  display: flex;
  align-items: center;
  gap: 1.6rem;
`;

const IconText = styled.span``;

const Strong = styled.strong`
  font-weight: 500;
`;

const DietGroup = styled.div``;

const DietTitle = styled.h3`
  font-size: 3rem;
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 3.2rem;
  letter-spacing: -0.5px;
  color: #333;
`;

const DietList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`;

const DietItems = styled.li`
  font-size: 1.8rem;
  display: flex;
  align-items: center;
  gap: 1.6rem;
  line-height: 1.2;

  & svg {
    width: 3rem;
    height: 3rem;
    color: #e67e22;
  }
`;

const DietSpan = styled.span``;

const RecipeBox = styled.div`
  max-width: 120rem;
  padding: 0rem 3.2rem;
  margin: 0 auto;
  text-align: center;
  font-size: 1.8rem;
`;

const RecipeLink = styled.a`
  display: inline-block;
  color: #e67e22;
  text-decoration: none;
  border-bottom: 1px solid currentColor;
  padding-bottom: 0.2rem;
  transition: all 0.3s ease;

  &:hover,
  &:active {
    color: #cf711f;
    border-bottom: 1px solid transparent;
  }
`;

const Meals = () => {
  return (
    <Container>
      <TitleBox>
        <Span>Meals</Span>
        <Title>Omnifood AI chooses from 5,000+ recipes</Title>
      </TitleBox>

      <Wrapper>
        <MealGroup>
          <Image src={img1} alt="Japanese Gyozas"></Image>

          <MealBox>
            <Tag>
              <TagText>Vegetarian</TagText>
            </Tag>

            <MealText>Japanese Gyozas</MealText>

            <List>
              <Items>
                <FaApple
                  style={{
                    width: "2.4rem",
                    height: "2.4rem",
                    color: "#e67e22",
                  }}
                ></FaApple>
                <IconText>
                  <Strong>650</Strong> calories
                </IconText>
              </Items>

              <Items>
                <FaGrinStars
                  style={{
                    width: "2.4rem",
                    height: "2.4rem",
                    color: "#e67e22",
                  }}
                ></FaGrinStars>
                <IconText>
                  NutriScore &reg; <Strong>74</Strong>
                </IconText>
              </Items>

              <Items>
                <FaStar
                  style={{
                    width: "2.4rem",
                    height: "2.4rem",
                    color: "#e67e22",
                  }}
                ></FaStar>
                <IconText>
                  <Strong>4.9</Strong> rating (537)
                </IconText>
              </Items>
            </List>
          </MealBox>
        </MealGroup>

        <MealGroup>
          <Image src={img2} alt="Avocado Salad"></Image>

          <MealBox>
            <Tag>
              <TagText2>Vegan</TagText2>
              <TagText>Paleo</TagText>
            </Tag>
            <MealText>Avocado Salad</MealText>

            <List>
              <Items>
                <FaApple
                  style={{
                    width: "2.4rem",
                    height: "2.4rem",
                    color: "#e67e22",
                  }}
                ></FaApple>
                <IconText>
                  <Strong>400</Strong> calories
                </IconText>
              </Items>

              <Items>
                <FaGrinStars
                  style={{
                    width: "2.4rem",
                    height: "2.4rem",
                    color: "#e67e22",
                  }}
                ></FaGrinStars>
                <IconText>
                  NutriScore &reg; <Strong>92</Strong>
                </IconText>
              </Items>

              <Items>
                <FaStar
                  style={{
                    width: "2.4rem",
                    height: "2.4rem",
                    color: "#e67e22",
                  }}
                ></FaStar>
                <IconText>
                  <Strong>4.8</Strong> rating (441)
                </IconText>
              </Items>
            </List>
          </MealBox>
        </MealGroup>

        <DietGroup>
          <DietTitle>Works with any diet:</DietTitle>

          <DietList>
            <DietItems>
              <FaCheck></FaCheck>
              <DietSpan>Vegetarian</DietSpan>
            </DietItems>

            <DietItems>
              <FaCheck></FaCheck>
              <DietSpan>Vegan</DietSpan>
            </DietItems>

            <DietItems>
              <FaCheck></FaCheck>
              <DietSpan>Pescatarian</DietSpan>
            </DietItems>

            <DietItems>
              <FaCheck></FaCheck>
              <DietSpan>Gluten-free</DietSpan>
            </DietItems>

            <DietItems>
              <FaCheck></FaCheck>
              <DietSpan>Lactose-free</DietSpan>
            </DietItems>

            <DietItems>
              <FaCheck></FaCheck>
              <DietSpan>Keto</DietSpan>
            </DietItems>

            <DietItems>
              <FaCheck></FaCheck>
              <DietSpan>Paleo</DietSpan>
            </DietItems>

            <DietItems>
              <FaCheck></FaCheck>
              <DietSpan>Low FODMAP</DietSpan>
            </DietItems>

            <DietItems>
              <FaCheck></FaCheck>
              <DietSpan>Kid-friendly</DietSpan>
            </DietItems>
          </DietList>
        </DietGroup>
      </Wrapper>

      <RecipeBox>
        <RecipeLink>See all recipes &rarr;</RecipeLink>
      </RecipeBox>
    </Container>
  );
};

export default Meals;
