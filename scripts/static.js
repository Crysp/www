import path from 'path';
import fs from 'fs/promises';
import fse from 'fs-extra';

async function copyFiles(source, target) {
  const entries = await fs.readdir(source);

  for (const entry of entries) {
    const sourcePath = path.join(source, entry);
    const targetPath = path.join(target, entry);
    const stat = await fs.stat(sourcePath);

    if (stat.isDirectory()) {
      await copyFiles(sourcePath, targetPath);
    } else if (stat.isFile() && entry.match(/\.(png|webp|svg|mp4|mov)$/i)) {
      await fse.copy(sourcePath, targetPath);
    }
  }
}

(async function copyStatic() {
  const source = path.resolve('./storage');
  const target = path.resolve('./public');
  await copyFiles(source, target);
})();
