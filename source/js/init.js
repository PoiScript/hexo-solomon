$(document).ready(function(){
  $('.parallax').parallax()
})
$(document).ready(function(){
  $('.slider').slider()
})
$(document).ready(function(){
  $('.toc-wrapper').pushpin({top: $('.toc-wrapper').offset().top})
  $('.scrollspy').scrollSpy()
})
$(document).ready(function () {
  $('#plax-front').plaxify({"xRange":40,"yRange":40})
  $('#plax-back').plaxify({"xRange":10,"yRange":10})
  $.plax.enable()
})