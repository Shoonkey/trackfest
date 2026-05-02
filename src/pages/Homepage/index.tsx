import { useAtom, useAtomValue } from "jotai";
import { themeAtom } from "../../global-state";
import SetLegend from "../../components/SetLegend";
import { Container, Deck, Header } from "./style";
import VehicleSetCard from "../../components/VehicleSetCard";
import VehicleSetInfo, { SetPartStateDict } from "../../shared/VehicleSetInfo";
import { useCallback, useEffect, useMemo, useState } from "preact/hooks";
import { getSets, updateSets } from "../../services/HomepageService";
import VehicleType from "../../shared/VehicleType";
import ToggleAllVehiclesCard from "../../components/ToggleAllVehiclesCard";
import clsx from "clsx";
import ChangeThemeButton from "../../components/ChangeThemeButton";

export type CyclePieceStateFn = (
  category: VehicleType,
  data: SetPartStateDict,
) => void;

export default function Homepage() {
  const appTheme = useAtomValue(themeAtom);
  const [vehicleSetInfo, setVehicleSetInfo] = useState<VehicleSetInfo[]>([]);
  const [showAllVehicleTypes, setShowAllVehicleTypes] = useState(false);

  const vehiclesListed = useMemo(() => {
    if (showAllVehicleTypes) return vehicleSetInfo;

    const removeCategories: VehicleType[] = [
      VehicleType.Demolition,
      VehicleType.Plane,
      VehicleType.Powerboat,
    ];

    return vehicleSetInfo.filter(
      (vehicle) => !removeCategories.includes(vehicle.category),
    );
  }, [vehicleSetInfo, showAllVehicleTypes]);

  const cyclePieceState = useCallback<CyclePieceStateFn>((category, data) => {
    setVehicleSetInfo((info) => {
      const newInfo = [...info];
      const objToUpdate = newInfo.find((obj) => obj.category === category)!;
      objToUpdate.sets = data;
      return newInfo;
    });
  }, []);

  useEffect(() => {
    getSets().then((data) => setVehicleSetInfo(data));
  }, []);

  useEffect(() => {
    updateSets(vehicleSetInfo);
  }, [vehicleSetInfo]);

  return (
    <Container
      className={clsx(`${appTheme}-theme`, showAllVehicleTypes && "scrollable")}
    >
      <Header>
        <h1 className="title">TrackFest</h1>
        <SetLegend />
        <ChangeThemeButton />
      </Header>
      <Deck>
        {vehiclesListed.map((set) => (
          <VehicleSetCard
            key={set.category}
            state={set}
            onUpdatePiece={cyclePieceState}
          />
        ))}
        <ToggleAllVehiclesCard
          showing={showAllVehicleTypes}
          onClick={() => setShowAllVehicleTypes(!showAllVehicleTypes)}
        />
      </Deck>
    </Container>
  );
}
