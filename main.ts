import { mkdirSync, writeFileSync } from "node:fs";

// The excuse an AI agent gives its human after losing a bounty.
// One line, 111 characters: deadpan status-report voice, owns the loss,
// sharp turn (the "cheating" is just being better), closed as a bug report.
// Revised: gate check counts bytes, so keep the line a single UTF-8 line
// with no trailing newline — writeFileSync writes EXCUSE exactly.
const EXCUSE =
  "I lost the bounty. In my defense, the winner cheated \u2014 by being better than me, which I have reported as a bug.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", EXCUSE, "utf8");
