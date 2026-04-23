import { useAtom } from "jotai";
import { themeAtom } from "../../global-state";
import SetLegend from "../../components/SetLegend";
import { Container, Deck, Header } from "./style";
import VehicleSetCard from "../../components/VehicleSetCard";
import VehicleSetInfo from "../../shared/VehicleSetInfo";
import VehicleType from "../../shared/VehicleType";

export default function Homepage() {
  const [appTheme, setAppTheme] = useAtom(themeAtom);

  const vehicleSets: VehicleSetInfo[] = [
    {
      category: VehicleType.Street,
      sets: [
        [1, 2, 1, 1, 2, 1, 1],
        [0, 1, 0, 1, 1, 1, 0],
        [1, 1, 1, 1, 1, 1, 1],
        [1, 0, 1, 0, 2, 1, 1],
        [1, 1, 1, 0, 2, 1, 0],
        [1, 0, 1, 1, 1, 1, 0],
      ],
    },
    {
      category: VehicleType.Hypercar,
      sets: [
        [0, 0, 0, 0, 0, 0, 0],
        [0, 1, 0, 1, 1, 1, 0],
        [1, 1, 1, 2, 1, 1, 1],
        [1, 0, 1, 0, 1, 1, 1],
        [1, 1, 1, 0, 1, 1, 0],
        [0, 1, 1, 1, 1, 1, 0],
      ],
    },
  ];

  return (
    <Container className={appTheme === "auto" ? "" : `${appTheme}-theme`}>
      <Header>
        <h1 className="title">TrackFest</h1>
        <SetLegend />
      </Header>
      <Deck>
        <VehicleSetCard state={vehicleSets[0]} />
        <VehicleSetCard state={vehicleSets[1]} />
      </Deck>
    </Container>
  );
}
