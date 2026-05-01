import { useCallback, useRef, useState } from "preact/hooks";
import Modal from "../Modal";
import VehicleSetInfo, { SetPartStateDict } from "../../shared/VehicleSetInfo";
import VehicleType from "../../shared/VehicleType";
import SetType from "../../shared/SetType";
import PartType from "../../shared/PartType";
import { Table } from "./style";
import { getSetTypeLabel } from "./util";
import SetPieceState from "../SetPieceState";
import { CyclePieceStateFn } from "../../pages/Homepage";
import PartState from "../../shared/PartState";

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

  return (
    <Modal
      id={id}
      title={VehicleType[info.category]}
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
    </Modal>
  );
}
