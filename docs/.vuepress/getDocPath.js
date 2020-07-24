/**
 * 获取目录下的所有文件的相对路径
 * 解决路由名称枚举问题
 */
const fs = require('fs')
const path = require('path')
function getDocPath(relateivePath) {
  const absolutePath = path.join(__dirname, '../' + relateivePath)
  const files = fs.readdirSync(absolutePath)
  const components = []

  files.forEach(function (item) {
    let stat = fs.lstatSync(absolutePath + '/' + item)
    if (item == 'README.md') {
      components.unshift(relateivePath + '/')
    } else if (!stat.isDirectory()) {
      components.push(relateivePath + '/' + item)
    } else {
      console.log(relateivePath + '/' + item)
      getDocPath(relateivePath + '/' + item)
    }
  })
  // console.log(components)
  return components
}
module.exports = getDocPath
