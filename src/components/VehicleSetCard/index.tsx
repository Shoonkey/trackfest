import {
  SpeedometerIcon,
  MedalMilitaryIcon,
  PuzzlePieceIcon,
  TreasureChestIcon,
  LightbulbIcon,
  MoneyWavyIcon,
} from "@phosphor-icons/react";
import { Container } from "./styles";
import SetType from "../../shared/SetType";
import PieceScore from "../PieceScore";
import SetModal from "../SetModal";
import VehicleSetInfo from "../../shared/VehicleSetInfo";
import VehicleType from "../../shared/VehicleType";
import { CyclePieceStateFn } from "../../pages/Homepage";

interface VehicleSetCardProps {
  state: VehicleSetInfo;
  onUpdatePiece: CyclePieceStateFn;
}

export default function VehicleSetCard({
  state,
  onUpdatePiece,
}: VehicleSetCardProps) {
  function getPiecesForSetType(setType: SetType) {
    const piecesForSet = state.sets[setType];
    if (!piecesForSet) return 0;

    return Object.values(piecesForSet).reduce(
      (total, pieces) => (pieces > 0 ? total + 1 : total),
      0,
    );
  }

  return (
    <>
      <Container
        command="show-modal"
        commandFor={`set-modal-${state.category}`}
      >
        <h2 className="title">{VehicleType[state.category]}</h2>
        <ul className="set-state-list">
          <li className="set-state">
            <SpeedometerIcon weight="fill" size={32} className="icon" />
            <PieceScore pieces={getPiecesForSetType(SetType.NitroChemist)} />
          </li>
          <li className="set-state">
            <MedalMilitaryIcon weight="fill" size={32} className="icon" />
            <PieceScore pieces={getPiecesForSetType(SetType.ScoreBreaker)} />
          </li>
          <li className="set-state">
            <PuzzlePieceIcon weight="fill" size={32} className="icon" />
            <PieceScore pieces={getPiecesForSetType(SetType.LootDigger)} />
          </li>
          <li className="set-state">
            <TreasureChestIcon weight="fill" size={32} className="icon" />
            <PieceScore pieces={getPiecesForSetType(SetType.TreasureSniffer)} />
          </li>
          <li className="set-state">
            <LightbulbIcon weight="fill" size={32} className="icon" />
            <PieceScore pieces={getPiecesForSetType(SetType.XpMagnet)} />
          </li>
          <li className="set-state">
            <MoneyWavyIcon weight="fill" size={32} className="icon" />
            <PieceScore pieces={getPiecesForSetType(SetType.BucksMagnet)} />
          </li>
        </ul>
      </Container>
      <SetModal
        id={`set-modal-${state.category}`}
        info={state}
        onUpdatePiece={onUpdatePiece}
      />
    </>
  );
}
