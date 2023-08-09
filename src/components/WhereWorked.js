import React, { useState, useEffect, useRef, useCallback } from "react";
import AnimatedText from "./AnimatedText";
import styled from "styled-components";
import { fancyList, link, titleForSection } from "../styles/mixins";
import { graphql, useStaticQuery } from "gatsby";
import { KEY_CODES } from "../utils/index";
import { flexCenter } from "../styles/mixins";
import { CSSTransition } from "react-transition-group";

const StyledWhereWorkedSection = styled.section`
  max-width: 700px;
  margin: 20vh auto;

  h2 {
    ${titleForSection}
  }

  .inner {
    display: flex;

    @media (max-width: 768px) {
      flex-direction: column;
    }
  }
`;

const StyledTabList = styled.div`
  position: relative;
  z-index: 3;
  width: max-content;
  padding: 0;
  margin: 0;
  list-style: none;

  @media (max-width: 768px) {
    display: flex;
    overflow-x: auto;
    width: var(--tab-width * ${(props) => props.numberOfJobs});
    padding-left: 50px;
    margin-left: -50px;
    margin-bottom: 30px;
  }

  li {
    &:first-of-type {
      @media (max-width: 600px) {
        margin-left: 50px;
      }
      @media (max-width: 480px) {
        margin-left: 25px;
      }
    }
    &:last-of-type {
      @media (max-width: 600px) {
        padding-right: 50px;
      }
      @media (max-width: 480px) {
        padding-right: 25px;
      }
    }
  }
`;

const StyledTabButton = styled.button`
  ${link}
  display: flex;
  align-items: center;
  width: 100%;
  height: var(--tab-height);
  padding: 0 20px 2px;
  border-left: 2px solid var(--lightest-navy);
  background-color: transparent;
  color: ${({ isActive }) => (isActive ? "var(--green)" : "var(--slate)")};
  font-family: var(--font-mono);
  font-size: var(--fz-xs);
  text-align: left;
  white-space: nowrap;

  @media (max-width: 768px) {
    padding: 0 15px 2px;
    min-width: 120px;

    ${flexCenter}
    min-width: 120px;
    padding: 0 15px;
    border-left: 0;
    border-bottom: 2px solid var(--lightest-navy);
    text-align: center;
  }

  &:hover,
  &:focus {
    background-color: var(--light-navy);
    cursor: pointer;
  }
`;

const StyledHighlight = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  width: 2px;
  height: var(--tab-height);
  border-radius: var(--border-radius);
  background: var(--green);
  transform: translateY(
    calc(${({ activeTabId }) => activeTabId} * var(--tab-height))
  );
  transition: transform 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  transition-delay: 0.1s;

  @media (max-width: 768px) {
    top: auto;
    bottom: 0;
    width: 100%;
    max-width: var(--tab-width);
    height: 2px;
    margin-left: 50px;
    transform: translateX(
      calc(${({ activeTabId }) => activeTabId} * var(--tab-width))
    );
  }
`;

const StyledTabPanels = styled.div`
  position: relative;
  width: 100%;
  margin-left: 20px;

  @media (max-width: 600px) {
    margin-left: 0;
  }
`;

const StyledTabPanel = styled.div`
  width: 100%;
  height: auto;
  padding: 10px 5px;

  ul {
    ${fancyList}

    li {
      font-weight: 500;
    }
  }

  h3 {
    font-size: var(--fz-xxl);
    font-weight: 600;
    line-height: 1.3;
    margin: 0px 0px 10px;

    .company {
      color: var(--green);
    }
  }

  .range {
    margin-bottom: 25px;
    color: var(--light-slate);
    font-family: var(--font-mono);
    font-size: var(--fz-xs);
  }
`;

const WhereWorked = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/content/jobs/" } }
        sort: { fields: [frontmatter___date], order: DESC }
      ) {
        nodes {
          frontmatter {
            title
            company
            range
            date
          }
          html
        }
      }
    }
  `);

  const jobsData = data.allMarkdownRemark.nodes;

  const [activeTabId, setActiveTabId] = useState(0);
  const [tabFocus, setTabFocus] = useState(null);
  const tabs = useRef([]);

  const focusTab = useCallback(() => {
    if (tabs.current[tabFocus]) {
      tabs.current[tabFocus].focus();
      return;
    }
    // If we're at the end, go to the start
    if (tabFocus >= tabs.current.length) {
      setTabFocus(0);
    }
    // If we're at the start, move to the end
    if (tabFocus < 0) {
      setTabFocus(tabs.current.length - 1);
    }
  }, [tabFocus, tabs]);

  // Only re-run the effect if tabFocus or focusTab changes
  useEffect(() => focusTab(), [tabFocus, focusTab]);

  // Focus on tabs when using up & down arrow keys
  const onKeyDown = (e) => {
    switch (e.key) {
      case KEY_CODES.ARROW_UP: {
        e.preventDefault();
        setTabFocus(tabFocus - 1);
        break;
      }

      case KEY_CODES.ARROW_DOWN: {
        e.preventDefault();
        setTabFocus(tabFocus + 1);
        break;
      }

      default: {
        break;
      }
    }
  };

  return (
    <AnimatedText>
      <StyledWhereWorkedSection>
        <h2>Where I've Worked</h2>

        <div className="inner">
          <StyledTabList
            role="tablist"
            aria-label="Job tabs"
            onKeyDown={(e) => onKeyDown(e)}
            numberOfJobs={jobsData.length}
          >
            {jobsData &&
              jobsData.map(({ frontmatter }, i) => {
                const { company } = frontmatter;
                return (
                  <StyledTabButton
                    key={i}
                    isActive={activeTabId === i}
                    onClick={() => setActiveTabId(i)}
                    ref={(el) => (tabs.current[i] = el)}
                    id={`tab-${i}`}
                    role="tab"
                    tabIndex={activeTabId === i ? "0" : "-1"}
                    aria-selected={activeTabId === i ? true : false}
                    aria-controls={`panel-${i}`}
                  >
                    <span>{company}</span>
                  </StyledTabButton>
                );
              })}
            <StyledHighlight activeTabId={activeTabId} />
          </StyledTabList>

          <StyledTabPanels>
            {jobsData &&
              jobsData.map(({ frontmatter, html }, i) => {
                const { title, url, company, range } = frontmatter;

                return (
                  <CSSTransition
                    key={i}
                    in={activeTabId === i}
                    timeout={250}
                    classNames="fade"
                  >
                    <StyledTabPanel
                      id={`panel-${i}`}
                      role="tabpanel"
                      tabIndex={activeTabId === i ? "0" : "-1"}
                      aria-labelledby={`tab-${i}`}
                      aria-hidden={activeTabId !== i}
                      hidden={activeTabId !== i}
                    >
                      <h3>
                        <span>{title}</span>
                        <span className="company">
                          &nbsp;@&nbsp;
                          <a href={url} className="inline-link">
                            {company}
                          </a>
                        </span>
                      </h3>

                      <p className="range">{range}</p>

                      <div dangerouslySetInnerHTML={{ __html: html }} />
                    </StyledTabPanel>
                  </CSSTransition>
                );
              })}
          </StyledTabPanels>
        </div>
      </StyledWhereWorkedSection>
    </AnimatedText>
  );
};

export default WhereWorked;
