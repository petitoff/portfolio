import React, { useEffect, useRef } from "react";
import styled, { css } from "styled-components";

const Container = styled.div`
  position: relative;
`;

const StyledAnimatedContainer = styled.div`
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 1s, transform 1s;

  ${(props) =>
    props.isVisible &&
    css`
      opacity: 1;
      transform: translateY(0);
    `}
`;

const AnimatedContainer = ({ children }) => {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = React.useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setIsVisible(true);
              observer.disconnect(); // Przerywa obserwację po pierwszym wywołaniu
            }
          });
        },
        {
          threshold: 0.5,
        }
      );

      if (containerRef.current) {
        observer.observe(containerRef.current);
      }

      return () => {
        observer.disconnect();
      };
    }
  }, []);

  return (
    <Container ref={containerRef}>
      <StyledAnimatedContainer isVisible={isVisible}>
        {children}
      </StyledAnimatedContainer>
    </Container>
  );
};

export default AnimatedContainer;
