import React from "react";
import styled from "styled-components";
import { titleForSection } from "../styles/mixins";
import AnimatedContainer from "./AnimatedContainer";

const AboutMeSection = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  max-width: 700px;
  margin: 0 auto;

  h2 {
    ${titleForSection}
  }

  p {
    font-size: var(--fz-lg);
    line-height: 1.8;
    margin: 0 0 20px 0;

    @media (max-width: 768px) {
      font-size: var(--fz-md);
    }
  }
`;

const Higlight = styled.span`
  display: inline-block;
  position: relative;
  color: var(--green);
  transition: var(--transition);
`;

const AboutMe = () => {
  return (
    <AnimatedContainer>
      <AboutMeSection>
        <h2>About Me</h2>
        <p>
          Experienced <Higlight>Frontend Developer</Higlight> with a strong
          background in React, React Native, JavaScript, and TypeScript, as well
          as expertise in Redux Toolkit and React Router Doom.
        </p>
        <p>
          Proficient in <Higlight>backend technologies</Higlight>, including C#,
          .NET Framework, Java, and Java Spring Boot, with a focus on creating
          efficient and scalable applications.
        </p>
        <p>
          Adept at <Higlight>quickly learning</Higlight> new technologies and
          adapting to changing project requirements. Passionate about continuous
          skill improvement and collaborating with others to develop innovative
          and effective solutions.
        </p>
      </AboutMeSection>
    </AnimatedContainer>
  );
};

export default AboutMe;
