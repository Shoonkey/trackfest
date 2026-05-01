import PartType from "./PartType";
import PartState from "./PartState";
import SetType from "./SetType";
import VehicleType from "./VehicleType";

export type PartStateDict = Record<PartType, PartState>;
export type SetPartStateDict = Record<SetType, PartStateDict>;

export default interface VehicleSetInfo {
  category: VehicleType;
  sets: SetPartStateDict;
}
