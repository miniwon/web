/**
 * 
 */

var tds = document.getElementsByTagName("td");

for(let i = 0; i < tds.length; i++) {
	tds[i].onclick = function(){
		alert("선택하신 메뉴는 " + tds[i].getAttribute('data-name') + "이고 가격은 " + tds[i].getAttribute('data-price') + "원입니다");
	}
} 