import React from "react";
import styled from "styled-components";
import { gallerys } from "../img/galleryData";
import { testiMonials } from "../img/testimonialData";

const Container = styled.section`
  background-color: #fdf2e9;
  display: grid;
  grid-template-columns: 55fr 45fr;
  align-items: center;
`;

const UserGroup = styled.div`
  padding: 9.6rem;
`;

const UserText = styled.span`
  display: block;
  font-size: 1.6rem;
  font-weight: 500;
  color: #cf711f;
  text-transform: uppercase;
  margin-bottom: 1.6rem;
  letter-spacing: 0.75px;
`;

const UserTitle = styled.h2`
  font-size: 4.4rem;
  font-weight: 700;
  color: #333;
  letter-spacing: -0.5px;
  line-height: 1.2;
  margin-bottom: 9.6rem;
`;

const UserInfo = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  row-gap: 4.8rem;
  column-gap: 8rem;
`;

const UserBox = styled.figure``;

const UserImg = styled.img`
  width: 6.4rem;
  border-radius: 50%;
  margin-bottom: 1.2rem;
`;

const TextQuote = styled.blockquote`
  font-size: 1.8rem;
  line-height: 1.8;
  margin-bottom: 1.6rem;
`;

const ParaGrape = styled.p`
  font-size: 1.6rem;
  color: #6f6f6f;
`;

const GalleryGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.6rem;
  padding: 1.6rem;
`;

const GalleryBox = styled.div`
  overflow: hidden;
`;

const GalleryImg = styled.img`
  display: block;
  width: 100%;
  transition: all 0.4s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

const Testimonials = () => {
  return (
    <Container>
      <UserGroup>
        <UserText>Testimonials</UserText>
        <UserTitle>Once you try it, you can't go back</UserTitle>

        <UserInfo>
          {testiMonials.map((user) => (
            <UserBox key={user.id}>
              <UserImg src={user.img} alt={user.alt}></UserImg>
              <TextQuote>{user.quote}</TextQuote>
              <ParaGrape>&mdash; {user.text}</ParaGrape>
            </UserBox>
          ))}
        </UserInfo>
      </UserGroup>

      <GalleryGroup>
        {gallerys.map((gallery) => (
          <GalleryBox key={gallery.id}>
            <GalleryImg src={gallery.img} alt={gallery.alt}></GalleryImg>
          </GalleryBox>
        ))}
      </GalleryGroup>
    </Container>
  );
};

export default Testimonials;
