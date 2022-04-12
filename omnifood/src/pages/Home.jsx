import React from "react";
import Featured from "../components/Featured";
import Header from "../components/Header";
import Hero from "../components/Hero";
import How from "../components/How";
import Meals from "../components/Meals";
import Pricing from "../components/Pricing";
import Testimonials from "../components/Testimonials";

const Home = () => {
  return (
    <>
      <Header></Header>
      <Hero></Hero>
      <Featured></Featured>
      <How></How>
      <Meals></Meals>
      <Testimonials></Testimonials>
      <Pricing></Pricing>
    </>
  );
};

export default Home;
