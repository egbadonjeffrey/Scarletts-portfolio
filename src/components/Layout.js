import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import styled from "styled-components";

const Layout = (props) => {
  return (
    <Container>
      <Navbar />
      {props.children}
      <Footer />
    </Container>
  );
};

export default Layout;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
