// $(document).ready(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') || location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
  $('.site-nav-item > a').on('click', function(){
  	var siteNav = $(this).parent().eq(1).removeClass('show');
  });
  $('.site-nav-mobile').on('click', function(){
	
	var siteNav = $(this).siblings('ul.site-nav');
		
	if (siteNav.hasClass('show')){
		siteNav.removeClass('show');
	}else{
		siteNav.addClass('show');
	}
});
// });
var fadeInOnScroll = (function($){
	var contentSection = $('.content-section');
	
	function compareHeight(){
		var viewportTotalHeight = document.documentElement.scrollTop + document.documentElement.clientHeight,
			bottomOfElement = $(this).position().top + $(this).outerHeight() - 150; //fade in the element 150px earlier
		if (viewportTotalHeight > bottomOfElement){
			$(this).animate({
				opacity : 1
			},300);
		}
	}

	$(this).on('scroll', function(){
		contentSection.map(compareHeight);
	});

	
})(jQuery);

var animateHeader = (function($){
	var viewportTotalHeight = document.documentElement.scrollTop + document.documentElement.clientHeight,
		nav = $('#navigation'),
		mobileNav = $('.site-nav-mobile'),
		headerHeight = $('header').outerHeight(),
		isScrolled = false,
		triggerHeight = headerHeight < viewportTotalHeight ? headerHeight : viewportTotalHeight*0.60;
	$(this).on('scroll', function(){
		var viewportOffset = window.pageYOffset || document.documentElement.scrollTop;
		if ( !isScrolled ) {
			isScrolled = true;
			if (viewportOffset >= triggerHeight){
				nav.addClass('fixed');
				mobileNav.css({'display' : 'block'});
			} else {
				nav.removeClass('fixed');
				mobileNav.css({'display' : 'none'});
			}
			isScrolled = false;
		}
	});

})(jQuery);

