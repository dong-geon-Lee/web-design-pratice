import React from "react";
import styled from "styled-components";
import { FaCheck } from "react-icons/fa";
import { FaNotEqual } from "react-icons/fa";

const Container = styled.section`
  padding: 9.6rem 0;
`;

const HeadlineBox = styled.div`
  max-width: 120rem;
  padding: 0rem 3.2rem;
  margin: 0 auto;
`;

const Title = styled.span`
  display: block;
  font-size: 1.6rem;
  font-weight: 500;
  color: #cf711f;
  text-transform: uppercase;
  margin-bottom: 1.6rem;
  letter-spacing: 0.75px;
`;

const Text = styled.h2`
  font-size: 4.4rem;
  font-weight: 700;
  color: #333;
  letter-spacing: -0.5px;
  line-height: 1.2;
  margin-bottom: 9.6rem;
`;

const PriceGroup = styled.div`
  max-width: 120rem;
  padding: 0rem 3.2rem;
  margin: 0 auto;
  display: grid;
  column-gap: 6.4rem;
  row-gap: 9.6rem;
  grid-template-columns: repeat(2, 1fr);
  margin-bottom: 4.8rem;
`;

const Wrapper = styled.div`
  border-radius: 11px;
  width: 75%;
  justify-self: end;
  border: 2px solid #fdf2e9;
  padding: 4.6rem;

  & + div {
    background-color: #fdf2e9;
    padding: 4.8rem;
    position: relative;
    overflow: hidden;
    justify-self: start;
  }
`;

const PriceBox = styled.header`
  text-align: center;
  margin-bottom: 4.8rem;
`;

const PriceName = styled.p`
  color: #cf711f;
  font-weight: 600;
  font-size: 2rem;
  text-transform: uppercase;
  letter-spacing: 0.75;
  margin-bottom: 3.2rem;
`;

const PricePlan = styled.p`
  font-size: 6.2rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 1.6rem;
`;

const PriceText = styled.p`
  font-size: 1.6rem;
  line-height: 1.6;
  color: #6f6f6f;
`;

const PriceSpan = styled.span`
  font-size: 3rem;
  font-weight: 500;
  margin-right: 0.8rem;
`;

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`;

const Items = styled.li`
  font-size: 1.8rem;
  display: flex;
  align-items: center;
  gap: 1.6rem;
  line-height: 1.2;
`;

const Span = styled.span``;

const Strong = styled.strong``;

const BtnBox = styled.div`
  text-align: center;
  margin-top: 4.8rem;
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
  background-color: #e67e22;
  color: #fff;
  margin-right: 1.6rem;
`;

const InfoGroup = styled.div``;

const Pricing = () => {
  return (
    <Container>
      <HeadlineBox>
        <Title>Pricing</Title>
        <Text>Eating well without breaking the bank</Text>
      </HeadlineBox>

      <PriceGroup>
        <Wrapper>
          <PriceBox>
            <PriceName>Starter</PriceName>
            <PricePlan>
              <PriceSpan>$</PriceSpan>399
            </PricePlan>
            <PriceText>per month. That's just $13 per meal!</PriceText>
          </PriceBox>

          <List>
            <Items>
              <FaCheck
                style={{
                  width: "2.4rem",
                  height: "2.4rem",
                  color: "#e67e22",
                }}
              ></FaCheck>
              <Span>1 meal per day</Span>
            </Items>
            <Items>
              <FaCheck
                style={{
                  width: "2.4rem",
                  height: "2.4rem",
                  color: "#e67e22",
                }}
              ></FaCheck>
              <Span>Order from 11am and 9pm</Span>
            </Items>
            <Items>
              <FaCheck
                style={{
                  width: "2.4rem",
                  height: "2.4rem",
                  color: "#e67e22",
                }}
              ></FaCheck>
              <Span>Delivery is free</Span>
            </Items>
            <Items>
              <FaNotEqual
                style={{
                  width: "2.4rem",
                  height: "2.4rem",
                  color: "#e67e22",
                }}
              ></FaNotEqual>
            </Items>
          </List>
          <BtnBox>
            <Link>Start eating well</Link>
          </BtnBox>
        </Wrapper>

        <Wrapper>
          <PriceBox>
            <PriceName>Complete</PriceName>
            <PricePlan>
              <PriceSpan>$</PriceSpan>649
            </PricePlan>
            <PriceText>per month. That's just $11 per meal!</PriceText>
          </PriceBox>

          <List>
            <Items>
              <FaCheck
                style={{
                  width: "2.4rem",
                  height: "2.4rem",
                  color: "#e67e22",
                }}
              ></FaCheck>
              <Span>
                <Strong>2 meals</Strong> per day
              </Span>
            </Items>
            <Items>
              <FaCheck
                style={{
                  width: "2.4rem",
                  height: "2.4rem",
                  color: "#e67e22",
                }}
              ></FaCheck>
              <Span>
                Order <Strong>24/7</Strong>
              </Span>
            </Items>
            <Items>
              <FaCheck
                style={{
                  width: "2.4rem",
                  height: "2.4rem",
                  color: "#e67e22",
                }}
              ></FaCheck>
              <Span>Delivery is free</Span>
            </Items>
            <Items>
              <FaCheck
                style={{
                  width: "2.4rem",
                  height: "2.4rem",
                  color: "#e67e22",
                }}
              ></FaCheck>
              <Span>Get access to latest recipes</Span>
            </Items>
          </List>
          <BtnBox>
            <Link>Start eating well</Link>
          </BtnBox>
        </Wrapper>
      </PriceGroup>
    </Container>
  );
};

export default Pricing;
