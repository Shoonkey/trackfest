import { useMemo } from "preact/hooks";
import { CheckIcon } from "@phosphor-icons/react";
import SetType from "../../shared/SetType";

interface PieceScoreProps {
  pieceType?: SetType; // in case there's ever a different maximum amount of pieces for a given type
  pieces: number;
}

export default function PieceScore({ pieces }: PieceScoreProps) {
  const maxPieces = useMemo(() => 7, []);

  return pieces === maxPieces ? (
    <CheckIcon size={24} color="lightgreen" />
  ) : (
    <p>
      {pieces} / {maxPieces}
    </p>
  );
}
