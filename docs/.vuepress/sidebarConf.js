
const getDocPath = require('./getDocPath')
module.exports = {
    // 技术总结
    '/document/vue/': [
        getDocPath('vue2', true, '/document/vue/vue2/'),
        getDocPath('vue3', true, '/document/vue/vue3/'),
    ],
    '/document/javascript/': [
        getDocPath('javascript', true, '/document/javascript/'),
    ],
    '/document/node/': [
        getDocPath('node', true, '/document/node/'),
    ],
    '/document/algorithm/': [
        getDocPath('LeetCode', true, '/document/algorithm/'),
    ],
    '/document/other/': [
        getDocPath('other', true, '/document/other/'),
    ]
};
