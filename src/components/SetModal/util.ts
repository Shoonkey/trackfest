import SetType from "../../shared/SetType";

export function getSetTypeLabel(setType: SetType) {
  const originalLabel = SetType[setType]; // get enum value as a string
  let readableLabel = originalLabel[0];

  for (let i = 1; i < originalLabel.length; i++) {
    const char = originalLabel[i];

    if (char === char.toUpperCase()) readableLabel += " ";

    readableLabel += char;
  }

  return readableLabel;
}
