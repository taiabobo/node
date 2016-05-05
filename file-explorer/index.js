var fs = require('fs');
fs.readdir(__dirname, function (err, files) {
    console.log(files);
});
//require('./example-1.js');
//require('./example-2.js');