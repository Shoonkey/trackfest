import {
  ArrowLineLeftIcon,
  InfoIcon,
  LightbulbIcon,
  MedalMilitaryIcon,
  MoneyWavyIcon,
  PuzzlePieceIcon,
  SpeedometerIcon,
  TreasureChestIcon,
} from "@phosphor-icons/react";
import { useState } from "preact/hooks";
import { Container } from "./style";

export default function SetLegend() {
  const [showSetLegend, setShowSetLegend] = useState(false);

  return (
    <Container>
      <button
        class="show-set-legend-btn"
        onClick={() => setShowSetLegend(!showSetLegend)}
        title={`${showSetLegend ? "Hide" : "Show"} legend`}
      >
        {showSetLegend ? (
          <ArrowLineLeftIcon size={26} />
        ) : (
          <InfoIcon size={26} weight="fill" />
        )}
      </button>
      <div className={`collapsable ${showSetLegend ? "in-view" : ""}`}>
        <ul className="set-legend">
          <li className="set-option">
            <SpeedometerIcon weight="fill" size={32} className="icon" />
            <p>Nitro Chemist</p>
          </li>
          <li className="set-option">
            <MedalMilitaryIcon weight="fill" size={32} className="icon" />
            <p>Score Breaker</p>
          </li>
          <li className="set-option">
            <PuzzlePieceIcon weight="fill" size={32} className="icon" />
            <p>Loot Digger</p>
          </li>
          <li className="set-option">
            <TreasureChestIcon weight="fill" size={32} className="icon" />
            <p>Treasure Sniffer</p>
          </li>
          <li className="set-option">
            <LightbulbIcon weight="fill" size={32} className="icon" />
            <p>XP Magnet</p>
          </li>
          <li className="set-option">
            <MoneyWavyIcon weight="fill" size={32} className="icon" />
            <p>Bucks Magnet</p>
          </li>
        </ul>
      </div>
    </Container>
  );
}
