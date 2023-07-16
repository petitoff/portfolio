import * as React from "react";
import Hero from "../components/Hero";
import Layout from "../components/layout";
import AboutMe from "../components/AboutMe";
import WhereWorked from "../components/WhereWorked";
import styled from "styled-components";
import Projects from "../components/Projects";
import FixedExternalLink from "../components/FixedExternalLink";

const StyledMainContainer = styled.main`
  counter-reset: section;
`;

export default function Home() {
  return (
    <div>
      <FixedExternalLink />
      <Layout>
        <StyledMainContainer>
          <Hero />
          <AboutMe />
          <WhereWorked />
          <Projects />
        </StyledMainContainer>
      </Layout>
    </div>
  );
}
