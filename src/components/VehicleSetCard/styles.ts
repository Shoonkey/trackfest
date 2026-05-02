import styled from "styled-components";
import ClickableCard from "../ClickableCard";

export const Container = styled(ClickableCard)`
  .title {
    text-align: center;
    font-size: 2.35rem;
    padding-bottom: 6px;
  }

  .set-state-list {
    list-style-type: none;
    display: grid;
    place-items: center;
    flex-grow: 1;
    gap: 0.5rem 2rem;
    grid-template-rows: repeat(3, 1fr);
    grid-template-columns: repeat(2, 1fr);

    .set-state {
      display: flex;
      gap: 0.5rem;
      align-items: center;
      font-size: 1.8rem;
    }
  }
`;
