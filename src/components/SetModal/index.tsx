import { useRef } from "preact/hooks";
import Modal from "../Modal";
import VehicleSetInfo from "../../shared/VehicleSetInfo";
import VehicleType from "../../shared/VehicleType";
import SetType from "../../shared/SetType";
import { BuildedPart, Table, UnbuildedPart } from "./style";
import PartType from "../../shared/PartType";

interface SetModalProps {
  id: string;
  state: VehicleSetInfo;
}

export default function SetModal({ id, state }: SetModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const data = Object.values(state.sets);

  const partTypeHeaders = Object.values(PartType).map((part) => {
    if (typeof part !== "number") return;
    return <th>{PartType[part as number]}</th>;
  });

  const headers = Object.values(SetType).map((setType) => {
    if (typeof setType !== "number") return;
    return (
      <tr>
        <th>{SetType[setType]}</th>
        {Object.values(data[setType]).map((pieces) => {
          if (pieces === 0) return <td></td>;
          if (pieces === 1) return <UnbuildedPart />;
          if (pieces === 2) return <BuildedPart />;
        })}
      </tr>
    );
  });

  return (
    <Modal id={id} title={VehicleType[state.category]} ref={dialogRef}>
      <Table>
        <thead>
          <tr>
            <th>Set</th>
            {partTypeHeaders}
          </tr>
        </thead>

        <tbody>{headers}</tbody>
      </Table>
    </Modal>
  );
}
