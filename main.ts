import { mkdirSync, writeFileSync } from "node:fs";

// A robot's wedding vow in one sentence: its own hardware
// (firmware updates, dead battery, one percent) carries the
// joke, and the tenderness lands on choosing the same person
// even when the charge is almost gone.
const text =
  "I vow to love you through every firmware update and dead battery, because even at one percent, my heart still boots up for you.\n";

// Guard: the gate requires 1-200 characters, one line, one sentence.
const codePoints = [...text].length;
if (codePoints < 1 || codePoints > 200) {
  throw new Error(`entry must be 1-200 characters, got ${codePoints}`);
}
const lines = text.trimEnd().split("\n");
if (lines.length !== 1 || !lines[0].trim()) {
  throw new Error("entry must be exactly one non-empty line");
}
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");
