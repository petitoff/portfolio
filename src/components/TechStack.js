import React from "react";
import { styled } from "styled-components";
import AnimatedContainer from "./AnimatedContainer";
import { titleForSection } from "../styles/mixins";
import JsonData from "../../content/techStack/stack.json";

const AboutMeSection = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  max-width: 700px;
  margin: 20vh auto;

  h2 {
    ${titleForSection}
  }
`;

const TechStackContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  /* justify-content: space-between; */
  margin-top: 2rem;
  background-color: #1e1b4b;
  border-radius: 1rem;
  padding: 2rem;
  min-height: 200px;
  gap: 0.8rem;
`;

const TechStackItem = styled.div`
  display: grid;
  place-items: center;
  width: 100px;
  height: 100px;
  background-color: #4338ca;
  border-radius: 2rem;
  color: #fff;
  box-shadow: 0 10px 1rem rgba(0, 0, 0, 0.1);
  padding: 0.5rem;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }

  & > img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    transform: scale(0.8);
  }

  & > h3 {
    font-size: 0.8rem;
    text-align: center;
    margin: 0;
    margin-bottom: 0.5rem;
    font-weight: 400;
  }
`;

export const TechStack = () => {
  const data = JsonData;

  return (
    <AnimatedContainer>
      <AboutMeSection>
        <h2>Technologies</h2>

        <TechStackContainer>
          {data.stack.map(({ title, image }) => (
            <TechStackItem>
              <img src={`icons/${image}`} alt={title} />
              <h3>{title}</h3>
            </TechStackItem>
          ))}
        </TechStackContainer>
      </AboutMeSection>
    </AnimatedContainer>
  );
};
