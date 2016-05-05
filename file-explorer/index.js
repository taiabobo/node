var fs = require('fs'), stdin = process.stdin, stdout = process.stdout;
fs.readdir(process.cwd(), function (err, files) {
    console.log(' ');
    if (!files.length) {
        return console.log('\033[31m啥文件都没有啊 \033[39m\n');
    }
    console.log('选择要查看的文件！ \n');
    file(0,files);
});
//当遍历文件目录时调取读取文件列表的函数
function file(i,files) {
    var filename = files[i];
    fs.stat(__dirname + '/' + filename, function (err, stat) {
        if (stat.isDirectory()) {
            console.log('        ' + i + '     \033[36m' + filename + '/\033[39m');
        }
        else {
            console.log('         ' + i + '          \033[90m' + filename + '\033[39m');
        }
        i++;
        if (i == files.length) {
            read();
        }
        else {
            file(i,files);
        }
    });
}
//当文件列表显示时读取用户输入
function read() {
    console.log(' ');
    process.stdout.write('            \033[33m请选择文件:  \033[39m');
    process.stdin.resume();
    stdin.setEncoding('utf8');
}

