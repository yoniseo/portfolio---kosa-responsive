	// Scroll
	/****************************************************** 
	* 용도 : 메인 원페이지 스크롤 및 스크롤 네비
	*******************************************************/
  $(window).on('load resize', function(){
    var wW = $(this).width();
    if(wW <= 960){
      $.scrollify.disable();
      $('#content .section.on').removeClass('on');
      $("#cont1").addClass("on");
      $(".mo_pagination li a.active").removeClass("active");
      $(".mo_pagination li a.first").addClass("active");
      $("#fx_pagi .pagination li a.active").removeClass("active");
      $("#fx_pagi .pagination li:first-child a").addClass("active");
    }else{
      $.scrollify.enable();
      $("#cont1").removeClass("on");

      $.scrollify({
        section: ".section",
        interstitialSection:"#footer",
        scrollbars:false,
        before:function(i,panels) {
          var ref = panels[i].attr("data-section-name");
          $(".pagination .active").removeClass("active");
          $(".pagination").find("a[href=\"#" + ref + "\"]").addClass("active");
        },
        afterRender:function(){
          var pagination = "<ul class=\"pagination\">";
          var activeClass = "";
        
          $(".section").each(function(i) {
            activeClass = "";
            if(i===$.scrollify.currentIndex()) {
              activeClass = "active";
            }
            pagination += "<li><a class=\"" + activeClass + "\" href=\"#" + $(this).attr("data-section-name") + "\"><span class=\"hover-text\">" + $(this).attr("data-section-name").charAt(0).toUpperCase() + $(this).attr("data-section-name").slice(1) + "</span></a></li>";
          });
          pagination += "</ul>";

          $("#fx_pagi").append(pagination);
          if($(window).width() > 960){
            $(".pagination a").on("click",$.scrollify.move);
            $(".btn_scrollUp").on("click", function(e){
              e.preventDefault();
              $.scrollify.previous();
            });
            $(".btn_scrollDown").on("click", function(e){
              e.preventDefault();
              $.scrollify.next();
            });
          }
        }
      });
    };

    $(".mo_pagination li a").on("click", function(){
      $(this).addClass("active");
      $(this).parents("li").siblings().children("a").removeClass("active");

      var pagiIndex = $(this).parents("li").index();
      $("#content .section").removeClass("on");
      $("#cont"+pagiIndex).addClass("on");
    });

    console.log(i)
  });

  // function mainResposiveSize(){ 
  //   var wW = $(this).width();
  //   if(wW <= 960){
  //     //모바일 .mo_pagination 연동
  //     $("#cont1").addClass("on");
  //   }else{
  //     $("#cont1").removeClass("on");
  //   };

  //   $(".mo_pagination li a").on("click", function(){
  //     $(this).addClass("active");
  //     $(this).parents("li").siblings().children("a").removeClass("active");

  //     var pagiIndex = $(this).parents("li").index();
  //     $("#content .section").removeClass("on");
  //     $("#cont"+pagiIndex).addClass("on");
  //   });
  // };
    
  $(window).on("scroll", function(){
  	var sT = $(this).scrollTop();
    var wH = $(window).height();
    var cont1Top = $("#cont1").position().top + wH;
  	if(sT >= cont1Top){
  		$(".btn_scrollUp").addClass("view");
  	}else{
  		$(".btn_scrollUp").removeClass("view");
  	}
  	if(sT <= 3104){
  		$(".btn_scrollDown").addClass("view");
  	}else{
  		$(".btn_scrollDown").removeClass("view");
  	}
  });


  // Slider
	/****************************************************** 
	* 용도 : 메인 페이지 슬라이더 적용
	*******************************************************/
    $(".cont1_slider1").slick({
    	arrows: true,
    	dots: true,
    	speed: 800,
    	autoplay: true,
    	autoplaySpeed: 10000,
    	swipe: true,
    	slide: '.c1_s_list',
    });

    var $sw = true;
    $("#cont1 .btn_play_stop").click(function(){
      	if($sw==true){
       		$(this).addClass('on'); 
       		$(".cont1_slider1").slick('slickPause'); 
      	} else {
       		$(this).removeClass('on');
       		$(".cont1_slider1").slick('slickPlay');
      	}
      	$sw = !$sw;
    });

    $(".btn_popup").on("click", function(){
    	$(".slider1_popup").addClass("open");
    });
    $(".btn_popup_close").on("click", function(){
    	$(".slider1_popup").removeClass("open");
    });

    $(".cont1_slider2").slick({
    	arrows: true,
    	dots: false,
    	speed: 800,
    	autoplay: true,
    	autoplaySpeed: 10000,
    	swipe: true,
    	slide: '.c1_s_list',
    	slidesToShow: 4,
  		slidesToScroll: 1
    });

    $(".cont2_slider1").slick({
    	arrows: true,
    	dots: false,
    	speed: 800,
    	autoplay: true,
    	autoplaySpeed: 10000,
    	swipe: true,
    	slide: '.c2_s_list',
      responsive: [
        {
          breakpoint: 960,
          settings: {
            slidesToShow: 1,
          }
        }

      ]
    });

    $(".cont2_slider2").slick({
    	arrows: true,
    	dots: false,
    	speed: 800,
    	autoplay: true,
    	autoplaySpeed: 10000,
    	swipe: true,
    	slide: '.c2_s_list'
    });