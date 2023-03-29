const path=require('path')
console.log(path.sep);
console.log(path.join('/modules', 'os.js'));
console.log(path.basename(path.join('/modules', 'os.js')));
console.log(path.resolve(__dirname, 'modules', 'os.js'));