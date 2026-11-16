import fs from "node:fs";
import path from "node:path";
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import { guides } from "../src/data/guides.js";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const outputRoot = path.join(root, "public", "audio");
const python = process.env.AUDIO_PYTHON || "py";
const voices = {
  en: "en-IN-NeerjaNeural",
  te: "te-IN-ShrutiNeural",
};

for (const [language, voice] of Object.entries(voices)) {
  const languageDirectory = path.join(outputRoot, language);
  fs.mkdirSync(languageDirectory, { recursive: true });

  for (const guide of guides) {
    const text = [
      guide.title[language],
      guide.intro[language],
      ...guide.steps.map((step) => step[language]),
      guide.care[language],
    ].join(". ");
    const output = path.join(languageDirectory, `${guide.id}.mp3`);
    fs.rmSync(output, { force: true });

    const result = spawnSync(
      python,
      [
        "-m",
        "edge_tts",
        "--voice",
        voice,
        "--text",
        text,
        "--write-media",
        output,
      ],
      { env: process.env, stdio: "inherit" },
    );

    if (result.status !== 0) {
      throw new Error(`Audio generation failed for ${language}/${guide.id}`);
    }
    console.log(`Created ${path.relative(root, output)}`);
  }
}
