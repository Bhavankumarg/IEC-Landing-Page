// pages/api/process-image.js
import sharp from 'sharp';
import path from 'path';
import fs from 'fs';

export default async function handler(req, res) {
  const imagePath = path.resolve('/review.png'); // Path to the image
  const outputBuffer = await sharp(imagePath)
    .resize(800) // Resize image to 800px width (you can adjust this)
    .toBuffer(); // Convert processed image to buffer

  res.setHeader('Content-Type', 'image/png'); // Set the correct content type
  res.send(outputBuffer); // Send the image as the response
}
