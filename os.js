const { log } = require('console');
const { readdir } = require('fs');
const os = require('os');

const free_mem = os.freemem();
const total_mem = os.totalmem();

console.log(`Free Mem: ${free_mem}`);
console.log(`Total Mem: ${total_mem}`);