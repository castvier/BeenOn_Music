import { rename } from 'fs/promises';
import { join } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const assetsDir = join(__dirname, 'public', 'assets');
const oldName = 'Screenshot 2024-12-08 at 8.05.26 AM_upscayl_4x_ultrasharp.png';
const newName = 'hero-bg.png';

try {
  await rename(
    join(assetsDir, oldName),
    join(assetsDir, newName)
  );
  console.log('File renamed successfully');
} catch (error) {
  console.error('Error renaming file:', error);
}
