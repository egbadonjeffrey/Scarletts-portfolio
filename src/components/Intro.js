import React from "react";
import styled from "styled-components";

const Intro = () => {
  return (
    <Container>
      <Span>Hi, my name is</Span>

      <DescriptionContainer>
        <TitleContainer>
          <Name>Egbadon Jeffrey.</Name>
          <Title2>I build things for the web.</Title2>
        </TitleContainer>

        <Description>
          I am an experienced Web developer specializing in frontend
          development. I have delivered successful projects with ReactJS, with a
          focus on quality and efficiency. I am committed to staying current
          with industry advancements.
        </Description>

        <a href="https://thescarlettcoder.github.io/resume/" target="blank">
          <Button>Check out my Resume</Button>
        </a>
      </DescriptionContainer>
    </Container>
  );
};

export default Intro;

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 70%;
  margin: 0 auto;
  font-family: inherit;

  @media (max-width: 500px) {
    width: 80%;
  }
`;

const Span = styled.span`
  width: 80%;
  font-family: inherit;
  font-size: 18px;
  color: ${({ theme }) => theme.lightShade};
  margin-bottom: 1rem;
  transition: all 300ms ease;

  @media screen and (min-width: 2000px) {
    font-size: 30px;
  }
`;

const DescriptionContainer = styled.div`
  font-family: inherit;
`;

const TitleContainer = styled.div`
  font-weight: 400;
`;

const Name = styled.h1`
  font-size: 5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.darkShade};
  margin: 0;

  @media screen and (min-width: 2000px) {
    font-size: 7rem;
  }

  @media screen and (min-width: 1300px) and (max-width: 1999px) {
    font-size: 3.5rem;
  }

  @media screen and (min-width: 700px) and (max-width: 1299px) {
    font-size: 3.5rem;
  }

  @media (max-width: 600px) {
    font-size: 2.3rem;
  }
`;

const Title2 = styled.h1`
  color: ${({ theme }) => theme.mediumText};
  font-weight: 700;
  font-size: 4rem;
  margin: 0;

  @media screen and (min-width: 2000px) {
    font-size: 6.5rem;
  }

  @media screen and (min-width: 1300px) and (max-width: 1999px) {
    font-size: 4rem;
  }

  @media screen and (min-width: 700px) and (max-width: 1299px) {
    font-size: 3rem;
  }

  @media (max-width: 600px) {
    font-size: 2.3rem;
  }
`;

const Description = styled.p`
  color: ${({ theme }) => theme.mediumText};
  font-size: 16px;
  width: 80%;
  margin-top: 1rem;
  white-space: pre-line;

  @media screen and (min-width: 2000px) {
    font-size: 30px;
    width: 100%;
  }

  @media (max-width: 600px) {
    font-size: 0.9rem;
    width: 100%;
  }
`;

const Button = styled.button`
  font-size: 1rem;
  width: 20%;
  height: 3.5rem;
  margin-top: 1rem;
  border: 1px solid ${({ theme }) => theme.lightShade};
  border-radius: 10px;
  background: transparent;
  color: ${({ theme }) => theme.lightShade};

  &:hover {
    background: ${({ theme }) => theme.hover};
  }

  @media screen and (min-width: 2000px) {
    font-size: 2rem;
    width: 30%;
    height: 5rem;
  }

  @media screen and (min-width: 1300px) and (max-width: 1999px) {
    font-size: 1rem;
  }

  @media screen and (min-width: 700px) and (max-width: 1299px) {
    font-size: 0.9rem;
    width: 30%;
    height: 3rem;
  }

  @media (max-width: 600px) {
    font-size: 1rem;
    width: 70%;
  }
`;
