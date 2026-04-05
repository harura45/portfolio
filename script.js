$(function () {
	$('.btn-trigger').on('click', function () {
		$(this).toggleClass('active');
		return false;
	});

	$(".reason1").on("inview", function () {
		$(this).addClass("is-inview1");
	});
	$(".reason2").on("inview", function () {
		$(this).addClass("is-inview2");
	});
	$(".voice1").on("inview", function () {
		$(this).addClass("is-inview");
	});
	$(".voice2").on("inview", function () {
		$(this).addClass("is-inview");
	});
	$(".voice3").on("inview", function () {
		$(this).addClass("is-inview");
	});
});
