import { invoke } from "@tauri-apps/api/core";
import VehicleSetInfo from "../shared/VehicleSetInfo";

export async function getSets(): Promise<VehicleSetInfo[]> {
  let res = await invoke("get_sets");
  return JSON.parse(res as string);
}

export async function updateSets(data: VehicleSetInfo[]) {
  return await invoke("update_sets", { content: JSON.stringify(data) });
}
