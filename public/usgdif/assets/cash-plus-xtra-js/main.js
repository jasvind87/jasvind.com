jQuery(function ($) {
    'use strict';
   
		// Header Sticky
		$(window).on('scroll',function() {
            if ($(this).scrollTop() > 120){  
                $('.navbar').addClass("is-sticky");
            }
            else{
                $('.navbar').removeClass("is-sticky");
            }
		});

		// Navbar JS
        $('.navbar .navbar-nav li a').on('click', function(e){
            var anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $(anchor.attr('href')).offset().top - 100
            }, 100);
            e.preventDefault();
        });
        $(document).on('click','.navbar-collapse.in',function(e) {
            if( $(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle' ) {
                $(this).collapse('hide');
            }
        });
		$('.navbar .navbar-nav li a').on('click', function(){
            $('.navbar-collapse').collapse('hide');
            $('.burger-menu').removeClass('active');
		});

        // Button Hover JS
		$('.default-btn')
		.on('mouseenter', function(e) {
			var parentOffset = $(this).offset(),
			relX = e.pageX - parentOffset.left,
			relY = e.pageY - parentOffset.top;
			$(this).find('span').css({top:relY, left:relX})
		})
		.on('mouseout', function(e) {
			var parentOffset = $(this).offset(),
			relX = e.pageX - parentOffset.left,
			relY = e.pageY - parentOffset.top;
			$(this).find('span').css({top:relY, left:relX})
		});

		// Preloader
		jQuery(window).on('load', function () {
			$('.preloader').fadeOut()
		})

		// Odometer JS
        $('.odometer').appear(function(e) {
			var odo = $(".odometer");
			odo.each(function() {
				var countNumber = $(this).attr("data-count");
				$(this).html(countNumber);
			});
		});

		// FAQ Accordion
        $(function() {
            $('.accordion').find('.accordion-title').on('click', function(){
                // Adds Active Class
                $(this).toggleClass('active');
                // Expand or Collapse This Panel
                $(this).next().slideToggle('fast');
                // Hide The Other Panels
                $('.accordion-content').not($(this).next()).slideUp('fast');
                // Removes Active Class From Other Titles
                $('.accordion-title').not($(this)).removeClass('active');		
            });
		});
		
		// Screenshot Slider
		$('.screenshot-slider').owlCarousel({
			loop: false,
			nav: false,
			dots: true,
			autoplayHoverPause: true,
			autoplay: false,
            smartSpeed: 1000,
            margin: 30,
            navText: [
                "<i class='flaticon-curve-arrow'></i>",
                "<i class='flaticon-curve-arrow-1'></i>"
            ],
            responsive: {
				0: {
					items: 1
				},
				576: {
					items: 1
				},
				768: {
					items: 2
				},
				1024: {
					items: 5
				},
				1200: {
					items:6
				}
			}
		});

		// Feedback Carousel
		var $imagesSlider = $(".testimonial-slides .client-feedback>div"),
		$thumbnailsSlider = $(".client-thumbnails>div");
		// Images Options
		$imagesSlider.slick({
			speed: 300,
			slidesToShow: 1,
			slidesToScroll: 1,
			cssEase: 'linear',
			fade: true,
			autoplay: false,
			draggable: true,
			asNavFor: ".client-thumbnails>div",
			prevArrow: '.client-feedback .prev-arrow',
			nextArrow: '.client-feedback .next-arrow'
		});
		// Thumbnails Options
		$thumbnailsSlider.slick({
			speed: 300,
			slidesToShow: 5,
			slidesToScroll: 1,
			cssEase: 'linear',
			autoplay: false,
			centerMode: true,
			draggable: false,
			focusOnSelect: true,
			asNavFor: ".testimonial-slides .client-feedback>div",
			prevArrow: '.client-thumbnails .prev-arrow',
            nextArrow: '.client-thumbnails .next-arrow',
		});
		
		// Tabs
        (function ($) {
            $('.tab ul.tabs').addClass('active').find('> li:eq(0)').addClass('current');
            $('.tab ul.tabs li a').on('click', function (g) {
                var tab = $(this).closest('.tab'), 
                index = $(this).closest('li').index();
                tab.find('ul.tabs > li').removeClass('current');
                $(this).closest('li').addClass('current');
                tab.find('.tab_content').find('div.tabs_item').not('div.tabs_item:eq(' + index + ')').slideUp();
                tab.find('.tab_content').find('div.tabs_item:eq(' + index + ')').slideDown();
                g.preventDefault();
            });
        })(jQuery);

        // Popup Video
		$('.popup-youtube').magnificPopup({
			disableOn: 320,
			type: 'iframe',
			mainClass: 'mfp-fade',
			removalDelay: 160,
			preloader: false,
			fixedContentPos: false
        });

		
		/* Ripple Effect
        ========================================================*/
        $('.ripple-effect, .ripple-playing').ripples({
            resolution: 512,
            dropRadius: 25,
            perturbance: 0.04,
		});
		
		/* Practicle JS
        ========================================================*/
        if(document.getElementById("particles-js")) particlesJS("particles-js", {
            "particles": {
                "number": {
                    "value": 50, "density": {
                        "enable": true, "value_area": 800
                    }
                }
                , "color": {
                    "value": "#ffffff"
                }
                , "shape": {
                    "type": "circle", "stroke": {
                        "width": 0, "color": "#000000"
                    }
                    , "polygon": {
                        "nb_sides": 5
                    }
                    , "image": {
                        "src": "img/github.svg", "width": 100, "height": 100
                    }
                }
                , "opacity": {
                    "value": 0.5, "random": false, "anim": {
                        "enable": false, "speed": 1, "opacity_min": 0.1, "sync": false
                    }
                }
                , "size": {
                    "value": 5, "random": true, "anim": {
                        "enable": false, "speed": 40, "size_min": 0.1, "sync": false
                    }
                }
                , "line_linked": {
                    "enable": true, "distance": 150, "color": "#ffffff", "opacity": 0.4, "width": 1
                }
                , "move": {
                    "enable": true, "speed": 6, "direction": "none", "random": false, "straight": false, "out_mode": "out", "attract": {
                        "enable": false, "rotateX": 600, "rotateY": 1200
                    }
                }
            }
            , "interactivity": {
                "detect_on": "canvas", "events": {
                    "onhover": {
                        "enable": true, "mode": "repulse"
                    }
                    , "onclick": {
                        "enable": true, "mode": "push"
                    }
                    , "resize": true
                }
                , "modes": {
                    "grab": {
                        "distance": 400, "line_linked": {
                            "opacity": 1
                        }
                    }
                    , "bubble": {
                        "distance": 400, "size": 40, "duration": 2, "opacity": 8, "speed": 3
                    }
                    , "repulse": {
                        "distance": 200
                    }
                    , "push": {
                        "particles_nb": 4
                    }
                    , "remove": {
                        "particles_nb": 2
                    }
                }
            }
            , "retina_detect": true, "config_demo": {
                "hide_card": false, "background_color": "#b61924", "background_image": "", "background_position": "50% 50%", "background_repeat": "no-repeat", "background_size": "cover"
            }
        });

        // WOW JS
        $(window).on ('load', function (){
            if ($(".wow").length) { 
                var wow = new WOW({
                boxClass:     'wow',      // animated element css class (default is wow)
                animateClass: 'animated', // animation css class (default is animated)
                offset:       20,          // distance to the element when triggering the animation (default is 0)
                mobile:       true, // trigger animations on mobile devices (default is true)
                live:         true,       // act on asynchronously loaded content (default is true)
            });
            wow.init();
            }
        });

		// Go to Top
        $(function(){
            // Scroll Event
            $(window).on('scroll', function(){
                var scrolled = $(window).scrollTop();
                if (scrolled > 600) $('.go-top').addClass('active');
                if (scrolled < 600) $('.go-top').removeClass('active');
            });  
            // Click Event
            $('.go-top').on('click', function() {
                $("html, body").animate({ scrollTop: "0" },  500);
            });
		});

        // Switch Btn
		$('body').append("<div class='switch-box'><label id='switch' class='switch'><input type='checkbox' onchange='toggleTheme()' id='slider'><span class='slider round'></span></label></div>");

}(jQuery));

// function to set a given theme/color-scheme
function setTheme(themeName) {
  localStorage.setItem('uobam_theme', themeName);
  document.documentElement.className = themeName;
	
/*================================================
  // Send custom event to Google Analytics
  gtag('event', 'Theme Selection', {
    'event_category': 'Theme',
    'event_label': themeName
  });
  // Send custom event to Google Analytics 4
  gtag('event', 'theme_selection', {
    'theme_name': themeName
  });
	=================================================*/
}


// function to toggle between light and dark theme
function toggleTheme() {
	if (localStorage.getItem('uobam_theme') === 'theme-dark') {
		setTheme('theme-light');
	} else {
		setTheme('theme-dark');
	}
}

// Immediately invoked function to set the theme on initial load
(function () {
	if (localStorage.getItem('uobam_theme') === 'theme-light') {
		setTheme('theme-light');
		document.getElementById('slider').checked = true;
	} else {
		setTheme('theme-dark');
	document.getElementById('slider').checked = false;
	}
})();

/*================================================
Show Current Year
=================================================*/
var year = new Date().getFullYear();
        document.getElementById("currentYear").innerHTML = year;

/*================================================
Horizontal Bar Chart Animation
=================================================*/
    const bars = document.querySelectorAll('.custom-bar');

    const handleScroll = () => {
      const chartTop = document.querySelector('.custom-chart').getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (chartTop - windowHeight <= 0) {
        bars.forEach(bar => {
          const barValue = bar.style.getPropertyValue('--bar-value');
          bar.style.animationDuration = '1s';
          bar.style.animationFillMode = 'forwards';
          bar.style.setProperty('--bar-value', '0');
          bar.style.animation = `bar-animation 2s forwards`;
          bar.addEventListener('animationstart', () => {
            bar.style.setProperty('--bar-value', barValue);
          });
        });

        window.removeEventListener('scroll', handleScroll);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check if chart is already in view on initial load





/*================================================
Type & Delete Text Animation
=================================================*/

// Configuration
    const textElement = document.getElementById('text-container');
    const texts = ['Award Winning', 'Best', 'Top-Rated'];
    const typingDelay = 100; // Delay between typing each character
    const deleteDelay = 50; // Delay before deleting the text
    const pauseDelay = 1000; // Delay before typing the next text

    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeText() {
      const currentText = texts[textIndex];
      if (isDeleting) {
        // Delete a character
        textElement.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
      } else {
        // Type a character
        textElement.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
      }

      if (charIndex >= currentText.length) {
        // Text typing complete, start deleting
        isDeleting = true;
        setTimeout(typeText, pauseDelay);
      } else if (charIndex === 0) {
        // Text deleted, move to the next text
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
        setTimeout(typeText, pauseDelay);
      } else {
        // Continue typing/deleting
        setTimeout(typeText, isDeleting ? deleteDelay : typingDelay);
      }
    }

    // Start the typing effect
    typeText();