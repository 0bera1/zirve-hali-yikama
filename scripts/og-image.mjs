// Hero görselinden 1200x630 paylaşım görseli üretir: node scripts/og-image.mjs
import sharp from 'sharp';

await sharp('src/assets/hero-hali.jpg')
  .resize(1200, 630, { fit: 'cover', position: 'centre' })
  .jpeg({ quality: 82, mozjpeg: true })
  .toFile('public/og-image.jpg');
console.log('public/og-image.jpg hazır');
