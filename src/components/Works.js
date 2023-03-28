import React from "react";
import styled from "styled-components";
import { AiOutlineFolderOpen } from "react-icons/ai";
import { RiExternalLinkLine } from "react-icons/ri";

const portfolioProjects = [
  {
    id: 1,
    link: "https://alphfx-investment.vercel.app/",
    projectTitle: "Investment Website",
    stack: "frontend app",
    about:
      "Designed and built the frontend of the website using Next.js and tailwind css. I deployed a demo for viewing on vercel",
    technologies: ["Next.js", "Tailwind css", "Vercel"],
  },
  {
    id: 2,
    link: "https://plant-decor.vercel.app/",
    projectTitle: "Interior Plant decoration",
    stack: "frontend app",
    about:
      "Website for selling flowers for interior decoration. I deployed a demo for viewing on vercel",
    technologies: ["React.js", "CSS", "Vercel"],
  },
  {
    id: 3,
    link: "https://scarlett-recipes.vercel.app/",
    projectTitle: "Recipe Website",
    stack: "fullstack app",
    about:
      "Implemented headless-CMS using Contentful as backend and Next.js for the frontend",
    technologies: ["Next.js", "Contentful"],
  },
  {
    id: 4,
    link: "https://fluffynotes.netlify.app",
    projectTitle: "Fluffy Notes",
    stack: "fullstack app",
    about:
      "Implemented server-side logic using , Node.js,  Express.js and MongoDB and React.js, Sass for the frontend. I deployed the frontend to Netlify and the backend on Render",
    technologies: [
      "Nodejs",
      "Express.js",
      "MongoDB",
      "React",
      "Sass",
      "Netlify",
      "Render",
    ],
  },
];

const Works = () => {
  return (
    <Container id="work">
      <SectionTitle>
        <Span>02.</Span>
        <Title>Some things I've worked on</Title>
      </SectionTitle>

      <Projects>
        {portfolioProjects.map((project) => (
          <ProjectContainer key={project.id}>
            <Project>
              <ProjectHead>
                <FileIcon />
                <Link href={project.link} target="blank">
                  <LinkIcon />
                </Link>
              </ProjectHead>
              <ProjectBody>
                <ProjectIntro>
                  <ProjectTitle>{project.projectTitle}</ProjectTitle>
                  <ProjectStack>{project.stack}</ProjectStack>
                </ProjectIntro>

                <ProjectAbout>
                  <About>{project.about}</About>

                  <Technologies>
                    {project.technologies.map((technologies, index) => (
                      <List key={index}>{technologies}</List>
                    ))}
                  </Technologies>
                </ProjectAbout>
              </ProjectBody>
            </Project>
          </ProjectContainer>
        ))}
      </Projects>
    </Container>
  );
};

export default Works;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 80%;
  padding: 10rem 0;
  margin: 0 auto;
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
  font-size: 20px;
  padding-right: 0.2rem;
  font-family: "Fira Code", monospace;

  @media screen and (min-width: 2000px) {
    font-size: 2rem;
  }

  @media screen and (max-width: 600px) {
    font-size: 1rem;
  }
`;

const Title = styled.h1`
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

const Projects = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  width: 100%;
  gap: 4rem;

  @media screen and (min-width: 600px) and (max-width: 999px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media screen and (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;

const ProjectContainer = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.themeControllerBackground};
  padding: 2rem 1.5rem;
  border-radius: 10px;
  box-shadow: 0 0 2px 0px ${({ theme }) => theme.shadow};

  @media screen and (max-width: 500px) {
    width: 90%;
    height: auto;
  }
`;

const Project = styled.div`
  width: 100%;
  position: relative;
  top: 0;
  display: flex;
  flex-direction: column;
  cursor: pointer;

  &:hover {
    top: -10px;
    transition: all 300ms ease;
  }
`;

const ProjectHead = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

const FileIcon = styled(AiOutlineFolderOpen)`
  color: ${({ theme }) => theme.iconShade};
  width: 3rem;
  height: 3rem;

  @media screen and (min-width: 2000px) {
    width: 6rem;
    height: 6rem;
  }

  &:hover {
    color: #c05c1ef3;
  }
`;

const Link = styled.a`
  text-decoration: none;
  color: inherit;
`;

const LinkIcon = styled(RiExternalLinkLine)`
  color: ${({ theme }) => theme.mediumText};
  width: 1.5rem;
  height: 1.5rem;

  @media screen and (min-width: 2000px) {
    width: 3rem;
    height: 3rem;
  }

  &:hover {
    color: #c16f27cc;
  }
`;

const ProjectBody = styled.div``;

const ProjectIntro = styled.div`
  display: flex;
  flex-direction: column;
`;

const ProjectTitle = styled.span`
  color: ${({ theme }) => theme.darkShade};
  font-size: 1rem;
  font-weight: 500;

  @media screen and (min-width: 2000px) {
    font-size: 2.3rem;
  }

  @media screen and (min-width: 1300px) and (max-width: 1999px) {
    font-size: 1.5rem;
  }

  @media screen and (min-width: 600px) and (max-width: 1299px) {
    font-size: 1.2rem;
  }
`;

const ProjectStack = styled.span`
  color: ${({ theme }) => theme.mediumText};
  font-size: 14px;
  text-transform: uppercase;
  margin-top: 1rem;

  @media screen and (min-width: 2000px) {
    font-size: 23px;
  }
`;

const ProjectAbout = styled.div``;

const About = styled.p`
  color: ${({ theme }) => theme.mediumText};
  font-size: 0.8rem;
  line-height: 1rem;

  @media screen and (min-width: 2000px) {
    font-size: 1.5rem;
    line-height: 2rem;
  }
`;

const Technologies = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  list-style: none;
  gap: 1rem;
  color: ${({ theme }) => theme.smallText};
  width: 100%;
  padding: 0;
  margin-top: 2rem;
`;

const List = styled.li`
  font-size: 0.75rem;

  @media screen and (min-width: 2000px) {
    font-size: 1.4rem;
  }
`;
