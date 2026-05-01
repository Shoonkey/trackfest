import PartState from "../../shared/PartState";

export function getPieceStateColor(state: PartState) {
  if (state === PartState.Building) return "#ffde25";
  if (state === PartState.Built) return "#4caf50";

  return "inherit";
}
