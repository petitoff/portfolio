import React, { useEffect, useRef } from "react";
import styled, { css } from "styled-components";

const Container = styled.div`
  position: relative;
`;

const AnimatedTextContainer = styled.h2`
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 1s, transform 1s;

  ${({ $isVisible }) =>
    $isVisible &&
    css`
      opacity: 1;
      transform: translateY(0);
    `}
`;

const AnimatedText = ({ children }) => {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = React.useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setIsVisible(true);
              observer.disconnect();
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
      <AnimatedTextContainer $isVisible={isVisible}>
        {children}
      </AnimatedTextContainer>
    </Container>
  );
};

export default AnimatedText;
