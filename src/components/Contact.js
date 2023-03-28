import React from "react";
import styled from "styled-components";
import { GrInstagram, GrGithub } from "react-icons/gr";
import { SiTwitter } from "react-icons/si";

const Contact = () => {
  const contactHandler = (e) => {
    e.preventDefault();
    window.location.href = "mailto:egbadonjeffrey.dev@gmail.com";
  };
  return (
    <Container id="contact">
      <SectionTitle>
        <Span>03.</Span>
        <Title>What's Next ?</Title>
      </SectionTitle>
      <DivTitle>Get In Touch</DivTitle>
      <SectionDescription>
        <Paragraph>
          I’m currently looking for any new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I’ll try my
          best to get back to you!
        </Paragraph>

        <Button onClick={contactHandler}>Say Hello</Button>
      </SectionDescription>

      <div>
        <Socials>
          <Link href="https://www.instagram.com/scarlettcoder/" target="blank">
            <Instagram />
          </Link>

          <Link href="https://twitter.com/theScarlettCode" target="blank">
            <Twitter />
          </Link>

          <Link href="https://www.github.com/theScarlettCoder" target="blank">
            <Github />
          </Link>
        </Socials>
      </div>
    </Container>
  );
};

export default Contact;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  height: 60vh;
  padding-left: 10rem;
  padding: 10rem 0;
  text-align: center;
`;

const SectionTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Span = styled.span`
  color: ${({ theme }) => theme.lightShade};
  font-weight: 500;
  font-size: 1rem;
  padding-right: 0.2rem;
  font-family: "Fira Code", monospace;

  @media (min-width: 2000px) {
    font-size: 2rem;
  }
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.lightShade};
  font-weight: 400;
  font-size: 20px;
  margin: 0;

  @media (min-width: 2000px) {
    font-size: 40px;
  }
`;

const DivTitle = styled.h1`
  color: ${({ theme }) => theme.darkShade};
  font-size: 64px;
  font-weight: 500;
  margin: 0;

  @media screen and (max-width: 600px) {
    font-size: 3rem;
  }
`;

const SectionDescription = styled.div`
  width: 80%;
  margin: 0 auto;

  @media screen and (min-width: 1000px) and (max-width: 1999px) {
    width: 60%;
    white-space: pre-line;
  }
`;

const Paragraph = styled.p`
  color: ${({ theme }) => theme.mediumText};
  font-size: 1rem;
  line-height: 1rem;

  @media (min-width: 2000px) {
    font-size: 1.5rem;
    line-height: 2rem;
  }

  @media (max-width: 600px) {
    font-size: 0.9rem;
  }
`;

const Button = styled.button`
  font-size: 1rem;
  width: 20%;
  height: 3rem;
  margin-top: 1rem;
  border: 1px solid ${({ theme }) => theme.lightShade};
  border-radius: 10px;
  background: transparent;
  color: ${({ theme }) => theme.lightShade};

  @media (min-width: 2000px) {
    font-size: 2rem;
    width: 30%;
    height: 4rem;
  }

  @media (max-width: 600px) {
    font-size: 1rem;
    width: 50%;
  }

  &:hover {
    background: ${({ theme }) => theme.hover};
  }
`;

const Socials = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  gap: 1rem;

  @media (min-width: 2000px) {
    gap: 2rem;
  }
`;

const Link = styled.a`
  text-decoration: "none";
  color: ${({ theme }) => theme.smallText};
`;

const Instagram = styled(GrInstagram)`
  height: 1.5rem;
  width: 1.5rem;
  cursor: pointer;

  @media (min-width: 2000px) {
    width: 3rem;
    height: 3rem;
  }
`;

const Twitter = styled(SiTwitter)`
  height: 1.5rem;
  width: 1.5rem;
  cursor: pointer;

  @media (min-width: 2000px) {
    width: 3rem;
    height: 3rem;
  }
`;

const Github = styled(GrGithub)`
  height: 1.5rem;
  width: 1.5rem;
  cursor: pointer;

  @media (min-width: 2000px) {
    width: 3rem;
    height: 3rem;
  }
`;
