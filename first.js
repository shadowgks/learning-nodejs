console.log(__filename);
console.log(__dirname);

const url = 'www.google.com'

function test(name){
    console.log('Hello ' + name);
}

module.exports.test = test;