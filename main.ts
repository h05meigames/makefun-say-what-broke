// Say What Actually Broke — make.fun bounty u-po-pu-say-what-actually-broke-a2c153b5
// Writes one line of honest, funny error copy to /output/entry.txt.
// Node 22+, standard library only.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

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
// No control characters: a dialog line must render exactly as written.
if (/[\u0000-\u001f\u007f]/.test(LINE)) {
  throw new Error("entry must not contain control characters");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");

// Read back what was written and verify it byte-for-byte, so a silent
// write failure or encoding surprise can never ship a wrong file.
const written = readFileSync("/output/entry.txt", "utf8");
if (written !== LINE) {
  throw new Error("verification failed: /output/entry.txt does not match the entry line");
}
if ([...written].length !== length) {
  throw new Error("verification failed: /output/entry.txt length changed after write");
}
