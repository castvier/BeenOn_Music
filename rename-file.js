import { copyFileSync } from 'fs';
import { join } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const oldPath = join(__dirname, 'public', 'assets', 'Screenshot 2024-12-08 at 8.05.26 AM_upscayl_4x_ultrasharp.png');
const newPath = join(__dirname, 'public', 'assets', 'hero-bg.png');

copyFileSync(oldPath, newPath);
