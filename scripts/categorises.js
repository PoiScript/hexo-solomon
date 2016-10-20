'use strict'

hexo.extend.helper.register('categories', (categories, icons) => {
  if (!categories || !categories.length) return ''

  icons = icons || []
  var result = ''
  var self = this

  // Ignore categories with zero posts
  categories = categories.filter((category) => {
    return category.length
  })

  categories.forEach((category) => {
    result += '<a class="waves-effect waves-light btn" href="' + '' + '">'
    if (icons[category.name]) result += '<i class="material-icons left">' + icons[category.name] + '</i>'
    result += category.name
    result += '</a>'
  })

  return result
})