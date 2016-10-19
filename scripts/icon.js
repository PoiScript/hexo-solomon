'use strict'

hexo.extend.helper.register('icon', (name) => {
  var result = ''
  if (!name) return result
  result += '<i class="material-icons">' + theme.icon[name] + '</i>'
  return result
})