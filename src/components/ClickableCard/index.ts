import styled from "styled-components";

const ClickableCard = styled.button`
  all: unset;
  cursor: pointer;
  font-family: inherit;

  display: flex;
  flex-direction: column;
  background: var(--card-bg-color);
  padding: 2rem;
  border-radius: 1.25rem;
  transition:
    transform 0.2s,
    background-color 0.3s;

  &:hover {
    transform: scale(1.03);
    background: var(--card-bg-color-hovered);
  }
`;

export default ClickableCard;
