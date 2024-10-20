const fs = require('fs');
const archiver = require('archiver');

// Ensure 'dist' folder exists
const output = fs.createWriteStream(__dirname + '/dist/youtube_shorts_blocker.zip');
const archive = archiver('zip', { zlib: { level: 9 } });

output.on('close', () => {
  console.log(`Extension packaged: ${archive.pointer()} total bytes.`);
});

archive.on('error', (err) => {
  throw err;
});

// Add all files required for the extension
archive.pipe(output);
archive.directory(__dirname + '/src/', false);
archive.finalize();
