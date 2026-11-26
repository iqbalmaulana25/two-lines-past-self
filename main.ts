// Two Lines to Your Past Self
// Writes a two-line warning to /output/entry.txt
// (MAKEFUN_OUTPUT_DIR overrides /output).
// Gate: UTF-8 text, 1..280 characters, exactly two lines.
import { mkdirSync, writeFileSync } from "node:fs";

const line1 =
  "At nineteen, don't take the internship that pays in 'exposure' — rent doesn't accept exposure, and neither does your landlord.";
const line2 =
  "Saying no that summer is what finally taught me my time had a price, and I've charged for it ever since.";
const text = `${line1}\n${line2}`;

if (text.split("\n").length !== 2 || text.trim().length === 0 || text.length + 1 > 280) {
  throw new Error(`entry breaks the gate: ${text.length} characters`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, text + "\n", "utf8");
console.log(text);
