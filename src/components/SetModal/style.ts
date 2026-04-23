import styled from "styled-components";

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  th,
  td {
    border: 2px solid #030303;
    padding: 8px;
    text-align: center;
    min-width: 60px;
  }
`;

export const BuildedPart = styled.td`
  background-color: #4caf50;
`;

export const UnbuildedPart = styled.td`
  background-color: #ffde25;
`;
