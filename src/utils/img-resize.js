import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const resizeImages = async (folderPath, targetWidth) => {
  const outputFolder = path.join(folderPath, 'output');
  if (!fs.existsSync(outputFolder)) fs.mkdirSync(outputFolder);

  const files = fs.readdirSync(folderPath);

  for (const file of files) {
    const filePath = path.join(folderPath, file);
    const image = sharp(filePath);
    const metadata = await image.metadata();
    const { width, height } = metadata;
    const targetHeight = Math.floor((targetWidth / width) * height);
    await image
      .resize(targetWidth, targetHeight)
      .toFile(path.join(outputFolder, file));
  }
};

resizeImages('./public/images/bag', 800);
