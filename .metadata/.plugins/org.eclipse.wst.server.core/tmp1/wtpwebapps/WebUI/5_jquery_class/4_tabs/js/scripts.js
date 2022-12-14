$(function() {

	var topDiv = $(".tabSet");
	var anchors = topDiv.find("ul.tabs > li > a");
	var panelDivs = topDiv.find("div.panels > div.panel");
	
	anchors.show();
	panelDivs.hide();
	
	// find: 셀렉터로 찾을 때
	// filter: 속성의 값을 이용해 찾을 때
	var lastAnchor = anchors.filter(".on");
	
	// $ 있고 없고 차이 확인하기 - $는 객체
	var lastPanel = $(lastAnchor.attr("href"));
//	alert(lastPanel);
	lastPanel.show();
	
	anchors.click(function(){
		var currentAnchor = $(this);
		var currentPanel = $(currentAnchor.attr("href"));
		
		lastPanel.hide();
		currentPanel.show();
		
		lastAnchor.removeClass("on");
		currentAnchor.addClass("on");
		
		lastAnchor = currentAnchor;
		lastPanel = currentPanel;
	});
	
	

});