import PartState from "../../shared/PartState";
import { PartStateDict } from "../../shared/VehicleSetInfo";

export function getOwnedParts(partState: PartStateDict) {
  const states = Object.values(partState);
  return states.filter((part) => part !== PartState.Starter);
}

export function getPartScoreColor(
  ownedParts: PartState[],
  builtOwnedParts: PartState[],
) {
  if (ownedParts.length === 0) return "inherit";
  return ownedParts.length === builtOwnedParts.length ? "#809e73" : "#c98a43";
}
