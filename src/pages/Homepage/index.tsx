import { useAtom } from "jotai";
import { themeAtom } from "../../global-state";
import SetLegend from "../../components/SetLegend";
import { Container, Header } from "./style";

export default function Homepage() {
  const [appTheme, setAppTheme] = useAtom(themeAtom);

  return (
    <Container className={appTheme === "auto" ? "" : `${appTheme}-theme`}>
      <Header>
        <h1 className="title">TrackFest</h1>
        <SetLegend />
      </Header>
    </Container>
  );
}
