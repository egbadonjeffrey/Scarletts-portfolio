import React from "react";
import Footer from "./Footer";
import styled from "styled-components";

const PreviewLayout = (props) => {
  return (
    <Container>
      {props.children}
      <Footer />
    </Container>
  );
};

export default PreviewLayout;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
