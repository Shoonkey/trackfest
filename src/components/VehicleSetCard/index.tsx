import {
  SpeedometerIcon,
  MedalMilitaryIcon,
  PuzzlePieceIcon,
  TreasureChestIcon,
  LightbulbIcon,
  MoneyWavyIcon,
} from "@phosphor-icons/react";
import SetType from "../../shared/SetType";
import PartScore from "../PartScore";
import SetModal from "../SetModal";
import VehicleSetInfo from "../../shared/VehicleSetInfo";
import { getVehicleTypeLabel } from "../../shared/util";
import { CyclePieceStateFn } from "../../pages/Homepage";
import { Container } from "./styles";

interface VehicleSetCardProps {
  state: VehicleSetInfo;
  onUpdatePiece: CyclePieceStateFn;
}

export default function VehicleSetCard({
  state,
  onUpdatePiece,
}: VehicleSetCardProps) {
  return (
    <>
      <Container 
        command="show-modal"
        commandFor={`set-modal-${state.category}`}
      >
        <h2 className="title">{getVehicleTypeLabel(state.category)}</h2>
        <ul className="set-state-list">
          <li className="set-state">
            <SpeedometerIcon weight="fill" size="1.35em" className="icon" />
            <PartScore partState={state.sets[SetType.NitroChemist]} />
          </li>
          <li className="set-state">
            <MedalMilitaryIcon weight="fill" size="1.35em" className="icon" />
            <PartScore partState={state.sets[SetType.ScoreBreaker]} />
          </li>
          <li className="set-state">
            <PuzzlePieceIcon weight="fill" size="1.35em" className="icon" />
            <PartScore partState={state.sets[SetType.LootDigger]} />
          </li>
          <li className="set-state">
            <TreasureChestIcon weight="fill" size="1.35em" className="icon" />
            <PartScore partState={state.sets[SetType.TreasureSniffer]} />
          </li>
          <li className="set-state">
            <LightbulbIcon weight="fill" size="1.35em" className="icon" />
            <PartScore partState={state.sets[SetType.XpMagnet]} />
          </li>
          <li className="set-state">
            <MoneyWavyIcon weight="fill" size="1.35em" className="icon" />
            <PartScore partState={state.sets[SetType.BucksMagnet]} />
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
