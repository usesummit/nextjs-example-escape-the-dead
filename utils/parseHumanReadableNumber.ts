export const ABBREVIATIONS = Object.freeze({
  K: 1000,
  k: 1000,
  M: 1_000,
  MM: 1_000_000,
  m: 1_000_000,
  mm: 1_000_000,
  B: 1_000_000_000,
  b: 1_000_000_000,
  T: 1_000_000_000_000,
  t: 1_000_000_000_000,
});

export default function parseHumanReadableNumber(raw: string): number {
  const regex = new RegExp(
    `^(-)?((?:[0-9]{1,})(?:[_,][0-9]{3})*)?(?:\\.((?:[0-9]{1,})(?:_[0-9]{3})*))?(${Object.keys(
      ABBREVIATIONS
    ).join("|")})?$`
  );

  const match = raw.match(regex);

  if (!match) {
    throw new Error("Invalid format for " + raw);
  }

  const [, negative, rawInteger = "0", rawFraction = "", abbreviation] = match;

  const integerWithoutSeparator = rawInteger.replace(/[_,]/g, "");

  const fractionWithoutSeparator = rawFraction
    ? rawFraction.replace(/_/g, "")
    : "";

  const integer = parseInt(integerWithoutSeparator, 10);
  const fraction = rawFraction ? parseInt(fractionWithoutSeparator, 10) : null;

  const number =
    (negative ? -1 : 1) *
    (integer +
      (fraction
        ? fraction / Math.pow(10, fractionWithoutSeparator.length)
        : 0));

  if (abbreviation) {
    return number * ABBREVIATIONS[abbreviation];
  }

  return number;
}
