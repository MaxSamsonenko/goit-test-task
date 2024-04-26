const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname, '/src/images/svg');

fs.readdir(directoryPath, (err, files) => {
  if (err) {
    console.error('Error finding files:', err);
    return;
  }

  files.forEach(file => {
    if (path.extname(file) === '.svg') {
      const newFileName = `icon-${file}`;
      fs.rename(
        path.join(directoryPath, file),
        path.join(directoryPath, newFileName),
        err => {
          if (err) {
            console.error('Error renaming file:', err);
          } else {
            console.log(`Renamed ${file} to ${newFileName}`);
          }
        }
      );
    }
  });
});
