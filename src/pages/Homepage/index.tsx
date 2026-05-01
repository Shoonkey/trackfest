import { useAtom } from "jotai";
import { themeAtom } from "../../global-state";
import SetLegend from "../../components/SetLegend";
import { Container, Deck, Header } from "./style";
import VehicleSetCard from "../../components/VehicleSetCard";
import VehicleSetInfo, { SetPartStateDict } from "../../shared/VehicleSetInfo";
import { useCallback, useEffect, useState } from "preact/hooks";
import { getSets, updateSets } from "../../services/HomepageService";
import VehicleType from "../../shared/VehicleType";

export type CyclePieceStateFn = (category: VehicleType, data: SetPartStateDict) => void;

export default function Homepage() {
  const [appTheme, setAppTheme] = useAtom(themeAtom);
  const [vehicleSetInfo, setVehicleSetInfo] = useState<VehicleSetInfo[]>([]);

  const cyclePieceState = useCallback<CyclePieceStateFn>(
    (category, data) => {
      setVehicleSetInfo((info) => {
        const newInfo =[...info];
        const objToUpdate = newInfo.find(obj => obj.category === category)!;
        objToUpdate.sets = data;
        return newInfo;
      });
    },
    [],
  );

  useEffect(() => {
    getSets().then((data) => setVehicleSetInfo(data));
  }, []);

  useEffect(() => {
    updateSets(vehicleSetInfo);
  }, [vehicleSetInfo]);

  return (
    <Container className={appTheme === "auto" ? "" : `${appTheme}-theme`}>
      <Header>
        <h1 className="title">TrackFest</h1>
        <SetLegend />
      </Header>
      <Deck>
        {vehicleSetInfo.map((set) => (
          <VehicleSetCard key={set.category} state={set} onUpdatePiece={cyclePieceState} />
        ))}
      </Deck>
    </Container>
  );
}
