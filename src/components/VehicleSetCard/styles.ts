import styled from "styled-components";

export const Container = styled.section`
  background: #131313;
  padding: 1.5rem 2rem;
  border-radius: 1.25rem;
  cursor: pointer;
  transition:
    transform 0.4s,
    background-color 0.4s;

  &:hover {
    transform: scale(1.03);
    background: #090909;
  }

  .set-state-list {
    list-style-type: none;
    display: grid;
    gap: 0.5rem 2rem;
    grid-template-rows: repeat(3, 1fr);
    grid-template-columns: repeat(2, 1fr);

    .set-state {
      display: flex;
      gap: 0.2rem;
      align-items: center;
    }
  }
`;
