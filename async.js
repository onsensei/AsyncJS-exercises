const request = require('request');

const callback = () => {
    console.log('response');
};

const test = () => {
    request('http://www.google.co.th', callback);
};

//START OF PROGRAM
console.log("Hitting google");
test();
console.log("Some other work");
