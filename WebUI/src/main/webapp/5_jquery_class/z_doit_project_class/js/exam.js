window.onload = function() {
	// 1. 오늘 날짜 출력(10점)
	var today = new Date();

	var year = today.getFullYear();
	var month = ("0" + (today.getMonth() + 1)).slice(-2);
	var date = ("0" + (today.getDate())).slice(-2);


	document.getElementsByClassName("year").item(0).innerHTML = year;
	document.getElementsByClassName("month").item(0).innerHTML = month;
	document.getElementsByClassName("date").item(0).innerHTML = date;
}

$(function() {

	// 2. 포커스 가면 ‘검색어를 입력하세요’를 안 보이고 포커스가 없으면 다시 출력(10점)
	$("#keyword").focus(function() {
		$(this).css({ "background": "url()" });
	});
	$("#keyword").blur(function() {
		$(this).css({ "background": "url('./images/sch_guide.gif') no-repeat" });
	});

	// 3. 탭팬 구현(10점)
	$("#tabmenu").each(function() {
		var allDt = $(this).find("dt");
		var allDd = $(this).find("dd");

		allDd.hide();
		allDd.first().show();

		allDt.css({ "cursor": "pointer" });

		allDt.click(function() {
			allDd.hide();
			$(this).next().show();
		});
	});
	$("#tabmenu > dt > a > img").click(function() {
		$("#tabmenu > dt.tab_btn1 > a > img").attr("src", "images/tab_btn_1_out.gif");
		$("#tabmenu > dt.tab_btn2 > a > img").attr("src", "images/tab_btn_2_out.gif");
		$("#tabmenu > dt.tab_btn3 > a > img").attr("src", "images/tab_btn_3_out.gif");
		$(this).attr("src", $(this).attr("src").replace("out", "over"));
	});

	// 4. 이미지 슬라이드 구현(10점)
	$('#best_bg ul').bxSlider({
		mode: 'horizontal',// 가로 방향 수평 슬라이드
		speed: 500,        // 이동 속도를 설정
		pager: false,      // 현재 위치 페이징 표시 여부 설정
		moveSlides: 1,     // 슬라이드 이동시 개수
		slideWidth: 180,   // 슬라이드 너비
		minSlides: 5,      // 최소 노출 개수
		maxSlides: 5,      // 최대 노출 개수
		slideMargin: 4,    // 슬라이드간의 간격
		auto: true,        // 자동 실행 여부
		autoHover: true,   // 마우스 호버시 정지 여부
		controls: false    // 이전 다음 버튼 노출 여부
	});
	$('#best_bg').css(
		{
			'padding-left': '105px',
			'padding-right': '25px',
			'width': '843px'
		});

	// 5. [로그인]을 누르면 로그인 창이 보이고 [Close]를 누르면 다시 안 보임(20점)
	$(".login_wrap > a > img").click(function() {
		$("#login_f").css({ "top": "20px" });
	});

	$(".login_close_btn img").click(function() {
		$("#login_f").css('top', '-500px');
	}); // 5번

	// 6. [전체 메뉴]를 선택하면 전체 메뉴가 보이고 [Close]를 누르면 다시 안 보임(20점)
	$("#total_btn img").click(function() {
		$(this).attr("src", $(this).attr("src").replace("out", "over"));
		$("#total_menu").show();
	});
	$("#total_close img").click(function() {
		$("#total_btn img").attr("src", $("#total_btn img").attr("src").replace("over", "out"));
		$("#total_menu").hide();
	});

	// 7. 그 외 추가적으로 구현하면 해당 화면 캡처하고 코드를 작성합니다(20점)
	// 7-1. 비밀번호 저장 선택시 경고 문구와 함께 확인/취소 선택
	// 확인을 선택하면 비밀번호 저장 체크 유지 / 취소를 선택하면 체크 해제
	$("#save_id").change(function() {
		if ($(this).is(":checked")) { // 체크/해제 변화 중 체크가 되었을 경우에만 작동하도록
			var result = confirm("브라우저를 종료해도 비밀번호가 저장됩니다.\n학교, 학원 등 공공장소에서 이용 시 개인 정보가 유출될 수 있으니 꼭 로그아웃하는 것을 권장합니다.\n정말 비밀번호를 저장하시겠습니까?");
			if (result) { // 네
				$(this).attr("checked", true);
			} else {
				$(this).attr("checked", false);
			}
		} // if
	});
	
	// 7-2. 알림판 탭팬 구현
		$("#roll_banner_wrap dl").each(function() {
		var allDt = $(this).find("dt");
		var allDd = $(this).find("dd");

		allDd.hide();
		allDd.first().show();

		allDt.css({ "cursor": "pointer" });

		allDt.click(function() {
			allDd.hide();
			$(this).next().show();
		});
	});
		$("#roll_banner_wrap > dl > dt > a > img").click(function() {
		$("#roll_banner_wrap > dl > dt.roll_btn1 > a > img").attr("src", "images/pop_btn_1_out.gif");
		$("#roll_banner_wrap > dl > dt.roll_btn2 > a > img").attr("src", "images/pop_btn_2_out.gif");
		$("#roll_banner_wrap > dl > dt.roll_btn3 > a > img").attr("src", "images/pop_btn_3_out.gif");
		$("#roll_banner_wrap > dl > dt.roll_btn4 > a > img").attr("src", "images/pop_btn_4_out.gif");
		$(this).attr("src", $(this).attr("src").replace("out", "over"));
	});
	



});