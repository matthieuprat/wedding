// Scrolling feature (depends on jQuery Easing plugin).
$(function() {
  $('a.page-scroll').bind('click', function(event) {
    scrollTo($(this))
    event.preventDefault()
  })
})

function scrollTo($anchor) {
  const cb = disableScrollSpy()
  $('.navbar .active').removeClass('active')
  $anchor.closest('li').addClass('active')
  $('html, body')
    .stop()
    .animate(
      { scrollTop: $($anchor.attr('href')).offset().top },
      1500,
      'easeInOutExpo',
      cb
    )
}

function disableScrollSpy() {
  ScrollSpy = $.fn.scrollspy.Constructor
  ScrollSpy.disabled = true
  return function() {
    ScrollSpy.disabled = false
  }
}

// Close the menu on menu item click.
$('.navbar-collapse ul li a').click(function() {
  $('.navbar-toggle:visible').click()
})

// Remove the focused state after click, otherwise it stays highlighted.
$('a').mouseup(function() {
  $(this).blur()
})

$(function() {
  if (!location.hash) scrollTo($('a[href="#programme"]'))
})

var keys = ''
var word = 'glandie'
$(document).on('keyup', function(event) {
  if (!event.key) return
  keys += event.key
  if (word.indexOf(keys) === -1) {
    keys = ''
    return
  }
  if (keys === word) {
    location.href = 'http://glandie.com/'
  }
})
