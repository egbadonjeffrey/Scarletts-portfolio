import React from "react";
import styled from "styled-components";
import { GrInstagram, GrGithub } from "react-icons/gr";
import { SiTwitter, SiQuora, SiLinkedin } from "react-icons/si";
import { ImStackoverflow } from "react-icons/im";
import { motion } from "framer-motion";

const projects = [
  { name: "Project 1", category: "web-app" },
  { name: "Project 2", category: "mobile" },
  { name: "Project 3", category: "web-app" },
  { name: "Project 4", category: "other-projects" },
  { name: "Project 5", category: "mobile" },
];

// Filter and console.log based on category
const filterAndLogProjects = (category) => {
  const filteredProjects = projects.filter(
    (project) => project.category === category
  );
  console.log(`Projects in ${category} category:`);
  console.log(filteredProjects);
};

// Example usage
filterAndLogProjects("web-app");
filterAndLogProjects("mobile");
filterAndLogProjects("other-projects");

const Contact = () => {
  const contactHandler = (e) => {
    e.preventDefault();
    window.location.href = "mailto:egbadonjeffrey.dev@gmail.com";
  };
  return (
    <Container
      id="contact"
      initial={{ opacity: 0, y: 0 }}
      whileInView={{ opacity: 1, y: -10 }}
      duration={0.3}
      transition={{ delay: 1, duration: 1 }}
      viewport={{ once: true }}
    >
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
          <Link
            href="https://www.linkedin.com/in/egbadonjeffrey/"
            target="blank"
          >
            <LinkedIn />
          </Link>

          <Link
            href="https://www.instagram.com/egbadon_jeffrey/"
            target="blank"
          >
            <Instagram />
          </Link>

          <Link href="https://twitter.com/egbadon_jeffrey" target="blank">
            <Twitter />
          </Link>

          <Link href="https://www.github.com/egbadonjeffrey" target="blank">
            <Github />
          </Link>

          <Link
            href="https://www.quora.com/profile/Jeffrey-Egbadon"
            target="_blank"
          >
            <Quora />
          </Link>

          <Link
            href="https://stackoverflow.com/users/19556755/indra"
            target="_blank"
          >
            <StackOverFlow />
          </Link>
        </Socials>
      </div>
    </Container>
  );
};

export default Contact;

const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  height: 60vh;
  padding-left: 10rem;
  padding: 5rem 0;
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
  width: 30%;
  margin: 0 auto;

  @media screen and (min-width: 1000px) and (max-width: 1999px) {
    width: 50%;
    white-space: pre-line;
  }

  @media (max-width: 800px) {
    width: 70%;
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`;

const Paragraph = styled.p`
  width: 70%;
  margin: 0 auto;
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

  &:hover {
    color: ${({ theme }) => theme.lightShade};
  }
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

const Quora = styled(SiQuora)`
  height: 1.5rem;
  width: 1.5rem;
  cursor: pointer;

  @media (min-width: 2000px) {
    width: 3rem;
    height: 3rem;
  }
`;

const StackOverFlow = styled(ImStackoverflow)`
  height: 1.5rem;
  width: 1.5rem;
  cursor: pointer;

  @media (min-width: 2000px) {
    width: 3rem;
    height: 3rem;
  }
`;

const LinkedIn = styled(SiLinkedin)`
  height: 1.5rem;
  width: 1.5rem;
  cursor: pointer;

  @media (min-width: 2000px) {
    width: 3rem;
    height: 3rem;
  }
`;
