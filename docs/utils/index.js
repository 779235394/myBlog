/**
 * 将数据处理为vuepress可接受的对象格式
 * 使用方法：var utils = require('./utils/index.js')
 * utils.genSidebar('sidebar_title, filehelper.getFileName(docs + "/views/technology-sharing/vuepress/"), false),
 */
const utils = {
    genSidebar: function (title, children = [''], collapsable = true, sidebarDepth = 2) {
        var arr = new Array();
        arr.push({
            title,
            collapsable,
            sidebarDepth,
            children
        })
        return arr;
    }
};

module.exports = utils;
