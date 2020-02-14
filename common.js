	// Header
	/****************************************************** 
	* 용도 : 호버 시 하위 메뉴가 나오도록 함. 
	*******************************************************/
	var $subNav = $("#sub_nav");
	var $depth1 = $("#nav .depth1");
	var $depth2 = $("#sub_nav .depth2");
	$depth1.mouseenter(function(){
		var $depth1Index = $depth1.index(this);
		$depth2.eq($depth1Index).addClass("active");//mouseennter된 depth1의 index값과 상응하는 순서의 depth2를 찾아서 active클래스를 추가.
		$depth2.eq($depth1Index).siblings().removeClass("active");//active추가된 depth2의 형제 depth2들은 active클래스를 제거.
		$subNav.addClass("active");
	})
	$subNav.mouseenter(function(){
		$(this).addClass("active");
	}).mouseleave(function() {
		$(this).removeClass("active");
		$depth2.removeClass("active");
	});

	/****************************************************** 
	* 용도 : 버튼 클릭 시 하위 메뉴 여닫기.
	* .btn_all, .btn_close 클릭 시 토글 클래스 주기.
	*******************************************************/
	var $btnAll = $(".btn_all");
	var $sitemap = $("#sitemap");
	$btnAll.click(function(){
		$(this).toggleClass("bg_blue");
		$sitemap.toggleClass("active");
	});
	$(".btn_close").click(function(){
		$btnAll.removeClass("bg_blue");
		$sitemap.removeClass("active");
	});


	//Mobile header
	/****************************************************** 
	* 용도 : 버튼 클릭 시 모바일 메뉴 여닫기.
	* .btn_mo_nav, .btn_mo_close 클릭 시 토글 클래스 주기.
	*******************************************************/
	var $body = $("body");
	var $moNav = $("#mo_nav");
	var $overlay = $(".overlay");
	$(".btn_mo_nav").click(function(){
		$moNav.addClass("on");
		$body.addClass("scroll_hid");
		$overlay.addClass("on")
	});
	$(".btn_mo_close").click(function(){
		$moNav.removeClass("on");
		$body.removeClass("scroll_hid");
		$overlay.removeClass("on")
	});


	// Footer
	/****************************************************** 
	* 용도 : .prevent클래스 링크 기능 막기 
	*******************************************************/
	$(".prevent").click(function(e){
		e.preventDefault();
	});