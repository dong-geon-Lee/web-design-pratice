import React from "react";
import styled from "styled-components";
import img from "../img/omnifood-logo.png";

const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fdf2e9;
  height: 9.6rem;
  padding: 0 4.8rem;
  position: relative;
`;

const Atag = styled.a``;

const Logo = styled.img`
  height: 2.2rem;
`;

const Nav = styled.nav``;

const List = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  gap: 4.8rem;
`;

const Items = styled.li`
  &:last-child a {
    background-color: #e67e22;
    color: #fff;
    border-radius: 9px;
    padding: 1.2rem 2.4rem;

    &:active,
    &:hover {
      background-color: #cf711f;
      cursor: pointer;
    }
  }
`;

const Link = styled.a`
  display: inline-block;
  text-decoration: none;
  font-size: 1.8rem;
  font-weight: 500;
  color: #333;
  transition: all 0.3s ease;

  &:active,
  &:hover {
    color: #cf711f;
    cursor: pointer;
  }
`;

const Header = () => {
  return (
    <Container>
      <Atag href="#">
        <Logo src={img}></Logo>
      </Atag>

      <Nav>
        <List>
          <Items>
            <Link>How it works</Link>
          </Items>
          <Items>
            <Link>Meals</Link>
          </Items>
          <Items>
            <Link>Testimonials</Link>
          </Items>
          <Items>
            <Link>Pricing</Link>
          </Items>
          <Items>
            <Link>Try for free</Link>
          </Items>
        </List>
      </Nav>
    </Container>
  );
};

export default Header;
