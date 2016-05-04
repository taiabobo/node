﻿var mybuffer = new Buffer('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', 'base64');
console.log(mybuffer);
require('fs').writeFile('logo.png', mybuffer);