import PartType from "./PartType";
import SetType from "./SetType";
import VehicleType from "./VehicleType";

export default interface VehicleSetInfo {
  category: VehicleType;
  sets: Record<SetType, Record<PartType, number>>;
}
