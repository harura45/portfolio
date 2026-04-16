$('.slider').slick({
	autoplay: true, // 自動再生を設定
	autoplaySpeed: 3000, // スライド切り替えの時間を設定
	dots: true, // インジケーターを表示
	arrows: false,
	slidesToShow: 3,
	responsive: [{
		breakpoint: 960,
		settings: {
			slidesToShow: 1

		}
	}]
});


$(function () {
	$('.btn-trigger').on('click', function () {
		$(this).toggleClass('active');
		return false;
	});
});

(function ($) {
	var $nav = $('#navArea');
	var $btn = $('.btn-trigger');
	var $mask = $('#mask');
	var open = 'open'; // class
	// menu open close
	$btn.on('click', function () {
		if (!$nav.hasClass(open)) {
			$nav.addClass(open);
		} else {
			$nav.removeClass(open);
		}
	});
	// mask close
	$mask.on('click', function () {
		$nav.removeClass(open);
	});
})(jQuery);


jQuery(function () {
	var pagetop = $('#page_top');
	pagetop.hide();
	$(window).scroll(function () {
		if ($(this).scrollTop() > 300) {  //100pxスクロールしたら表示
			pagetop.fadeIn();
		} else {
			pagetop.fadeOut();
		}
	});
	pagetop.click(function () {
		$('body,html').animate({
			scrollTop: 0
		}, 500); //0.5秒かけてトップへ移動
		return false;
	});
});