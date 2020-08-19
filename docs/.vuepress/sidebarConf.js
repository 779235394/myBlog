const path = require("path")
const rootpath = path.dirname(__dirname) //执行一次dirname将目录定位到docs的上级目录，也就是博客根目录
const docs = rootpath;
const utils = require(rootpath + '/utils/index.js');
const filehelper = require(rootpath + '/utils/getFilenames.js');
module.exports = {
    // 技术总结
    '/document/vue/': utils.genSidebar('VUE', filehelper.getFileName(docs + "/document/vue/"), false),
    '/document/javascript/': utils.genSidebar('javascript', filehelper.getFileName(docs + "/document/javascript/"), false),
    '/document/node/': utils.genSidebar('node', filehelper.getFileName(docs + "/document/node/"), false),
    '/document/algorithm/': utils.genSidebar('LeetCode 记录', filehelper.getFileName(docs + "/document/algorithm/"), false),
    '/document/other/': utils.genSidebar('其他', filehelper.getFileName(docs + "/document/other/"), false),
};
