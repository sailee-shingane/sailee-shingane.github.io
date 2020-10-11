;(function () {
	
	// 'use strict';

	var fullHeight = function() {

		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function(){
			$('.js-fullheight').css('height', $(window).height());
		});

	};

	var burgerMenu = function() {

		$('.nav-toggle').on('click', function(event){
			event.preventDefault();
			var $this = $(this);

			if ($('body').hasClass('offcanvas')) {
				$this.removeClass('active');
				$('body').removeClass('offcanvas');	
			} else {
				$this.addClass('active');
				$('body').addClass('offcanvas');	
			}
		});



	};


	var clickMenu = function() {

		$('#navbar a:not([class="external"])').click(function(event){
			var section = $(this).data('nav-section'),
			navbar = $('#navbar');

			if ( $('[data-section="' + section + '"]').length ) {
				$('html, body').animate({
					scrollTop: $('[data-section="' + section + '"]').offset().top - 55
				}, 500);
			}

			if ( navbar.is(':visible')) {
				navbar.removeClass('in');
				navbar.attr('aria-expanded', 'false');
				$('.nav-toggle').removeClass('active');
			}

			event.preventDefault();
			return false;
		});


	};

	var navActive = function(section) {

		var $el = $('#navbar > ul');
		$el.find('li').removeClass('active');
		$el.each(function(){
			$(this).find('a[data-nav-section="'+section+'"]').closest('li').addClass('active');
		});

	};

	var navigationSection = function() {

		var $section = $('section[data-section]');
		
		$section.waypoint(function(direction) {

			if (direction === 'down') {
				navActive($(this.element).data('section'));
			}
		}, {
			offset: '150px'
		});

		$section.waypoint(function(direction) {
			if (direction === 'up') {
				navActive($(this.element).data('section'));
			}
		}, {
			offset: function() { return -$(this.element).height() + 155; }
		});

	};

	
	var i = 0;
	var destination = document.getElementById("typed-text");
	var sContents = "I'm Sailee";

	function typing(){
		if(i<sContents.length){
			destination.innerHTML += sContents.charAt(i);
			i++;
			setTimeout(typing,80);
		}

	}


	$(function(){
		fullHeight();
		burgerMenu();

		clickMenu();
		navigationSection();
		typing();

	});




}());