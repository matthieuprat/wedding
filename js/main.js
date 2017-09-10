// Scrolling feature (depends on jQuery Easing plugin).
$(function() {
  $('a.page-scroll').bind('click', function(event) {
    var $anchor = $(this)
    const cb = disableScrollSpy()
    $('.navbar .active').removeClass('active')
    $anchor.closest('li').addClass('active')
    $('html, body')
      .stop()
      .animate(
        {
          scrollTop: $($anchor.attr('href')).offset().top,
        },
        1500,
        'easeInOutExpo',
        cb
      )
    event.preventDefault()
  })
})

function disableScrollSpy() {
  ScrollSpy = $.fn.scrollspy.Constructor
  ScrollSpy.disabled = true
  return () => {
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
