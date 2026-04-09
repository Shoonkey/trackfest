import { useAtomValue } from "jotai";
import { themeAtom } from "../../global-state";
import { Container, Header } from "./style";

export default function Homepage() {
  const appTheme = useAtomValue(themeAtom);

  return (
    <Container className={appTheme === "auto" ? "" : `${appTheme}-theme`}>
      <Header>
        <h1 className="title">TrackerFest</h1>
        <div className="map-legend-container">
          <ul className="map-legend">
            <li></li>
          </ul>
          <button class="show-legend-btn">Show legend</button>
        </div>
      </Header>
    </Container>
  );
}
