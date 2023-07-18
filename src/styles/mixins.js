import { css } from "styled-components";

export const titleForSection = css`
  display: flex;
  align-items: center;
  position: relative;
  margin: 10px 0px 40px;
  width: 100%;
  font-size: var(--fz-heading);
  white-space: nowrap;

  &::before {
    position: relative;
    bottom: 4px;
    counter-increment: section 1;
    content: "0" counter(section) ".";
    margin-right: 10px;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: clamp(var(--fz-md), 3vw, var(--fz-xl));
    font-weight: 400;
  }

  &::after {
    content: "";
    display: block;
    position: relative;
    top: -5px;
    width: 300px;
    height: 1px;
    margin-left: 20px;
    background-color: var(--lightest-navy);
  }
`;

export const flexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const link = css`
  display: inline-block;
  text-decoration: none;
  text-decoration-skip-ink: auto;
  color: inherit;
  position: relative;
  transition: var(--transition);

  &:hover,
  &:focus-visible {
    color: var(--green);
    outline: 0;
  }
`;

export const fancyList = css`
  padding: 0;
  margin: 0;
  list-style: none;
  font-size: var(--fz-lg);
  li {
    position: relative;
    padding-left: 30px;
    margin-bottom: 10px;
    &:before {
      content: "▹";
      position: absolute;
      left: 0;
      color: var(--green);
    }
  }
`;

export const resetList = css`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const highlightSpan = css`
  color: var(--green);
  font-weight: 600;
`;

export const styledButton = css`
  color: var(--green);
  background-color: transparent;
  border: 1px solid var(--green);
  border-radius: var(--border-radius);
  padding: 1.25rem 1.75rem;
  font-size: var(--fz-sm);
  font-family: var(--font-mono);
  line-height: 1;
  text-decoration: none;
  transition: var(--transition);

  &:hover {
    cursor: pointer;
    outline: none;
    box-shadow: 4px 4px 0 0 var(--green);
    transform: translate(-5px, -5px);
  }
`;
