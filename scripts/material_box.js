'use strict'

hexo.extend.helper.register('material_box', (src, des, width, height) => {
  if (!src) return ''
  width = width || '50%'
  height = height || '50%'

  var result = '<img class="materialboxed" width="' + width + '" height="' + height + '" src="' + src +'"'

  if (des) result += 'data-caption="' + des + '">'
  else result += '>'

  return result
})
