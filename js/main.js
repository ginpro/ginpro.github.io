(function($){

	"use strict"

	var $body =  $('html, body'),
			$btnNav = $('.btn-nav'),
			$this = $(this),
			$gridItem = $('.grid-item');
			

	function skill() {
		var $skill = $('.skill-bar');
		$skill.each(function() {
			var $number = $(this).data('skill');


			$(this).append("<span class='number'/>");
			$(this).append('<div class="bar"/>');
			$(this).find('.number').text($number).css('left', $number);
			$(this).children('.bar').css('width', $number);
		});
	}	

	function articleTada(){
	  var randNum = Math.floor(Math.random() * $('.article-thumb').length) +1;
	  $('.article-thumb').eq(randNum).addClass('is-animate')
	    .siblings().removeClass('is-animate');
	}

	function smoothScroll (duration) {
		$('a[href^="#"]').on('click', function(event) {

		    var target = $( $(this).attr('href') );

		    if( target.length ) {
		        event.preventDefault();
		        $('html, body').animate({
		            scrollTop: target.offset().top
		        }, duration);
		    }
		});
	}

	function work() {
		var workHeight = $('.works').offset().top;
		$gridItem.each(function() {
			var spinner = "<div class='loader'></div>";
			$(this).on('click' , function(event) {
				event.preventDefault();
				/* Act on the event */
				var nameWork = $(this).attr('href');
				console.log(nameWork);
				$('.detail-work').remove();
				$(this).parents('.works').prepend('<div class="detail-work"/>');

				$('.detail-work').html(spinner).load('works/'+ nameWork +'.html');

				$('html, body').animate({
	          scrollTop: workHeight
	      }, 300);
			});
		});
	}

	function clickBtn() {
	var element, circle, d, x, y;
	$(".btn span").hover(function(e){
		element = $(this);
	  
		if(element.find(".circle").length == 0)
			element.prepend("<span class='circle'></span>");
			
		circle = element.find(".circle");
		circle.removeClass("animate");
		
		if(!circle.height() && !circle.width())
		  {
				d = Math.max(element.outerWidth(), element.outerHeight());
				circle.css({height: d, width: d});
			}
			
			x = e.pageX - element.offset().left - circle.width()/2;
			y = e.pageY - element.offset().top - circle.height()/2;
			
			circle.css({top: y+'px', left: x+'px'}).addClass("animate");
		},
		function() {
			circle.removeClass("animate");
		});
	}

	$(document).ready(function() {

		setInterval(function() {
			articleTada();
		}, 4000);

		skill();
		smoothScroll(300);
		$body.niceScroll();
		work();
		clickBtn();

		$btnNav.click(function() {
			$('.main-nav').slideToggle();
		});

		$('.grid').masonry({
		  // set itemSelector so .grid-sizer is not used in layout
		  itemSelector: '.grid-item',
		  // use element for option
		  columnWidth: '.grid-sizer',
		  percentPosition: true
		});

	});
})(jQuery);







