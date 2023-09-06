import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import { styledButton } from "../styles/mixins";
import AnimationContainer from "./AnimatedContainer";

const slideUpAnimation = `
  @keyframes slide-up {
    0% {
      transform: translateY(20px);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;

const HeroSection = styled.section`
  ${slideUpAnimation}

  height: 100vh;
  width: 100%;
  background-color: var(--navy);
  color: var(--white);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  font-family: "Poppins", sans-serif;
  font-size: 2rem;
  font-weight: 300;
  line-height: 1.5;
  text-align: left;

  h1,
  h2,
  p {
    opacity: 0;
    animation: slide-up 0.5s ease-in-out forwards;
  }

  h1 {
    color: var(--green);
    font-size: 1.2rem;
    font-weight: 400;
    margin: 0;
    animation-delay: 0s;
  }
  h2 {
    font-size: clamp(3rem, 6vw, 80px);
    font-weight: 600;
    line-height: 1.5;
    margin: 0;
    padding: 0;
    color: var(--lightest-slate);
    animation-delay: 0.2s;
  }
  p {
    margin: 20px 0px 0px;
    max-width: 540px;
    font-size: var(--fz-lg);
    color: var(--slate);
    animation-delay: 0.4s;
  }
`;

const StyledButton = styled.button`
  ${styledButton}
  margin-top: 50px;
`;

const Hero = () => {
  return (
    <HeroSection>
      <div className="hero">
        <h1>Hi, my name is</h1>
        <h2>Błażej Domagała</h2>
        <p>
          Skilled Frontend Developer specializing in React and React Native,
          with proficiency in backend technologies in Express and ASP.NET Core.
        </p>

        <AnimationContainer delay={0.6}>
          <Link to="/contact">
            <StyledButton>Resume & Contact</StyledButton>
          </Link>
        </AnimationContainer>
      </div>
    </HeroSection>
  );
};

export default Hero;
