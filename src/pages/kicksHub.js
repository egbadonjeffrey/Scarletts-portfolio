import React from "react";
import styled from "styled-components";
import HeaderComponent from "../components/mobile-preview/Header";
import Screens from "../components/mobile-preview/Screens";
import TransitionEffect from "../components/TransitionEffect";
import { ScreensMocks } from "../data";

const KicksHub = () => {
  return (
    <>
      <TransitionEffect />
      <Container>
        <HeaderComponent title="Kicks Hub (Expo)" />
        <Screens ScreensMocks={ScreensMocks} />
      </Container>
    </>
  );
};

export default KicksHub;

const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  height: auto;
`;
