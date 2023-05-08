const fs = require("fs")

// const file_sync = fs.readdirSync('./'); 
fs.readdir('./', function (err, files) {
    (err) ? console.log(`You have error ${err}`) : console.log(`Success ${files}`);
});
// const readdir_sync = 

