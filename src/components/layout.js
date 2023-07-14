import React from "react";
import GlobalStyle from "../styles/GlobalStyle";
import styled from "styled-components";

const LayoutContainer = styled.div`
  padding: 0px 150px;
  margin: 0 auto;

  @media (max-width: 1024px) {
    padding: 0px 100px;
  }

  @media (max-width: 768px) {
    padding: 0px 50px;
  }

  @media (max-width: 320px) {
    padding: 0px 25px;
  }
`;

const Layout = ({ children }) => {
  return (
    <LayoutContainer>
      <GlobalStyle />
      <div>{children}</div>
    </LayoutContainer>
  );
};

export default Layout;
