import VehicleType from "../../shared/VehicleType";

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
