import styled from "styled-components";

export const Container = styled.button<{ bgColor: string }>`
  all: unset;
  cursor: pointer;
  position: absolute;
  top: 0;
  left: 0;
  background-color: ${(props) => props.bgColor};
  width: 100%;
  height: 100%;
`;
