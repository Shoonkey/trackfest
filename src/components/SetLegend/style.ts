import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  gap: 0.5rem;
  align-items: center;

  .collapsable {
    display: flex;
    width: 0px;
    overflow: hidden;
    opacity: 0;

    @supports (interpolate-size: allow-keywords) {
      transition:
        width 0.4s,
        opacity 0.4s;
      interpolate-size: allow-keywords;
    }

    &.in-view {
      width: auto;
      opacity: 1;
    }
  }

  .set-legend {
    display: flex;
    flex-shrink: 0;
    list-style-type: none;
    gap: 1rem;

    .set-option {
      display: flex;
      align-items: center;
      gap: 0.2rem;
    }
  }

  .show-set-legend-btn {
    all: unset;
    display: flex;
    text-decoration: underline;
    cursor: pointer;
    height: auto;
  }
`;
