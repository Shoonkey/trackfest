import { Container } from "./style";

interface ToggleAllVehiclesProps {
  showing: boolean;
  onClick: () => void;
}

export default function ToggleAllVehiclesCard({
  showing,
  onClick,
}: ToggleAllVehiclesProps) {
  return (
    <Container onClick={onClick}>
      {showing ? "Hide uncommon" : "Show all"}
    </Container>
  );
}
