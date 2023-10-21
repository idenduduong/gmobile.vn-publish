$(document).ready(function(){
	
	if($(".wow").length){
		var wow = new WOW({
			mobile	: false
		});
		wow.init();
	}
	
	if($(".click_s").length){
		$(".click_s, .click_s_rwd").click(function() {
			$(".form_s").addClass("active");
			$('body').addClass('fixbody');
		});	
		$(".close_form_s").click(function() {
			$(".form_s").removeClass("active");
			$('body').removeClass('fixbody');
		});	
	}
	
	if($(".ul_r1_cont").length){
		$('.ul_r1_cont > li:nth-child(2)').addClass("active");
		$('.ul_r1_cont > li').hover(
			function(){ 
				$(".ul_r1_cont > li.active").addClass('inactive').removeClass('active');
			},
			function(){ 
				$(".ul_r1_cont > li.inactive").addClass('active').removeClass('inactive'); 
			}
		);
	}
	
	$(".list_faq li h4").click(function(){
		$(".list_faq li").removeClass("active");
		$(this).parent().toggleClass('active');
	});
	
	$(".list_dm_mn_page li a").click(function(){
		$(".list_dm_mn_page li").removeClass("active");
		$(this).parent().toggleClass('active');
	});
	
	$(".s_mn_page").click(function(){
		$(this).toggleClass('active');
		$(".mn_page").slideToggle();
	});
	
	/***********************************************************************************/	
	
	if($(".swiper1").length){
		var swiper1 = new Swiper('.swiper1', {
			pagination: {
				el: ".swiper-pagination-1",
				clickable: true
			},
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			},
			autoplay: {
				delay: 5000,
				disableOnInteraction: false
			},
			effect: 'fade',
			lazy: {
				loadPrevNext: true				
			}
		});
	}
	
	if($(".swiper2").length){
		var swiper2 = new Swiper('.swiper2', {
			pagination: {
				el: ".swiper-pagination-2",
				clickable: true
			},
			watchOverflow: true,
			preloadImages: false,
			lazy: {
				loadPrevNext: true				
			},
			slidesPerView: 4,
			spaceBetween: 30,
			breakpoints: {
				1024: {
					slidesPerView: 4,
					spaceBetween: 30,
				},
				320: {
					slidesPerView: 'auto',
					spaceBetween: '3%',
				}
			}
		});
	}
	
	if($(".swiper3").length){
		var swiper3 = new Swiper('.swiper3', {
			pagination: {
				el: ".swiper-pagination-2",
				clickable: true
			},
			watchOverflow: true,
			preloadImages: false,
			lazy: {
				loadPrevNext: true				
			},
			slidesPerView: 3,
			spaceBetween: 30,
			breakpoints: {
				1024: {
					slidesPerView: 3,
					spaceBetween: 30,
				},
				320: {
					slidesPerView: 'auto',
					spaceBetween: '3%',
				}
			}
		});
	}
	
	if($(".swiper4").length){
		var swiper4 = new Swiper('.swiper4', {
			watchOverflow: true,
			preloadImages: false,
			lazy: {
				loadPrevNext: true,					
			},
			autoplay: {
				delay: 2000,
			},
			speed: 500,
			slidesPerView: 6,
			spaceBetween: 30,
			breakpoints: {
				1024: {
					slidesPerView: 6,
					spaceBetween: 30,
				},
				768: {
					slidesPerView: 4,
					spaceBetween: 30,
				},
				480: {
					slidesPerView: 3,
					spaceBetween: 30,
				},
				320: {
					slidesPerView: 2,
					spaceBetween: 30,
				}
			}
		});
	}
	
	
	/***********************************************************************************/
});