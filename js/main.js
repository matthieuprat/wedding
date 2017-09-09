// Collapse the navbar on scroll
// $(window).scroll(function() {
//   if ($('.navbar').offset().top > 50) {
//     $('.navbar-fixed-top').addClass('top-nav-collapse')
//   } else {
//     $('.navbar-fixed-top').removeClass('top-nav-collapse')
//   }
// })

// Scrolling feature (requires jQuery Easing plugin)
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

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
  $('.navbar-toggle:visible').click()
})

// Remove the focused state after click, otherwise bootstrap will still highlight the link
$('a').mouseup(function() {
  $(this).blur()
})

new VHChromeFix([{
  selector: '.intro',
  vh: 100,
}]);
