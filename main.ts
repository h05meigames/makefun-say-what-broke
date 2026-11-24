// Say What Actually Broke — make.fun bounty u-po-pu-say-what-actually-broke-a2c153b5
// Writes one line of honest, funny error copy to /output/entry.txt.
// Node 22+, standard library only.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "We deployed on a Friday and broke the site. The server did exactly what we told it to. We're rolling it back — try again in a few minutes.";

// The gate: /output/entry.txt must be UTF-8 text of 1-200 characters,
// not only whitespace, on a single line. Count code points, not UTF-16
// code units, so the check matches what a reader sees.
const length = [...LINE].length;
if (length < 1 || length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${length}`);
}
if (LINE.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("entry must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
