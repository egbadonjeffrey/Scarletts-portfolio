import React from "react";
import styled from "styled-components";
import HeaderComponent from "../components/mobile-preview/Header";
import Screens from "../components/mobile-preview/Screens";
import TransitionEffect from "../components/TransitionEffect";

const TravelGo = () => {
  return (
    <>
      <TransitionEffect />
      <Container>
        <HeaderComponent title="Travel Go (Expo)" />
        <Screens />
      </Container>
    </>
  );
};

export default TravelGo;

const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  height: auto;

  @media (max-width: 800px) {
    width: 90%;
  }
`;
