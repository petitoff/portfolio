import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import styled from "styled-components";
import { link } from "../styles/mixins";

const StyledSideElement = styled.div`
  width: 40px;
  position: fixed;
  bottom: 0;
  left: 30px;
  right: auto;
  z-index: 10;
  color: var(--light-slate);

  @media (max-width: 768px) {
    display: none;
  }

  a {
    ${link}
    margin-bottom: 20px;
  }
`;

const StyledListOfLink = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  &::after {
    content: "";
    display: block;
    width: 1px;
    height: 90px;
    margin: 0 auto;
    background-color: var(--light-slate);
  }
`;

const FixedExternalLink = () => {
  return (
    <StyledSideElement>
      <StyledListOfLink>
        <a
          href="https://www.github.com/petitoff"
          target="_blank"
          rel="nofollow noopener noreferrer"
          aria-label="Github"
        >
          <FaGithub />
        </a>

        <a
          href="https://www.linkedin.com/in/blazej-domagala/"
          target="_blank"
          rel="nofollow noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedinIn />
        </a>
      </StyledListOfLink>
    </StyledSideElement>
  );
};

export default FixedExternalLink;
