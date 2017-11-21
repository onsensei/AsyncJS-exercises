const fs = require('fs');

//--------------------------------------------------

const readFromFile = (fileName) => {
    return fs.readFileSync(fileName, 'utf8');
};

// console.log('START');
// const data = readFromFile('sample.txt');
// console.log(data);
// console.log('END');

//--------------------------------------------------

const readFromFileAsync = (fileName, callback) => {
    fs.readFile(fileName, 'utf8', (err, data) => {
        if(err) {
            callback(true, err);
            return;
        }
        callback(false, data);
    });
};

console.log('START');
readFromFileAsync('sample.txt', (isError, data) => {
    console.log(data);
    console.log('END');
});
