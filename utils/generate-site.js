const fs = require('fs');

const writeFile = (content) => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', content, (err) => {
            if(err) {
                reject(err);
                return;
            }

            resolve({
                ok : true,
                message : 'File complete!'
            });
        });
    });
};

const copyFile = () => {
    return new Promise ((resolve, reject) => {
        fs.copyFile('./src/style.css', './dist/style.css', err => {
            if(err) {
                reject(err);
                return;
            }

            resolve('Style sheet copied!');
        })
    })
};

module.exports = {writeFile, copyFile};