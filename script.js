// $(function () {
// 	var btn = $('#page-top');

// 	$(window).on('load scroll', function () {
// 		if ($(this).scrollTop() > 100) {
// 			btn.addClass('active');
// 		} else {
// 			btn.removeClass('active');
// 		}
// 	});
// });

$(function () {
	$('.btn-trigger').on('click', function () {
		$(this).toggleClass('active');
		return false;
	});
});

$(function () {
	const pageTop = $("#page-top");
	pageTop.hide();
	$(window).scroll(function () {
		if ($(this).scrollTop() > 700) { // 100pxスクロールしたら表示
			pageTop.fadeIn(); // 100px以上スクロールしたらボタンをフェードイン
		} else {
			pageTop.fadeOut(); // 100px以下になったらボタンをフェードアウト
		}
	});
	pageTop.click(function () {
		$("body,html").animate(
			{
				scrollTop: 0,
			},
			100
		);
		return false;
	});
});