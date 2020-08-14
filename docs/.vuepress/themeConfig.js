const getDocPath = require('./getDocPath')
module.exports = {
  author: '前端小菜-贺俊兰',
  // 博客配置
  blogConfig: {
    category: {
      icon: 'reco-category',
      location: 2,     // 在导航栏菜单中所占的位置，默认2
      text: 'Category' // 默认文案 “分类”
    },
    tag: {
      icon: 'reco-tag',
      location: 3,     // 在导航栏菜单中所占的位置，默认3
      text: 'Tag'      // 默认文案 “标签”
    }
  },
  nav: [
    {
      icon: 'reco-home',
      text: 'Home',
      link: '/'
    },
    // {
    //   icon: 'reco-home',
    //   text: 'vue',
    //   link: '/document/vue/'
    // },
    // {
    //   icon: 'reco-home',
    //   text: 'git',
    //   link: '/document/git/'
    // },
    // {
    //   icon: 'reco-home',
    //   text: 'javascript',
    //   link: '/document/javascript/'
    // },
    {
      icon: 'reco-github',
      text: 'github',
      link: 'https://github.com/779235394'
    },
  ],
  // sidebarDepth: 2,
  // sidebar: [{
  //   title: 'Vue',
  //   collapsable: true,
  //   children: getDocPath('document/vue')
  // }, {
  //   title: 'git',
  //   collapsable: true,
  //   children: getDocPath('document/git')
  // }, {
  //   title: 'javascript',
  //   collapsable: true,
  //   children: getDocPath('document/javascript')
  // }, {
  //   title: 'node',
  //   collapsable: true,
  //   children: getDocPath('document/node')
  // }]
}