import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <Container>
      <div>Built By Egbadon Jeffrey</div>
      <div> &copy; 2023 </div>
    </Container>
  );
};

export default Footer;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.mediumText};
  padding: 1rem;
`;
