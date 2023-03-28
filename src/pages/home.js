import React from "react";
import styled from "styled-components";
import About from "../components/About";
import Contact from "../components/Contact";
import Intro from "../components/Intro";
import Works from "../components/Works";

const Home = () => {
  return (
    <Container>
      <Intro />
      <About />
      <Works />
      <Contact />
    </Container>
  );
};

export default Home;

const Container = styled.div`
  width: 100%;
`;
