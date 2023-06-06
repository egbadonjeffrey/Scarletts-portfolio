import { motion } from "framer-motion";
import React, { useState } from "react";
import styled from "styled-components";
import picture from "../image/jeffrey.jpg";

const About = () => {
  const [hover, setHover] = useState(false);
  return (
    <Container
      id="about"
      initial={{ opacity: 0, y: 0 }}
      whileInView={{ opacity: 1, y: -10 }}
      duration={0.3}
      transition={{ delay: 0.5, duration: 0.5 }}
      viewport={{ once: true }}
    >
      <DescriptionContainer>
        <SectionTitle>
          <Span>01.</Span>
          <AboutTitle> About Me</AboutTitle>
        </SectionTitle>

        <Paragraph>
          Hello! My name is Jeffrey and I enjoying creating things that live on
          the internet. My interest in web development started back in 2015 when
          I decided to try editing my blog on blogspot - turns out hacking
          together a custom blog taught me a lot about HTML & CSS!
        </Paragraph>

        <Paragraph>
          During my finals in the university, I interned with armaniarts, there
          I learnt javascript and collaborated with a team to deliver clean
          wordpress websites, while, learning a bit of Vue.
        </Paragraph>

        <Paragraph>
          Fast forward to today, I am a front-end developer intern at lizard
          global, my focus is developing and maintaining efficient products for
          the company's clients(My Clients).
        </Paragraph>

        <Paragraph>
          Here are a few technologies I've been working with recently:
        </Paragraph>

        <ListsContainer>
          <TechnologiesContainer>
            <ListTitle>Technologies</ListTitle>
            <UnorderedList>
              {[
                "JavaScript",
                "React js",
                "Next js",
                "Node js",
                "Express js",
              ].map((tech, index) => (
                <List key={index}> {tech} </List>
              ))}
            </UnorderedList>
          </TechnologiesContainer>
          <SystemsContainer>
            <ListTitle>Operating Systems</ListTitle>
            <UnorderedList>
              {["Linux (Ubuntu)", "windows", "Git", "Github"].map(
                (os, index) => (
                  <List key={index}> {os} </List>
                )
              )}
            </UnorderedList>
          </SystemsContainer>
        </ListsContainer>
      </DescriptionContainer>

      <ImageContainer>
        <Image src={picture} alt="about thumbnail" />
      </ImageContainer>
    </Container>
  );
};

export default About;

const Container = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  font-family: inherit;
  width: 50%;
  margin: 0 auto;
  padding: 10rem 0;

  @media screen and (min-width: 600px) and (max-width: 1500px) {
    width: 70%;
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media screen and (min-width: 600px) and (max-width: 800px) {
    width: 90%;
  }

  @media screen and (max-width: 500px) {
    display: flex;
    width: 90%;
    flex-direction: column;
    gap: 2rem;
  }
`;

const DescriptionContainer = styled.div`
  font-size: 1rem;

  @media screen and (min-width: 2000px) {
    font-size: 2rem;
    flex: 1;
  }

  @media screen and (min-width: 1300px) {
    font-size: 1rem;
  }
`;

const SectionTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 2rem;
`;

const Span = styled.span`
  color: ${({ theme }) => theme.lightShade};
  font-weight: 500;
  font-size: 1.4rem;
  padding-right: 0.2rem;
  font-family: "Fira Code", monospace;

  @media screen and (min-width: 2000px) {
    font-size: 2rem;
  }

  @media (min-width: 1300px) and (max-width: 1999px) {
    font-size: 1rem;
  }

  @media screen and (max-width: 600px) {
    font-size: 1rem;
  }
`;

const AboutTitle = styled.h1`
  color: ${({ theme }) => theme.darkShade};
  font-size: 1.8rem;
  font-weight: 500;
  margin: 0;

  @media screen and (min-width: 2000px) {
    font-size: 2.8rem;
  }

  @media screen and (max-width: 600px) {
    font-size: 1.3rem;
  }
`;

const Paragraph = styled.p`
  color: ${({ theme }) => theme.black};
  white-space: pre-line;
  font-size: 1rem;
  margin: 2rem 0;

  @media screen and (min-width: 2000px) {
    font-size: 2rem;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  display: flex;
  width: 80%;
  margin: 0 auto;
  object-fit: contain;
  filter: grayscale(1);
  transition: all 300ms ease;

  @media screen and (min-width: 2000px) {
    height: 35rem;
    width: 90%;
  }

  @media screen and (min-width: 1000px) and (max-width: 1999px) {
    width: 90%;
    height: 20rem;
  }

  @media screen and (min-width: 600px) and (max-width: 999px) {
    width: 100%;
    height: 25rem;
  }

  &::after {
    position: absolute;
    content: "";
    top: 6rem;
    left: 4rem;
    width: 90%;
    height: 80%;
    border: 2px solid ${({ theme }) => theme.whiteToBlack};
    border-radius: 10px;
    z-index: 1;
    transition: all 300ms ease;

    @media screen and (min-width: 2000px) {
      top: 6rem;
      left: 4rem;
      width: 100%;
      height: 35rem;
    }

    @media screen and (min-width: 1300px) and (max-width: 1999px) {
      top: 5rem;
      left: 4rem;
      width: 70%;
      height: 20rem;
    }

    @media screen and (min-width: 1000px) and (max-width: 1299px) {
      width: 90%;
      height: 20rem;
    }

    @media screen and (min-width: 700px) and (max-width: 999px) {
      top: 5rem;
      left: 1.5rem;
      width: 100%;
      height: 25rem;
    }

    @media screen and (max-width: 500px) {
      top: 6rem;
      left: 2.5rem;
      height: 22rem;
    }
  }

  &:hover {
    filter: grayscale(0);

    &::after {
      top: 3rem;
      left: 1.5rem;

      @media screen and (min-width: 2000px) {
        top: 4rem;
        left: 1.5rem;
        z-index: 0;
      }

      @media screen and (min-width: 600px) and (max-width: 1999px) {
        top: 4rem;
        left: 1rem;
      }

      /* @media screen and (min-width: 1000px) and (max-width: 1299px) {
        top: 4rem;
        left: 1rem;
      } */

      @media screen and (max-width: 500px) {
        top: 4rem;
        left: 1rem;
      }
    }
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  margin-top: 3rem;
  z-index: 9;

  @media screen and (min-width: 2000px) {
    width: 100%;
    height: 100%;
  }

  @media screen and (min-width: 1300px) and (max-width: 1999px) {
    width: 70%;
  }

  @media screen and (min-width: 1000px) and (max-width: 1299px) {
    width: 90%;
  }

  @media screen and (max-width: 600px) {
    width: 90%;
    max-height: 350px;
  }
`;

const ListsContainer = styled.div`
  display: flex;
  flex-direction: row;
  /* align-items: center; */
  gap: 3rem;
  font-size: 1rem;
  margin: 2rem 0;

  @media screen and (max-width: 800px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const ListTitle = styled.h1`
  font-size: 1.1rem;
  margin: 0;
  font-weight: 400;
  color: ${({ theme }) => theme.lightShade};

  @media screen and (min-width: 2000px) {
    font-size: 1.7rem;
  }
`;

const TechnologiesContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const UnorderedList = styled.ul`
  list-style: "";
  padding: 0;
  font-size: 1rem;

  @media screen and (min-width: 2000px) {
    font-size: 1.7rem;
  }
`;

const List = styled.li`
  color: ${({ theme }) => theme.black};
  font-weight: 300;
  appearance: none;
  font-size: 0.9rem;

  &::before {
    content: "*";
    padding-right: 1rem;
    color: ${({ theme }) => theme.lightShade};
  }
`;

const SystemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1rem;
  width: 100%;

  @media screen and (min-width: 2000px) {
    font-size: 1.7rem;
  }
`;
