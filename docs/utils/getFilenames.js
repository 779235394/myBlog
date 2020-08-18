/**
 * 获取一个目录下的所有文件名
 * 使用方法：var filehelper = require('./utils/getFilenames.js')
 * filehelper.getFileName("/views/technology-sharing/vuepress/")
 */
const fs = require('fs');
// 排除检查的文件
var excludes = ['.DS_Store']

var filehelper = {
    getFileName: function (rpath) {
        let filenames = [];
        fs.readdirSync(rpath).forEach(file => {
            if (excludes.indexOf(file) < 0) {
                fullpath = rpath + "/" + file
                var fileinfo = fs.statSync(fullpath)
                if (fileinfo.isFile()) {
                    if (file === 'README.md') {
                        file = '';
                    } else {
                        file = file.replace('.md', '');
                    }
                    filenames.push(file);
                }
            }
        })
        filenames.sort();
        return filenames;
    }
}
module.exports = filehelper;
