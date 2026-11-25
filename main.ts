// One-Line Office Jokes — entry program for make.fun
// Writes a single one-line office joke to /output/entry.txt.
//
// Gate (from the competition kit): /output/entry.txt must be UTF-8 text
// of 1 to 199 characters, on a single line, and not only whitespace.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const JOKE =
  "The printer only ever jams when I am already late, which is how I know it is the most punctual employee in this office.";

const OUT = "/output/entry.txt";

function validate(text: string): void {
  if (typeof text !== "string") throw new Error("entry is not a string");
  if (text.length < 1 || text.length > 199) {
    throw new Error(`entry length ${text.length} is outside the 1-199 gate`);
  }
  if (text.trim().length === 0) {
    throw new Error("entry is only whitespace");
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("entry must be a single line");
  }
  // Must be encodable as UTF-8 (round-trip check).
  const bytes = Buffer.from(text, "utf8");
  if (bytes.toString("utf8") !== text) {
    throw new Error("entry is not valid UTF-8 text");
  }
}

validate(JOKE);

mkdirSync(dirname(OUT), { recursive: true });
writeFileSync(OUT, JOKE, "utf8");

// Re-read what actually landed on disk and validate that, not just the
// in-memory string: catches encoding or newline surprises from the write.
const written = readFileSync(OUT, "utf8");
if (written !== JOKE) {
  throw new Error("written entry.txt does not match the joke exactly");
}
validate(written);
const byteLength = Buffer.byteLength(written, "utf8");
if (byteLength > 199) {
  throw new Error(`entry is ${byteLength} bytes, over the 199-byte ceiling`);
}

console.log(`Wrote ${JOKE.length} characters to ${OUT}`);
console.log(JOKE);
