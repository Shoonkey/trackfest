import styled from "styled-components";

export const Container = styled.div`
  height: 100dvh;
  padding: 1rem 1.5rem;
  box-sizing: border-box;

  &.scrollable {
    height: auto;
  }
`;

export const Header = styled.header`
  display: flex;
  gap: 0.5rem;

  .title {
    /* compensates the font padding so the text is centered in the element */
    padding-top: 6px;
  }
`;

export const Deck = styled.main`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
`;
