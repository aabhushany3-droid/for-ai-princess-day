import { readFile } from "node:fs/promises";
import vm from "node:vm";

const html = await readFile(new URL("./index.html", import.meta.url), "utf8");
const app = await readFile(new URL("./app.js", import.meta.url), "utf8");
const css = await readFile(new URL("./styles.css", import.meta.url), "utf8");
const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map((match) => match[1]);
const duplicateIds = ids.filter((id, index) => ids.indexOf(id) !== index);
const fragmentLinks = [...html.matchAll(/\bhref="#([^"]+)"/g)].map((match) => match[1]);
const missingTargets = fragmentLinks.filter((id) => !ids.includes(id));

function readArray(name) {
  const match = app.match(new RegExp(`const ${name} = (\\[[\\s\\S]*?\\]);`));
  if (!match) throw new Error(`Could not find the ${name} content array.`);
  return vm.runInNewContext(match[1]);
}

const copy = `${html}\n${app}`.toLowerCase();
const requiredDetails = ["Namira Kayla Aurelia", "Princess Day", "November 5", "18 November", "May 6", "Northern Lights", "sushi", "pizza", "noodles", "dim sum", "matcha"];
const missingDetails = requiredDetails.filter((detail) => !copy.includes(detail.toLowerCase()));
const braceBalance = [...css].reduce((balance, character) => balance + (character === "{" ? 1 : character === "}" ? -1 : 0), 0);
const counts = {
  reassuranceCards: readArray("truths").length,
  personalReasons: readArray("reasons").length,
  favoriteThings: readArray("happyThings").length,
  difficultDayNotes: readArray("comfortNotes").length
};
const hasBasics = html.includes('name="description"') && html.includes("<main") && html.includes("<nav") && css.includes("prefers-reduced-motion");
const results = { duplicateIds, brokenFragmentLinks: missingTargets, missingPersonalDetails: missingDetails, counts, balancedCss: braceBalance === 0, accessibilityAndMetadataBasics: hasBasics, hasPlaceholderText: /\b(TODO|FIXME|lorem ipsum|placeholder)\b/i.test(`${html}\n${app}\n${css}`) };
console.log(JSON.stringify(results, null, 2));

if (duplicateIds.length || missingTargets.length || missingDetails.length || counts.reassuranceCards !== 10 || counts.personalReasons !== 20 || counts.favoriteThings !== 8 || !results.balancedCss || !hasBasics || results.hasPlaceholderText) {
  process.exitCode = 1;
}
