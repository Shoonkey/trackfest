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

export const HelperText = styled.div`
  text-align: center;
  font-size: 0.9rem;
  margin-top: 0.5rem;
  color: var(--text-color);

  .states {
    display: flex;
    gap: 1rem;
    justify-content: center;
    margin-top: 0.1rem;
  }
`;
