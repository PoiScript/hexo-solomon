'use strict'

hexo.extend.helper.register('archive', (posts, icons) => {
  if (!posts || !posts.length) return ''

  icons = icons || []
  var result = ''
  var self = this

  if (!posts.length) return result

  result += '<ul class="collection">'

  posts.forEach((post) => {
    var date = post.date.clone()
    result += '<li class="collection-item">'
    if (post.categories && icons.length) {
      post.categories.forEach((category) => {
        result += '<i class="material-icons left">' + icons[category.name] + '</i>'
      })
    }
    result += post.title
    if (post.tags) {
      result += '<div class="secondary-content">'
      post.tags.forEach((tag) => {
        result += '<a class="chip" href="' + '' + '">'
        result += tag.name
        result += '</a>'
      })
      result += '</div>'
    }
    result += '</li>'
  })

  return result
})