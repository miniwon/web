/**
 * 
 */
$(function() {
	$("#hideButton").click(function() {
		$("#intro > img").fadeOut(2000);
	});
	$("#showButton").click(function() {
		$("#intro > img").fadeIn(2000);
	});
	$("#toggleButton").click(function() {
		//$("#intro > img").toggle(1000);
						  // fadeToggle(1000);
						  // slideToggle(1000);
		if ($("#intro > img").is(":visible")) {
			$("#intro > img").fadeOut(1000);
		} else {
			$("#intro > img").fadeIn(1000);
		}
	});
	
	// 테이블의 내용 중 홀수 행의 배경색을 지정
//	$("#celebs table.data > tbody tr:even").css({"background":"aliceblue"});
	$("#celebs table.data > tbody tr:even").addClass("table_striping");
	
	// 마우스가 올라갔을 때 배경색 바뀌고 다시 나오면 원래 색으로
	$("#celebs tbody tr").hover(function(){
		$(this).addClass("td_mouseover");
	}, function(){
		$(this).removeClass("td_mouseover");
	});
});