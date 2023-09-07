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
          background in JavaScript, and TypeScript and in framework React, React
          Native, as well as expertise in Redux Toolkit and working with API in
          frontend side.
        </p>
        <p>
          Proficient in creating RESTful APIs using{" "}
          <Higlight>backend technologies</Higlight> such as Node.js, Express,
          ASP.NET Core. I have also developed applications in .NET Framework
          WPF, and .NET MAUI.
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
