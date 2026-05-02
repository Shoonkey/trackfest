import { useMemo } from "preact/hooks";
import { CheckIcon } from "@phosphor-icons/react";
import SetType from "../../shared/SetType";
import { PartStateDict } from "../../shared/VehicleSetInfo";
import PartState from "../../shared/PartState";
import { getOwnedParts, getPartScoreColor } from "./util";

interface PartScoreProps {
  partType?: SetType; // in case there's ever a different maximum amount of pieces for a given type
  partState: PartStateDict;
}

export default function PartScore({ partState }: PartScoreProps) {
  const MAX_PARTS = useMemo(() => 7, []);

  const ownedParts = getOwnedParts(partState);
  const builtOwnedParts = ownedParts.filter(
    (ownedPart) => ownedPart === PartState.Built,
  );

  return builtOwnedParts.length === MAX_PARTS ? (
    <CheckIcon size={24} color="lightgreen" />
  ) : (
    <p
      style={{
        color: getPartScoreColor(ownedParts, builtOwnedParts),
      }}
    >
      {ownedParts.length} / {MAX_PARTS}
    </p>
  );
}
