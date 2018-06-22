$(function(){
	$('body').fadeIn(1000);

	$.fn.isOnScreen = function () {
    	var win = $(window);
    	var viewport = {
        	top: win.scrollTop(),
        	left: win.scrollLeft()
    	};
    	viewport.right = viewport.left + win.width();
    	viewport.bottom = viewport.top + win.height();
    	var bounds = this.offset();
    	bounds.right = bounds.left + this.outerWidth();
    	bounds.bottom = bounds.top + this.outerHeight();
    	return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));
	};

	$(window).scroll(function () {
    	if ($('#projects').isOnScreen() == true) {
    	    $('.hero').removeClass('show-hero').addClass('hide-hero');
    	} else {
    	    $('.hero').removeClass('hide-hero').addClass('show-hero');
    	}
	});
	
	var sectionContact = $('#section-contact');
	var visible = $('.visible');

	sectionContact.hide();

	$('#show-contact').on('click', function(event) {
		event.preventDefault();
		sectionContact.removeClass('returnRight').addClass('moveFromRight');
		sectionContact.show();
		
		visible.fadeToggle(1000);
	});

	$('#back-home').on('click', function(event) {
		event.preventDefault();
		sectionContact.removeClass('moveFromRight').addClass('returnRight');
		sectionContact.hide(1000);
		visible.toggle(1000);
	})

	showMenu();

	function showMenu() {
		if (window.outerWidth < 769) {
			$('.menu').show();
		} else {
			$('.menu').hide();
		}
	}

	var menuList = $('ul');
	$('.menu').on('click', function(event) {		
		menuList.toggle();
	});

	$('li').on('click', function(event) {	
		if(window.outerWidth < 769) {
  			menuList.toggle();
    	}
		
	});

	$("a").on('click', function(event) {
    	if (this.hash !== "") {    
      		event.preventDefault();
			var hash = this.hash;

      		$('html, body').animate({
        		scrollTop: $(hash).offset().top
      		}, 800, function(){   
       			window.location.hash = hash;
      		});
    	}
  	});



});

