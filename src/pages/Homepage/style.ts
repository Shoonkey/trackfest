import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  background: inherit;
  flex-direction: column;
  height: 100dvh;
  box-sizing: border-box;
  padding: 0.25rem 0.65rem;

  &.scrollable {
    height: auto;
  }

  @media screen and (min-width: 400px) {
    padding: 1rem 1.5rem;
  }
`;

export const Header = styled.header`
  display: flex;
  gap: 0.5rem;
  background: var(--bg-color);
  position: sticky;
  top: 0;

  .title {
    /* compensates the font padding so the text is centered in the element */
    padding-top: 6px;
  }
`;

export const Deck = styled.main`
  flex-grow: 1;
  gap: 1.5rem;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  @media screen and (min-width: 1350px) {
    display: grid;
    grid-template-rows: repeat(3, 1fr);
    grid-template-columns: repeat(4, 1fr);
  }
`;
