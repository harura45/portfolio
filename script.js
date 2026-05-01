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


const body = document.querySelector('body');
const menuBtn = document.querySelectorAll('[data-menubtn]'); //メニューボタン
const fsAction = document.querySelectorAll('[data-fsaction]'); //全画面メニュー表示時にクラスを追加
let fsIsActive = false;
let windowTop = 0;

//表示
const menuOpen = () => {
	fsAction.forEach((item) => {
		item.classList.add("fs-active");
	});
	//bodyの位置をずらすことで、見た目上は、コンテンツの位置を変えない
	windowTop = window.scrollY;
	body.style.top = - windowTop + "px";
	body.classList.add("fs-active");
	fsIsActive = true;
}

//非表示
const menuClose = (id) => {
	fsAction.forEach((item) => {
		item.classList.remove("fs-active");
	});
	//fixedを解除して、元の位置に戻す。
	body.classList.remove("fs-active");
	body.style.top = "";
	window.scrollTo({
		top: windowTop,
	});
	fsIsActive = false;
}

//メニューボタン クリック
menuBtn.forEach((item) => {
	item.addEventListener('click', () => {
		if (fsIsActive) {
			menuClose();
		} else {
			menuOpen();
		}
	});
});