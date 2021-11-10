//const express = require('express');
const fs = require('fs');
const download = require('download');

const url="https://images.pexels.com/photos/5919667/pexels-photo-5919667.jpeg";
(async () => {
    await download(url, 'dist');
 
    fs.writeFileSync('dist/pexels-photo-5919667.jpeg', await download(url));
 
    download('images.pexels.com/photos/5919667/pexels-photo-5919667.jpeg')
    .pipe(fs.createWriteStream('dist/cool.jpg'));
 
    // download array of images
    await Promise.all([
        'images.pexels.com/photos/41315/africa-african-animal-cat-41315.jpeg',
        'https://images.pexels.com/photos/792381/pexels-photo-792381.jpeg',
        'https://images.pexels.com/photos/1642068/pexels-photo-1642068.jpeg',
        'https://images.pexels.com/photos/1466592/pexels-photo-1466592.jpeg'
    ].map(url => download(url, 'dist')));
})();
