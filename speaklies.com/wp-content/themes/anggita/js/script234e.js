(function($) {
	"use strict";

	$.fn.changeElementType = function(newType) {
		var attrs = {};
		if (!(this[0] && this[0].attributes)) return;

		$.each(this[0].attributes, function(idx, attr) {
			attrs[attr.nodeName] = attr.nodeValue;
		});
		this.replaceWith(function() {
			return $("<" + newType + "/>", attrs).append($(this).contents());
		});
	};

	$(window).on("load", function() {
		// makes sure the whole site is loaded

		//script for mobile menu
		$(".box-mobile").each(function() {
			var $this = $(this);
			$(this)
				.find(".hamburger")
				.on("click", function(event) {
					$this.find(".fat-nav").fadeToggle();
					$this.find(".fat-nav").toggleClass("active");
					$(this).toggleClass("active");
					$("body").toggleClass("nav-active");
					event.preventDefault();
				});
		});

		$(".fat-list a[href='#']").remove();
		$(".fat-list").changeElementType("ul");
		$(".fat-list a").wrap("<li></li>");
		$(".fat-nav a").on("click", function(event) {
			$(".fat-nav").removeClass("active");
			$(".fat-nav").fadeOut();
			$(".hamburger").removeClass("active");
			$("body").removeClass("nav-active");
		});
		//sticky navigation
		$(".for-sticky").sticky({
			topSpacing: 0
		});

		//change image into  background in next/prev post
		$(".pagimgbox").each(function() {
			var src = $(this)
				.children("img")
				.attr("src");
			if ($(this).children("img").length) {
				$(this).css("background-image", "url(" + src + "");
			}
		});

		if (Modernizr.touch) {
			//add class on touch device
			$("body").addClass("no-para");
		}

		//for slick navigation
		$(".home-nav,.menu-box>.menu>ul").slicknav({
			label: "",
			appendTo: ".mobile-menu-container",
			closedSymbol: "+",
			openedSymbol: "-"
		});
	});

	// script popup image
	$(".popup-img").magnificPopup({
		type: "image"
	});

	// script popup image
	$(".blog-popup-img").magnificPopup({
		type: "image",
		gallery: {
			enabled: true
		}
	});

	// Video responsive
	$("body").fitVids();

	//script for navigation(superfish)
	$(".menu-box ul").superfish({
		delay: 400, //delay on mouseout
		animation: {
			opacity: "show",
			height: "show"
		}, // fade-in and slide-down animation
		animationOut: {
			opacity: "hide",
			height: "hide"
		},
		speed: 200, //  animation speed
		speedOut: 200,
		autoArrows: false // disable generation of arrow mark-up
	});

	//add image mask
	$(".bg-with-mask").each(function() {
		$(this).append('<div class="slider-mask"></div>');
	});

	//slider for blog slider
	$(".blog-slider").slick({
		autoplay: true,
		dots: false,
		nextArrow: '<i class="fa fa-arrow-right"></i>',
		prevArrow: '<i class="fa fa-arrow-left"></i>',
		speed: 800,
		fade: true,
		pauseOnHover: false,
		pauseOnFocus: false
	});

	//replace the data-background into background image
	$(".blog-img-bg").each(function() {
		var imG = $(this).data("background");
		$(this).css("background-image", "url('" + imG + "') ");
	});

	//remove footer empty footer icon
	if ($(".footer-icon").has("li").length == 0) {
		$(".footer-icon").remove();
	}

	//change h5 class for custom footer
	$(".anggita-custom-footer div[class*='elementor-widget-wp-'] h5").each(
		function() {
			$(this).addClass("elementor-heading-title");
		}
	);

	//sticky custom header
	$(".custom-sticky-menu .elementor-section:has(.white-header.no-bg)")
		.first()
		.addClass("for-sticky");

	//adding/removing sticky menu class
	$(".for-sticky").on("sticky-start", function() {
		$(this).addClass("anggita-sticky-menu");
		$(this)
			.find(".anggita-nav,.box-mobile")
			.addClass("anggita-stick");
	});
	$(".for-sticky").on("sticky-end", function() {
		$(this).removeClass("anggita-sticky-menu");
		$(this)
			.find(".anggita-nav,.box-mobile")
			.removeClass("anggita-stick");
	});

	//add class for hovering team & hovering icon
	$(
		".elementor-widget-anggita-team-hover,.elementor-widget-anggita-texticon-hover"
	).each(function() {
		$(this)
			.closest(".elementor-column-wrap")
			.addClass("hovering");
	});

	//add height to port-dbox
	$(".port-dbox").each(function() {
		var parentHeight = $(this)
			.parent()
			.innerHeight();
		$(this).innerHeight(parentHeight);
	});
	$(window).on("resize", function() {
		$(".port-dbox").each(function() {
			var parentHeight = $(this)
				.parent()
				.innerHeight();
			$(this).innerHeight(parentHeight);
		});
	});
})(jQuery);
