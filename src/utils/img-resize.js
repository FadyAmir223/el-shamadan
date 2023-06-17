import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const rootDir = process.cwd();
const srcDir = './public/src-images';
const outDir = 'images';

// processImg(path.join(rootDir, srcDir));
// processImg(path.join(rootDir, srcDir, 'logo.png'));

// processImg(path.join(rootDir, srcDir, 'character'), [320]);
// processImg(path.join(rootDir, srcDir, 'item/thumbnail.webp'), [945]);

// ############################################################

function processImg(imagePath, resolutions) {
  const isDirectory = fs.lstatSync(imagePath).isDirectory();

  if (isDirectory) {
    const files = fs.readdirSync(imagePath);

    files.forEach((file) => {
      const filePath = path.join(imagePath, file);
      processImg(filePath, resolutions);
    });
  } else {
    const fileExtension = path.extname(imagePath);
    const fileName = path.basename(imagePath, fileExtension);
    const outputDir = path.dirname(imagePath.replace('src-images', outDir));

    if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });

    const outputExtension = '.webp';

    resolutions = resolutions || [null];

    resolutions.forEach((resolution) => {
      const outputName = resolution
        ? `${fileName}-${resolution}${outputExtension}`
        : `${fileName}${outputExtension}`;
      const outputPath = path.join(outputDir, outputName);

      console.log(outputPath);
      sharp(imagePath)
        .resize(resolution)
        .webp({ quality: 70 })
        .toFile(outputPath);
    });
  }
}
