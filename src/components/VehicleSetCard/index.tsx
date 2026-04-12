import {
  SpeedometerIcon,
  MedalMilitaryIcon,
  PuzzlePieceIcon,
  TreasureChestIcon,
  LightbulbIcon,
  MoneyWavyIcon,
} from "@phosphor-icons/react";
import VehicleSetState from "../../shared/VehicleSetState";
import { Container } from "./styles";
import PieceType from "../../shared/PieceType";
import PieceScore from "../PieceScore";

interface VehicleSetCardProps {
  title: string;
  state: VehicleSetState;
}

export default function VehicleSetCard({ title, state }: VehicleSetCardProps) {
  return (
    <Container>
      <h2 className="title">{title}</h2>
      <ul className="set-state-list">
        <li className="set-state">
          <SpeedometerIcon weight="fill" size={32} className="icon" />
          <PieceScore pieces={state[PieceType.NitroChemist]} />
        </li>
        <li className="set-state">
          <MedalMilitaryIcon weight="fill" size={32} className="icon" />
          <PieceScore pieces={state[PieceType.ScoreBreaker]} />
        </li>
        <li className="set-state">
          <PuzzlePieceIcon weight="fill" size={32} className="icon" />
          <PieceScore pieces={state[PieceType.LootDigger]} />
        </li>
        <li className="set-state">
          <TreasureChestIcon weight="fill" size={32} className="icon" />
          <PieceScore pieces={state[PieceType.TreasureSniffer]} />
        </li>
        <li className="set-state">
          <LightbulbIcon weight="fill" size={32} className="icon" />
          <PieceScore pieces={state[PieceType.XpMagnet]} />
        </li>
        <li className="set-state">
          <MoneyWavyIcon weight="fill" size={32} className="icon" />
          <PieceScore pieces={state[PieceType.BucksMagnet]} />
        </li>
      </ul>
    </Container>
  );
}
