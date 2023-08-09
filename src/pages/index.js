import * as React from "react";
import Hero from "../components/Hero";
import Layout from "../components/layout";
import AboutMe from "../components/AboutMe";
import WhereWorked from "../components/WhereWorked";
import styled from "styled-components";
import Projects from "../components/Projects";
import { TechStack } from "../components/TechStack";
import FixedExternalLink from "../components/FixedExternalLink";
/* eslint-disable react/jsx-pascal-case */
import SEO from "../components/SEO";

const StyledMainContainer = styled.main`
  counter-reset: section;
`;

export default function Home() {
  return (
    <div>
      <SEO title={"Błażej Domagała | portfolio"} />
      <FixedExternalLink />
      <Layout>
        <StyledMainContainer>
          <Hero />
          <AboutMe />
          <WhereWorked />
          <TechStack />
          <Projects />
        </StyledMainContainer>
      </Layout>
    </div>
  );
}
