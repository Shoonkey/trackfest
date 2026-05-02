import PartState from "../../shared/PartState";
import { getPieceStateColor } from "../../shared/util";
import { Container } from "./style";


interface SetPieceStateProps {
  state: PartState;
  onClick: () => void;
}

function SetPieceState({ state, onClick }: SetPieceStateProps) {
  return <Container $bgColor={getPieceStateColor(state)} onClick={onClick} />;
}

export default SetPieceState;
