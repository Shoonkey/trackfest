import PartState from "./PartState";
import VehicleType from "./VehicleType";

export function getPieceStateColor(state: PartState) {
  if (state === PartState.Building) return "#ffde25";
  if (state === PartState.Built) return "#4caf50";

  return "#646464";
}

export function getVehicleTypeLabel(category: VehicleType) {
  switch (category) {
    case VehicleType.AlphaGp:
      return "Alpha GP";
    case VehicleType.RallyRaid:
      return "Rally Raid";
    case VehicleType.CupCar:
      return "Cup Car";
    default:
      return VehicleType[category];
  }
}
