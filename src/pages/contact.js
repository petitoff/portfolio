import * as React from "react";
import styled from "styled-components";
import Layout from "../components/layout";
import { Link } from "gatsby";
import AnimatedContainer from "../components/AnimatedContainer";
import { styledButton } from "../styles/mixins";

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const StyledTitle = styled.h1`
  color: var(--green);
  font-size: 2.2rem;
  font-weight: 400;
  cursor: pointer;
  text-decoration: none;
  position: relative;
  padding-right: 20px;
  transition: all 0.3s ease;

  &:after {
    content: "<";
    position: absolute;
    left: -30px;
    opacity: 0;
    transition: all 0.3s ease;
  }

  &:hover {
    transform: translateX(10px);

    &:after {
      opacity: 1;
    }
  }

  @media (max-width: 768px) {
    &:after {
      left: -20px;
    }

    &:hover {
      transform: translateX(5px);
    }
  }
`;

const StyledButtonToSendEmail = styled.button`
  ${styledButton}

  & a {
    color: var(--green);
    text-decoration: none;
  }
`;

const StyledButtonToCv = styled.button`
  ${styledButton}

  & a {
    color: var(--green);
    text-decoration: none;
  }
`;

const StyledContainer = styled.div`
  margin-top: 3rem;

  @media (max-width: 768px) {
    margin-bottom: 1rem;
  }
`;

const ContactPage = () => {
  return (
    <Layout>
      <AnimatedContainer>
        <StyledLink to="/">
          <StyledTitle>Back to Home</StyledTitle>
        </StyledLink>
      </AnimatedContainer>

      <AnimatedContainer delay={0.2}>
        <StyledContainer>
          <h3>Get in touch</h3>
          <p>
            I'm currently looking for new opportunities, my inbox is always
            open. Whether you have a question or just want to say hi, I'll try
            my best to get back to you!
          </p>

          <StyledButtonToSendEmail>
            <a
              href="mailto:
          blazej.domagala1@outlook.com"
            >
              Send Email
            </a>
          </StyledButtonToSendEmail>
        </StyledContainer>
      </AnimatedContainer>

      <AnimatedContainer delay={0.5}>
        <StyledContainer>
          <h3>Here is my CV</h3>
          <p>
            If you want to know more about my experience, you can download my CV
            below.
          </p>

          <StyledButtonToCv>
            <a
              href="/Błażej Domagała - CV - share.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              See my CV
            </a>
          </StyledButtonToCv>
        </StyledContainer>
      </AnimatedContainer>
    </Layout>
  );
};

export default ContactPage;
