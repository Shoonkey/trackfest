import styled from "styled-components";

interface StateDescriptorProps {
  color: string;
  label: string;
}

const Container = styled.div<{ $color: string }>`
  display: flex;
  gap: 0.35rem;

  .color {
    display: inline-block;
    border-radius: 50%;
    width: 1rem;
    height: 1rem;
    background-color: ${(props) => props.$color};
    margin-top: 1px;
  }
`;

export default function State({ color, label }: StateDescriptorProps) {
  return (
    <Container $color={color}>
      <span className="color"></span>
      <span>{label}</span>
    </Container>
  );
}
