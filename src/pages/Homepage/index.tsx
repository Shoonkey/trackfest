import { useAtom } from "jotai";
import { themeAtom } from "../../global-state";
import SetLegend from "../../components/SetLegend";
import { Container, Deck, Header } from "./style";
import VehicleSetCard from "../../components/VehicleSetCard";
import VehicleSetInfo from "../../shared/VehicleSetInfo";
import { useEffect, useState } from "preact/hooks";
import { getSets } from "../../services/HomepageService";

export default function Homepage() {
  const [appTheme, setAppTheme] = useAtom(themeAtom);
  const [vehicleSetInfo, setVehicleSetInfo] = useState<VehicleSetInfo[]>([]);

  useEffect(() => {
    getSets().then((data) => setVehicleSetInfo(data));
  }, []);

  const vehicleSetCards = vehicleSetInfo.map((set) => (
    <VehicleSetCard key={set.category} state={set} />
  ));

  return (
    <Container className={appTheme === "auto" ? "" : `${appTheme}-theme`}>
      <Header>
        <h1 className="title">TrackFest</h1>
        <SetLegend />
      </Header>
      <Deck>{vehicleSetCards}</Deck>
    </Container>
  );
}
