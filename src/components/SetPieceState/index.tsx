import PartState from "../../shared/PartState";
import { Container } from "./style";

interface SetPieceStateProps {
  state: PartState;
  onClick: () => void;
}

function getPieceStateColor(state: PartState) {
  if (state === PartState.Building) return "#ffde25";
  if (state === PartState.Built) return "#4caf50";

  return "inherit";
}

function SetPieceState({ state, onClick }: SetPieceStateProps) {
  return <Container bgColor={getPieceStateColor(state)} onClick={onClick} />;
}

export default SetPieceState;
