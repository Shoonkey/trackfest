import styled from "styled-components";

export const Container = styled.div`
  height: 100dvh;
  padding: 1rem 1.5rem;

  &.scrollable {
    height: auto;
  }
`;

export const Header = styled.header`
  display: inline-flex;
  justify-content: space-between;

  .title {
    font-family: Lalezar, Arial, Helvetica, sans-serif;
    font-weight: bold;
    letter-spacing: 0.7px;
  }

  .map-legend-container {

    .map-legend {
      list-style-type: none;
    }
  }
`;
