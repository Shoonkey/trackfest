import { useAtom } from "jotai";
import { themeAtom } from "../../global-state";
import SetLegend from "../../components/SetLegend";
import { Container, Deck, Header } from "./style";
import VehicleSetCard from "../../components/VehicleSetCard";

export default function Homepage() {
  const [appTheme, setAppTheme] = useAtom(themeAtom);

  return (
    <Container className={appTheme === "auto" ? "" : `${appTheme}-theme`}>
      <Header>
        <h1 className="title">TrackFest</h1>
        <SetLegend />
      </Header>
      <Deck>
        <VehicleSetCard title="Street I" state={[6, 6, 6, 6, 6, 6, 5]} />
        <VehicleSetCard title="Hypercar" state={[0, 2, 4, 6, 6, 0, 5]} />
      </Deck>
    </Container>
  );
}
