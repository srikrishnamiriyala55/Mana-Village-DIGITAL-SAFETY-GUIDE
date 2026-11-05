import assert from "node:assert/strict";
import { guides } from "../src/data/guides.js";
import { scenarios } from "../src/data/scenarios.js";
import { quizBank, makeAttempt } from "../src/data/quiz.js";
import { ui } from "../src/data/translations.js";
import { services, videos, helpSituations } from "../src/data/resources.js";
function bilingual(v) {
  if (!v || typeof v !== "object") return;
  if ("en" in v || "te" in v) {
    assert.equal(typeof v.en, "string");
    assert.equal(typeof v.te, "string");
    assert(v.en.trim() && v.te.trim());
  } else Object.values(v).forEach(bilingual);
}
bilingual({
  guides,
  scenarios,
  quizBank,
  ui,
  services,
  videos,
  helpSituations,
});
assert(guides.length >= 8);
assert(scenarios.length >= 8);
assert(quizBank.length >= 20);
for (const g of guides) {
  assert(g.steps.length >= 3);
  assert(g.sourceUrl.startsWith("https://"));
  assert(g.options.length >= 2);
}
for (const s of scenarios) {
  assert.equal(s.choices.length, s.feedback.length);
  assert(s.choices.length >= 2);
  assert(s.sign.en && s.next.te);
}
for (const q of quizBank) {
  assert(q.options.length >= 3);
  assert(q.correct < q.options.length);
}
for (let i = 0; i < 40; i++) {
  const a = makeAttempt();
  assert.equal(a.items.length, 10);
  assert.equal(new Set(a.items.map((x) => x.id)).size, 10);
  a.items.forEach((x) => assert.deepEqual([...x.order].sort(), [0, 1, 2]));
}
for (const r of services) assert(new URL(r.url).protocol === "https:");
console.log(
  "Content checks passed: 8 bilingual guides, 8 scenarios, 20 quiz questions, resources and attempt integrity.",
);
