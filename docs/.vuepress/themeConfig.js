/*
 * @Descripttion: 
 * @Author: hejunlan
 * @Date: 2020-08-29 10:08:35
 */
const getDocPath = require('./getDocPath')
module.exports = {
  author: '前端小菜-贺俊兰',
  type: 'blog',
  logo: '/timg.gif',
  authorAvatar: '/timg.gif',

  // 博客配置
  blogConfig: {
    category: {
      icon: 'reco-category',
      location: 2,     // 在导航栏菜单中所占的位置，默认2
      text: '分类' // 默认文案 “分类”
    },
    tag: {
      icon: 'reco-tag',
      location: 3,     // 在导航栏菜单中所占的位置，默认3
      text: '标签'      // 默认文案 “标签”
    }
  },
  nav: [
    {
      icon: 'reco-home',
      text: '主页',
      link: '/'
    },
    {
      text: '时间轴',
      link: '/timeLine/',
      icon: 'reco-date'
    },
    // {
    //   icon: 'reco-github',
    //   text: 'github',
    //   link: 'https://github.com/779235394'
    // },
  ],
  sidebarDepth: 2,
  sidebar: require('./sidebarConf')
}