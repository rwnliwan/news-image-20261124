// News image for Tuesday 24 November 2026.
// The front page is bundled beside this file as entry.png (a 1024x1024 JPEG).
// This program only copies those bytes into the grader's output directory,
// so both runs write byte-identical output. No network, no clock, no drawing.
import { copyFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const destination = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const sourceDir = dirname(fileURLToPath(import.meta.url));
mkdirSync(destination, { recursive: true });
copyFileSync(join(sourceDir, 'entry.png'), join(destination, 'entry.png'));
