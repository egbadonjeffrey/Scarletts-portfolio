import React from "react";
import styled from "styled-components";
import About from "../components/About";
import Contact from "../components/Contact";
import Intro from "../components/Intro";
import TransitionEffect from "../components/TransitionEffect";
import Works from "../components/Works";

const Home = () => {
  return (
    <>
      <TransitionEffect />
      <Container>
        <Intro />
        <About />
        <Works />
        <Contact />
      </Container>
    </>
  );
};

export default Home;

const Container = styled.div`
  width: 100%;
`;
