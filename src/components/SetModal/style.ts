import styled from "styled-components";

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  th,
  td {
    position: relative;
    border: thin solid #030303;
  }

  th {
    padding: 8px;
    text-align: center;
    min-width: 60px;
    padding: 8px;
  }

  thead th:first-child {
    color: var(--text-color);
  }
`;

export const BuildedPart = styled.td`
  background-color: #4caf50;
`;

export const UnbuildedPart = styled.td`
  background-color: #ffde25;
`;
