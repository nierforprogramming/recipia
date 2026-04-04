export const splitInstructions = (text) => {
  if (!text) return [];

  return text
    .split(/(?<=[.?!])\s+/)
    .map((s) => s.trim())
    .filter(Boolean);
};
