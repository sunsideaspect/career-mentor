import { readFile } from "node:fs/promises";

const html = await readFile("index.html", "utf8");
const app = await readFile("app.js", "utf8");
const config = await readFile("config.js", "utf8");
const failures = [];

for (const id of ["paths", "steps", "parents", "faq", "consultation", "privacy", "consultation-form"]) {
  if (!html.includes(`id="${id}"`)) failures.push(`Missing #${id}`);
}

for (const event of ["page_view", "cta_click", "faq_open", "consultation_submitted"]) {
  if (!app.includes(`"${event}"`)) failures.push(`Missing analytics event ${event}`);
}

if (!/вступ добровільний/i.test(html)) failures.push("Missing voluntary-entry notice");
if (!/законн(ого|ий) представник/i.test(html)) failures.push("Missing legal-representative rule");
if (!html.includes("не гарантує зарахування")) failures.push("Missing no-guarantee notice");
if (!config.includes('consultationFormEndpoint: ""')) failures.push("Repository endpoint must remain empty");
if (/100% працевлаштування|500 000\+|170 000 грн|керівник у 21/i.test(html)) {
  failures.push("Unverified promotional claim detected");
}

if (failures.length) {
  console.error(failures.map((item) => `FAIL: ${item}`).join("\n"));
  process.exit(1);
}

console.log("OK: landing structure, consent safeguards and claim policy verified.");
