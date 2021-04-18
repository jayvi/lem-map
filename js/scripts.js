jQuery(document).ready(function ($) {

	// if ( $.cookie('welcomeModal') == "yes" ) {
	// 	$('.welcome').removeClass('show');
	// }

	// $('.welcome .close, .welcome #cta, .clickable').on('click', function() {
	// 	$.cookie('welcomeModal', 'yes', {
	// 		expires: 90,
	// 		path: '/'
	// 	});
	// 	$('.welcome').toggleClass('show');
	// });

	// Stop Touch devices scrolling
	document.ontouchmove = function(event){
	  event.preventDefault();
	}

	$('.welcome.desktop .close, .welcome.desktop #cta, .clickable').on('click', function(e) {
		e.preventDefault();
		$('.welcome.desktop').removeClass('show');
	});


	//game cookies
	//foot one
	if ( $.cookie('foot-1') == "yes" ) {
		$('.game-view .window .part.foot-1').addClass('show');
	}
	$('.tt-wrapper.foot-info').on('click', function() {
		$.cookie('foot-1', 'yes', {
			expires: 90,
			path: '/'
		});
		$('.game-view .window .part.foot-1').addClass('show');
	});

	//foot two
	if ( $.cookie('foot-2') == "yes" ) {
		$('.game-view .window .part.foot-2').addClass('show');
	}
	$('.tt-wrapper.foot-2').on('click', function() {
		$.cookie('foot-2', 'yes', {
			expires: 90,
			path: '/'
		});
		$('.game-view .window .part.foot-2').addClass('show');
	});

	//hand one
	if ( $.cookie('hand-1') == "yes" ) {
		$('.game-view .window .part.hand-1').addClass('show');
	}
	$('.tt-wrapper.hand-1').on('click', function() {
		$.cookie('hand-1', 'yes', {
			expires: 90,
			path: '/'
		});
		$('.game-view .window .part.hand-1').addClass('show');
	});

	//hand two
	if ( $.cookie('hand-2') == "yes" ) {
		$('.game-view .window .part.hand-2').addClass('show');
	}
	$('.tt-wrapper.hand-2').on('click', function() {
		$.cookie('hand-2', 'yes', {
			expires: 90,
			path: '/'
		});
		$('.game-view .window .part.hand-2').addClass('show');
	});

	//head
	if ( $.cookie('head') == "yes" ) {
		$('.game-view .window .part.head').addClass('show');
	}
	$('.tt-wrapper.head').on('click', function() {
		$.cookie('head', 'yes', {
			expires: 90,
			path: '/'
		});
		$('.game-view .window .part.head').addClass('show');
	});

	//All cookies success
	$('.tt-wrapper.hand-2, .tt-wrapper.hand-1, .tt-wrapper.foot-1, .tt-wrapper.foot-info, .tt-wrapper.head').on('click', function() {
		if ( $.cookie('foot-1') == "yes" && $.cookie('foot-2') == "yes" && $.cookie('hand-1') == "yes" && $.cookie('hand-2') == "yes" && $.cookie('head') == "yes" ) {
			$('.game-view').addClass('show');
			$('.game-view .window.results').addClass('hide');
			$('.game-view .window.success').addClass('show');
		}
	});

	//welcome slides
	$(".welcome .window .cta.one").click(function(e) {
		e.preventDefault();
		$(".welcome .window.one").removeClass('show').addClass('hide');
		$(".welcome .window.two").addClass('show');
	});
	$(".welcome .window .cta.two").click(function(e) {
		e.preventDefault();
		$(".welcome .window.two").removeClass('show').addClass('hide');
		$(".welcome .window.three").addClass('show');
	});
	$(".welcome .window .cta.three").click(function(e) {
		e.preventDefault();
		$(".welcome .window.three").removeClass('show').addClass('hide');
		$(".welcome .window.four").addClass('show');
	});

	//play animated gifs
	$(function() {
		$(".mozy").hover(
			function()
			{
				var src = $(this).children('.animated-img').attr("src");
				$(this).children('.animated-img').attr("src", src.replace(/\.png$/i, ".gif"));
			},
			function()
			{
				var src = $(this).children('.animated-img').attr("src");
				$(this).children('.animated-img').attr("src", src.replace(/\.gif$/i, ".png"));
		});
		return false; 
	});

		//map viewports
		$("#viewport").mapbox({mousewheel: true});
		$("#viewport2").mapbox({ 
			layerSplit: 2 //smoother transition for mousewheel 
		}); 
		$(".map-control a").click(function() { //control panel 
			console.log('VIEWP');
			var viewport = $("#viewport2"); 
			// this.className is same as method to be called 
			if(this.className == "zoom" || this.className == "back") { 
				viewport.mapbox(this.className, 2);//step twice 
			} 
			else { 
				viewport.mapbox(this.className); 
			} 
			return false; 
		});

	//Sounds

	//mosquito sound
		var mozyaudio = $("#mosquito")[0];
		$(".mozy").mouseenter(function() {
			mozyaudio.play();
		}).mouseleave(function() {
			mozyaudio.pause();
			mozyaudio.currentTime = 0;
		});
	//waterfall
		var wateraudio = $("#waterfall")[0];
		$(".waterfall").mouseenter(function() {
			wateraudio.play();
		}).mouseleave(function() {
			wateraudio.pause();
			wateraudio.currentTime = 0;
		});
	//construction site
		var constructTimeout
		var constructaudio = $("#construction")[0];
		$(".construction-site").mouseenter(function() {
			constructTimeout = setTimeout(function() {
				constructaudio.play();
				constructaudio.volume = 0.5;
			}, 800);
		}).mouseleave(function() {
			constructaudio.pause();
			constructaudio.currentTime = 0;
			clearTimeout(constructTimeout);
		});
	//christ redeemer
		var christaudio = $("#christ-redeemer")[0];
		$(".christ-redeemer").mouseenter(function() {
			christaudio.play();
		}).mouseleave(function() {
			christaudio.pause();
			christaudio.currentTime = 0;
		});
	//church 1 
		var churchoneaudio = $("#church-1")[0];
		$(".church-1").mouseenter(function() {
			churchoneaudio.play();
		}).mouseleave(function() {
			churchoneaudio.pause();
			churchoneaudio.currentTime = 0;
		});
	//church 2 
		var churchtwoaudio = $("#church-2")[0];
		$(".church-2").mouseenter(function() {
			churchtwoaudio.play();
		}).mouseleave(function() {
			churchtwoaudio.pause();
			churchtwoaudio.currentTime = 0;
		});
	//stadium 1
		var stadoneTimeout
		var stadoneaudio = $("#stadium-1")[0];
		$(".stadium-1").mouseenter(function() {
			stadoneTimeout = setTimeout(function() {
				stadoneaudio.play();
			}, 800);
		}).mouseleave(function() {
			stadoneaudio.pause();
			stadoneaudio.currentTime = 0;
			clearTimeout(stadoneTimeout);
		});
	//stadium 2
		var stadtwoTimeout
		var stadtwoaudio = $("#stadium-2")[0];
		$(".stadium-2").mouseenter(function() {
			stadtwoTimeout = setTimeout(function() {
				stadtwoaudio.play();
			}, 800);
		}).mouseleave(function() {
			stadtwoaudio.pause();
			stadtwoaudio.currentTime = 0;
			clearTimeout(stadtwoTimeout);
		});
	//police hell
		var hellTimeout
		var hellaudio = $("#hell")[0];
		$(".airport").mouseenter(function() {
			hellTimeout = setTimeout(function() {
				hellaudio.play();
			}, 800);
		}).mouseleave(function() {
			hellaudio.pause();
			hellaudio.currentTime = 0;
			clearTimeout(hellTimeout);
		});
	//prisoner youhoo
		var youhooaudio = $("#youhoo")[0];
		$(".prisoner").mouseenter(function() {
			youhooaudio.play();
		}).mouseleave(function() {
			youhooaudio.pause();
			youhooaudio.currentTime = 0;
		});
	//severed body parts
		var bodyaudio = $("#severed-foot")[0];
		$(".tt-wrapper.foot-info, .tt-wrapper.foot-2, .tt-wrapper.hand-1, .tt-wrapper.hand-2, .tt-wrapper.head").mouseenter(function() {
			bodyaudio.play();
		}).mouseleave(function() {
			bodyaudio.pause();
			bodyaudio.currentTime = 0;
		});
	//rainforest
		var forestaudio = $("#rainforest")[0];
		$(".rainforest").mouseenter(function() {
			forestaudio.play();
		}).mouseleave(function() {
			forestaudio.pause();
			forestaudio.currentTime = 0;
		});
	//run for your life
		var runaudio = $("#runforyourlife")[0];
		$(".homicide").mouseenter(function() {
			runaudio.play();
			runaudio.volume = 0.5;
		}).mouseleave(function() {
			runaudio.pause();
			runaudio.currentTime = 0;
			runaudio.volume = 0.5;
		});

	//mute un-mute all sounds
	$(".mute").click(function() {
		var bool = $(".player").prop("muted");
		$(".player").prop("muted",!bool);
	});

	//change mute icon when clicked
	$(".mute").click(function() {
		var $this = $(this);
		$this.toggleClass("muted");
		if ($this.hasClass("muted")) {
			$this.html("c");
		} else {
			$this.html("d");
		}
	});

	//show game view window on click
		$(".view, .game-close, .game-clickable, .game-cta").click(function() {
			$(".game-view").toggleClass('show');
		});

	//show game success tooltips on object click
		//foot one
		$(".tt-wrapper.foot-info").click(function() {
			$(".view .part-tooltip.one").toggleClass("show").delay(6000).queue(function(){
				$(this).removeClass("show").dequeue();
			})
		});
		//foot two
		$(".tt-wrapper.foot-2").click(function() {
			$(".view .part-tooltip.two").toggleClass("show").delay(6000).queue(function(){
				$(this).removeClass("show").dequeue();
			})
		});
		//hand one
		$(".tt-wrapper.hand-1").click(function() {
			$(".view .part-tooltip.three").toggleClass("show").delay(6000).queue(function(){
				$(this).removeClass("show").dequeue();
			})
		});
		//hand two
		$(".tt-wrapper.hand-2").click(function() {
			$(".view .part-tooltip.four").toggleClass("show").delay(6000).queue(function(){
				$(this).removeClass("show").dequeue();
			})
		});
		//head
		$(".tt-wrapper.head").click(function() {
			$(".view .part-tooltip.five").toggleClass("show").delay(6000).queue(function(){
				$(this).removeClass("show").dequeue();
			})
		});

}); //document ready