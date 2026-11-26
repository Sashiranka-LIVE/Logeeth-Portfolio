import { cpSync, mkdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import './check.mjs';

const root = fileURLToPath(new URL('../', import.meta.url));
const out = path.join(root, '_site');
mkdirSync(out, { recursive: true });
for (const item of ['index.html', '404.html', 'robots.txt', '.nojekyll', 'assets', 'doc']) {
  cpSync(path.join(root, item), path.join(out, item), { recursive: true });
}
console.log('Static deployment prepared in _site/');
