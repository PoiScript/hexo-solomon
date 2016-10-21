'use strict'
var cheerio

hexo.extend.helper.register('scrollspy', (str) => {
  if (!cheerio) cheerio = require('cheerio')

  var $ = cheerio.load(str)
  var headingsSelector = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].slice(0, 6).join(',')
  var headings = $(headingsSelector)

  if (!headings.length) return ''

  var result = '<ul class="section table-of-contents">'

  for (var i = 0; i < headings.length; i++) result += '<li><a href="#' + headings[i].attribs.id + '">' + headings[i].attribs.id + '</a></li>'

  result += '</ul>'
  return result
})

hexo.extend.helper.register('scrollspy_content', (str) => {
  if (!cheerio) cheerio = require('cheerio')

  var $ = cheerio.load(str)
  var headingsSelector = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].slice(0, 6).join(',')
  var headings = $(headingsSelector)

  if (!headings.length) return str

  var result = []

  for (var i = 0; i < headings.length; i++) {
    var $ = cheerio.load(headings[i])
    console.log($.contents())
    // $('<div id="' + headings[i].attribs.id + '" class="section scrollspy">').appendTo($.html())
    // result += '<div cal>'
    // result += '<li><a href="#' + headings[i].attribs.id + '">' + headings[i].attribs.id + '</a></li>'
  }

  // console.log($.html())

  result += '</ul>'
  return result
})