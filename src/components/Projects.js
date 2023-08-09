import React from "react";
import styled from "styled-components";
import {
  resetList,
  titleForSection,
  highlightSpan,
  link,
} from "../styles/mixins";
import AnimatedText from "./AnimatedText";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage, getSrc } from "gatsby-plugin-image";
import AnimatedContainer from "./AnimatedContainer";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const StyledProjectsSection = styled.section`
  display: flex;
  flex-direction: column;
  margin-bottom: 20vh;

  h2 {
    ${titleForSection}
  }
`;

const StyledProjectsGrid = styled.ul`
  ${resetList}
  a {
    position: relative;
    z-index: 1;
  }
`;

const StyledProject = styled.li`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 50px;
  margin-bottom: 4rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-gap: 20px;
  }
`;

const HighlightSpan = styled.span`
  ${highlightSpan}
`;

const StyledProjectDescription = styled.div`
  a {
    ${link}
    text-decoration: underline;
  }
`;

const StyledImage = styled.div`
  content: "";
  width: 100%;
  height: 100%;
  inset: 0px;
  z-index: 3;
  transition: var(--transition);
  background-color: var(--navy);
  mix-blend-mode: screen;

  .img {
    width: 100%;
    max-width: 100%;
  }
`;

const StyledProjectLinks = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  margin-top: 10px;
  color: var(--slate);

  a {
    ${link}
    padding: 5px 15px;
    background-color: var(--light-navy);
    margin-right: 20px;
    border-radius: var(--border-radius);
  }
`;

const StyledTech = styled.div`
  & span:not(:last-child)::after {
    content: ", ";
  }
`;

const StyledDescriptionContainer = styled.div`
  margin-top: 10px;

  p {
    margin: 0;
  }
`;

const Projects = () => {
  const data = useStaticQuery(graphql`
    query {
      projects: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/content/projects/" } }
        sort: { fields: frontmatter___date, order: ASC }
      ) {
        edges {
          node {
            frontmatter {
              title
              cover {
                childImageSharp {
                  gatsbyImageData(layout: FULL_WIDTH, quality: 100)
                }
              }
              tech
              github
              external
            }
            html
          }
        }
      }
    }
  `);

  const projects = data.projects.edges.filter(({ node }) => node);

  return (
    <StyledProjectsSection>
      <AnimatedText>My Projects</AnimatedText>

      <StyledProjectsGrid>
        {projects ? (
          projects.map(({ node }, i) => {
            const { frontmatter, html } = node;
            const { title, external, github, tech, cover } = frontmatter;

            const image = getImage(cover.childImageSharp.gatsbyImageData);

            const imageSrc = getSrc(cover.childImageSharp.gatsbyImageData);
            let isGif = false;

            if (imageSrc.endsWith(".gif")) {
              isGif = true;
            }

            return (
              <AnimatedContainer key={i}>
                <StyledProject>
                  <StyledImage>
                    {isGif ? (
                      <img src={imageSrc} alt={title} className="img" />
                    ) : (
                      <GatsbyImage image={image} alt={title} className="img" />
                    )}
                  </StyledImage>
                  <div>
                    <h3>{title}</h3>
                    <div>
                      <HighlightSpan>Made with:</HighlightSpan>{" "}
                      <StyledTech>
                        {tech.map((t) => (
                          <span>{t}</span>
                        ))}
                      </StyledTech>
                    </div>

                    <StyledDescriptionContainer>
                      <HighlightSpan>Description:</HighlightSpan>

                      <StyledProjectDescription
                        dangerouslySetInnerHTML={{ __html: html }}
                      />
                    </StyledDescriptionContainer>

                    <StyledProjectLinks>
                      {github && (
                        <a
                          href={github}
                          aria-label="GitHub Link"
                          target="blank"
                        >
                          <FaGithub />
                        </a>
                      )}
                      {external && (
                        <a
                          href={external}
                          aria-label="External Link"
                          className="external"
                          target="blank"
                        >
                          <FaExternalLinkAlt />
                        </a>
                      )}
                    </StyledProjectLinks>
                  </div>
                </StyledProject>
              </AnimatedContainer>
            );
          })
        ) : (
          <p>No projects to show</p>
        )}
      </StyledProjectsGrid>
    </StyledProjectsSection>
  );
};

export default Projects;
