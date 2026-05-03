import { useCallback, useEffect, useRef, useState } from "preact/hooks";
import Modal from "../Modal";
import VehicleSetInfo, { SetPartStateDict } from "../../shared/VehicleSetInfo";
import VehicleType from "../../shared/VehicleType";
import SetType from "../../shared/SetType";
import PartType from "../../shared/PartType";
import { HelperText, Table } from "./style";
import { getSetTypeLabel } from "./util";
import SetPieceState from "../SetPieceState";
import { CyclePieceStateFn } from "../../pages/Homepage";
import PartState from "../../shared/PartState";
import State from "./State";
import { getPieceStateColor, getVehicleTypeLabel } from "../../shared/util";

interface SetModalProps {
  id: string;
  info: VehicleSetInfo;
  onUpdatePiece: CyclePieceStateFn;
}

export default function SetModal({ id, info, onUpdatePiece }: SetModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [data, setData] = useState<SetPartStateDict>(info.sets);

  const updateData = useCallback((set: SetType, part: PartType) => {
    setData((d) => {
      const newData = { ...d };
      const possiblePartStates = Object.values(PartState).filter(
        (s) => typeof s === "number",
      ).length;

      newData[set][part] += 1;
      newData[set][part] %= possiblePartStates;
      return newData;
    });
  }, []);

  const partTypeHeaders = Object.values(PartType).map((part) => {
    if (typeof part !== "number") return;
    return <th>{PartType[part as number]}</th>;
  });

  const headers = Object.values(SetType).map((setType) => {
    if (typeof setType !== "number") return;
    return (
      <tr>
        <th>{getSetTypeLabel(setType)}</th>
        {Object.values(data[setType]).map((pieceState, pieceIdx) => (
          <td>
            <SetPieceState
              state={pieceState}
              onClick={() => updateData(setType, pieceIdx)}
            />
          </td>
        ))}
      </tr>
    );
  });

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    // makes it so the dialog closes if its backdrop is clicked on
    dialog.addEventListener("click", (e) => {
      if (e.target === dialog) dialog.close();
    });
  }, [dialogRef]);

  return (
    <Modal
      id={id}
      title={getVehicleTypeLabel(info.category)}
      ref={dialogRef}
      onClose={() => onUpdatePiece(info.category, data)}
    >
      <Table>
        <thead>
          <tr>
            <th>Set / Piece</th>
            {partTypeHeaders}
          </tr>
        </thead>
        <tbody>{headers}</tbody>
      </Table>
      <HelperText>
        <p>Click on a cell to switch between</p>
        <div className="states">
          <State
            color={getPieceStateColor(PartState.Starter)}
            label="Starter"
          />
          <State
            color={getPieceStateColor(PartState.Building)}
            label="Building"
          />
          <State color={getPieceStateColor(PartState.Built)} label="Built" />
        </div>
      </HelperText>
    </Modal>
  );
}
