const getDocPath = require('./getDocPath')
module.exports = {
  nav: [{
      text: 'Home',
      link: '/'
    },
    {
      text: 'vue',
      link: '/document/vue/'
    },
    {
      text: 'git',
      link: '/document/git/'
    },
    {
      text: 'javascript',
      link: '/document/javascript/'
    },
    {
      text: 'github',
      link: 'https://github.com/779235394'
    },
  ],
  sidebarDepth: 2,
  sidebar: [{
    title: 'Vue',
    collapsable: true,
    children: getDocPath('document/vue')
  }, {
    title: 'git',
    collapsable: true,
    children: getDocPath('document/git')
  }, {
    title: 'javascript',
    collapsable: true,
    children: getDocPath('document/javascript')
  }, {
    title: 'node',
    collapsable: true,
    children: getDocPath('document/node')
  }]
}