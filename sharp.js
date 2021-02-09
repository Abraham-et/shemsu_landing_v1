const sharp = require('sharp');
const fs = require('fs');
const directory = './public/images';

fs.readdirSync(directory).forEach(file => {
    sharp(`${directory}/${file}`)
        .resize(200, 100) // width, height
        .toFile(`${directory}/${file}-small.we`);
});