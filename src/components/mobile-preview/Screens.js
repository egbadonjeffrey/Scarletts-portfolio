import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

const Screens = ({ ScreensMocks }) => {
  console.log(ScreensMocks[0].title);

  return (
    <Container>
      <DivTitle>SCREENS</DivTitle>
      <DivContainer>
        {ScreensMocks.map((i, index) => (
          <Div>
            <H1>{i.title}</H1>
            <Img
              key={index}
              src={i.image}
              alt="phone models"
              initial={{ opacity: 0, translateY: 0 }}
              whileInView={{ opacity: 1, translateY: 30 }}
              viewport={{ once: true }}
              transition={{
                delay: index > 7 ? index * 0.2 : index * 0.3,
                duration: 0.3,
              }}
            />
          </Div>
        ))}
      </DivContainer>
    </Container>
  );
};

export default Screens;

const Container = styled.div`
  width: 90%;
  background: ${({ theme }) => theme.themeControllerBackground};
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;
  border-bottom-left-radius: 50px;
  border-bottom-right-radius: 50px;
  padding: 3rem;

  @media (max-width: 800px) {
    width: 90%;
    margin: 0 auto;
    padding: 1rem;
  }
`;

const DivTitle = styled.h1`
  color: ${({ theme }) => theme.lightShade};
  font-size: 3rem;
  text-align: center;

  @media (max-width: 800px) {
    font-size: 2.5rem;
  }
`;

const DivContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 4rem;
  width: 90%;
  margin: 4rem auto;

  @media (max-width: 800px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 600px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
    width: 60%;
  }
`;

const Div = styled.div`div
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`;

const H1 = styled.h1`
  font-size: 1.3rem;
  font-weight: 600;
  margin: 0;
  margin-top: 2rem;
  margin-bottom: -1rem;
`;

const Img = styled(motion.img)`
  max-height: 500px;

  @media (max-width: 1024px) {
    max-height: 400px;
  }
`;
