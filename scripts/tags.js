'use strict'

hexo.extend.helper.register('tags', (tags) => {
  if (!tags || !tags.length) return ''

  var result = ''
  var self = this

  // Ignore tags with zero posts
  tags = tags.filter((tag) => {
    return tag.length
  })

  tags.forEach(function(tag) {
    result += '<a class="chip" href="' + '' + '">'
    result += tag.name
    result += '</a>'
  })

  return result
})