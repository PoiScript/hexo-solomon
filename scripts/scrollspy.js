'use strict'
var cheerio

hexo.extend.helper.register('scrollspy', (str, options) => {
  options = options || {}
  if (!cheerio) cheerio = require('cheerio')

  var $ = cheerio.load(str)
  var headingsMaxDepth = options.hasOwnProperty('max_depth') ? options.max_depth : 6
  var headingsSelector = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].slice(0, 6).join(',')
  var headings = $(headingsSelector)

  if (!headings.length) return ''

  var result = '<ul class="section table-of-contents">'

  for (var i = 0; i < headings.length; i++) {
    result += '<li><a href="#' + headings[i].attribs.id + '">' + headings[i].attribs.id + '</a></li>'
  }

  result += '</ul>'
  return result
})