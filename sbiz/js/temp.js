
/**** 이하 전체 테스트용입니다. ****/



$("button, a").on("click", function(){
	console.log(this);
})



/* 검색 기간 */
$(".term li").on("click", function(){
	$(this).siblings().removeClass("on");
	$(this).addClass("on");
})

$(".gnb_wrap li").on("click", function(){
	$(this).siblings().removeClass("on");
	$(this).addClass("on");
})



/* 페이지 네비 그림자 */
var $window = $(window);
var $header = $("header");
var header_pos = $header.outerHeight();
var pos;
$window.on('scroll', function(){
	pos = $(this).scrollTop();
	if(pos >= header_pos) {
		$("header").addClass("on")
	} else {
		$("header").removeClass("on")
	}
});



/* faq 아코디언 */
$(".faq_wrap .item").each(function(){
	var btn = $(this).find(".quest");
	$(btn).on("click", function(){
		$(this).parents(".item").toggleClass("on");
		$(this).siblings(".ans").stop().slideToggle(150);
	})
})



/* 이용내역 편집 팝업 */
/* 편집과 같이 나온 dim 클릭 */
/*$(".edit_wrap .dim").on("click", function(){
	close_page();
	$('.edit_wrap .edit').attr('disabled', false);
	$(this).siblings("ul").hide();
	$(this).hide();
})*/



/* 목록 숨김 클릭 */
$(".edit_wrap button.hide").on("click", function(){
	$(".dim").hide();
	$(this).parents("ul").hide();
	$(".result_list .chk").show();
	$(".result_list").css({
		"padding-bottom" : "52px"
	})
	body_unfixed()
})



/* 숨김목록 관리 클릭 */
$(".edit_wrap button.hide_edit").on("click", function(){
	$(".dim").hide();
	$(this).parents("ul").hide();
})



/* 하단 레이엎 팝업 닫기 */
$(".footer_layer button.close, .footer_layer button.cancel").on("click", function(){
	$(this).parents(".footer_layer").slideUp(200);
	$(".dim").hide();
	$(".result_list .chk").hide();
	$(".result_list").css({
		"padding-bottom" : "0"
	})
})



/* 풀 팝업 닫기 */
$(".popup .pop_header button.close").on("click", function(){
	close_page(this);
	$(this).parents(".popup").slideUp(200);
	body_unfixed();
})

$(".clear button").on("click", function(){
	$(this).parents(".item").slideUp(200)
	body_unfixed();
})

$(".txt_wrap").on("click", function(){
	$("#page_temp2").show();
})

$("button.close").on("click", function(){
	$("body").removeClass("fixed");
})



/* 기능 팝업 열기 */
function open_page(target,state){
	$(".dim").show();
	var popup_page = $("#" + target);
	popup_page.show();

	popup_page.addClass("opened")
	$(".dim").addClass("opened")
	
	body_fixed();
}

// 팀 클릭시 열려있는 레이어 닫기.
$(".dim").on("click", function(){
	$this = $(this);
	if($this.hasClass("opened")) {
		$(".opened").hide().removeClass("opened");
	}
	body_unfixed();
})


/* 풀페이지 팝업 닫기(fixed 삭제) */
function close_page(target){
	body_unfixed();
}


// 스크롤 고정
function body_fixed(){
	$("body").addClass("fixed");
}
//스크롤 복구
function body_unfixed(){
	$("body").removeClass("fixed");
}


/* 햄버거 메뉴 */
$(".wrap .tools button.menu").on("click", function(){
	$(".aside_wrap").addClass("active")
})
$(".aside_header button.aside_close").on("click", function(){
	$(this).parents(".aside_wrap").removeClass("active")
})


/* 탭 테스트 */
$(".tab_wrap li a").on("click", function(){
	$(this).parents("li").siblings().removeClass("on");
	$(this).parents("li").addClass("on");
})


// page_popup, popup의 X버튼 클릭시 팝업 닫음.
/*$(".wrap.page_popup button.close").on("click", function(){
	$(this).parents(".page_popup").hide();
	$("body").removeClass("fixed");
})*/



// header영역만큼 padding-top 주기 

/*function containerPadding(){
	var $container = $("body .container, body .demo_container");
	$container.each(function(){
		var $header = $(this).siblings("header");
		headerHeight = $header.outerHeight();
		$(this).css({
			"padding-top" : headerHeight
		})
	})
}*/

/*containerPadding();*/ // 풀페이지 팝업이 뜰때마다 실행시켜주기.


// 툴팁 도움말
function layer_tooltip(ele) {
	$(".layer.help").hide();
	$(".layer.help").removeClass("active");
	let thisOffset  = ele.offset().top;
	let $targetHref = ele.attr("href");
	let targetId = $targetHref;
	let viewportHeight = $(window).innerHeight();
	if(viewportHeight / 2 < ((pos - thisOffset) * -1)) {
		/* 버튼의 높이값이 **보다 크면 버튼 위에 */
		let targetHeight = ( $(targetId).outerHeight() + (ele.outerHeight() / 3) )* -1; // 도움말 팝업의 높이값
		$(targetId).css({
			top : thisOffset,
			marginTop : targetHeight
		});
	} else {
		/* 버튼의 높이값이 **보다 작으면 버튼 아래 */
		$(targetId).css({
			top : thisOffset,
			marginTop : ele.outerHeight() + (ele.outerHeight() / 3)
		});
	}
	$(targetId).show();
	$(targetId).addClass("active");
	return false;
}
$(".tooltip .help").on("click", function(){
	layer_tooltip($(this));
	return false;
})

$(".layer .close button").on("click", function(){
	$(this).parents(".layer").hide();
})
// 툴팁 도움말 end