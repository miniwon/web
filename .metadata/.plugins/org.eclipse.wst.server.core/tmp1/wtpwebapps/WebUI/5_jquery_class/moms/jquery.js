$(function() {

	// 초기화면 구성을 위한 가리기
	$(".dmenu").hide();
	$(".cmenu").hide();
	$(".hmenu").hide();
	$("#headerTbl").hide();
	$(".htb").hide();
	$("#orderTbl").hide();
	$("#orderCount").hide();

	// 첫 화면에서 포장 or 매장 선택
	$('.heretogo:eq(0)').click(function() {
		$("#firstPage").hide();
		$("#headerTbl").show();
		$(".hmenu").show();
		$(".htb").show();
		$("#orderTbl").show();
		$("#orderCount").show();
		var srcHere = $('.belowMenu:eq(0)').attr('src');
		$('.belowMenu:eq(0)').attr("src", srcHere.replace("off", "on"));
		var srcTogo = $('.belowMenu:eq(1)').attr('src');
		$('.belowMenu:eq(1)').attr("src", srcTogo.replace("on", "off"));
		var srcBg = $('.menuTab:eq(0)').attr('src');
		$('.menuTab:eq(0)').attr("src", srcBg.replace("off", "on"));
		var srcCh = $('.menuTab:eq(1)').attr('src');
		$('.menuTab:eq(1)').attr("src", srcCh.replace("on", "off"));
		var srcDr = $('.menuTab:eq(2)').attr('src');
		$('.menuTab:eq(2)').attr("src", srcDr.replace("on", "off"));
	});
	$('.heretogo:eq(1)').click(function() {
		$("#firstPage").hide();
		$("#headerTbl").show();
		$(".hmenu").show();
		$(".htb").show();
		$("#orderTbl").show();
		$("#orderCount").show();
		var srcHere = $('.belowMenu:eq(0)').attr('src');
		$('.belowMenu:eq(0)').attr("src", srcHere.replace("on", "off"));
		var srcTogo = $('.belowMenu:eq(1)').attr('src');
		$('.belowMenu:eq(1)').attr("src", srcTogo.replace("off", "on"));
		var srcBg = $('.menuTab:eq(0)').attr('src');
		$('.menuTab:eq(0)').attr("src", srcBg.replace("off", "on"));
		var srcCh = $('.menuTab:eq(1)').attr('src');
		$('.menuTab:eq(1)').attr("src", srcCh.replace("on", "off"));
		var srcDr = $('.menuTab:eq(2)').attr('src');
		$('.menuTab:eq(2)').attr("src", srcDr.replace("on", "off"));
	});

	// 상단에서 포장과 매장 변경
	$('#here').click(function() {
		var result = confirm("매장 식사로 변경하시겠습니까?");
		if (result) { // yes
			var srcHere = $('.belowMenu:eq(0)').attr('src');
			$('.belowMenu:eq(0)').attr("src", srcHere.replace("off", "on"));
			var srcTogo = $('.belowMenu:eq(1)').attr('src');
			$('.belowMenu:eq(1)').attr("src", srcTogo.replace("on", "off"));
		}
	});
	$('#togo').click(function() {
		var result = confirm("포장으로 변경하시겠습니까?");
		if (result) { // yes
			var srcHere = $('.belowMenu:eq(0)').attr('src');
			$('.belowMenu:eq(0)').attr("src", srcHere.replace("on", "off"));
			var srcTogo = $('.belowMenu:eq(1)').attr('src');
			$('.belowMenu:eq(1)').attr("src", srcTogo.replace("off", "on"));
		}
	});

	// 상단의 첫화면 버튼 누르면 초기 화면으로 리셋
	$('#reset').click(function() {
		var result = confirm("첫 화면으로 돌아가시겠습니까?\n주문 목록이 초기화됩니다.");
		if (result) { // yes
			$(".dmenu").hide();
			$(".cmenu").hide();
			$(".hmenu").hide();
			$("#headerTbl").hide();
			$(".htb").hide();
			$("#orderTbl").hide();
			$("#orderCount").hide();
			$("#firstPage").show();
			$("#selectedMenu").empty();
			$("#menuCount").val('1');
			$("#subPrice").text("0");

			sum = 0;
			$("#total").attr("value", sum);
			$('#orderTbl tbody tr.list').remove();
		}

	});

	// 버거를 누르면 햄버거 메뉴만 보이고 치킨/음료 없앤 뒤 하얀 버튼으로 변경
	$('.menuTab:eq(0)').click(function() { //햄버거
		$(".hmenu").show();
		$(".dmenu").hide();
		$(".cmenu").hide();
		var srcBg = $('.menuTab:eq(0)').attr('src');
		$('.menuTab:eq(0)').attr("src", srcBg.replace("off", "on"));
		var srcCh = $('.menuTab:eq(1)').attr('src');
		$('.menuTab:eq(1)').attr("src", srcCh.replace("on", "off"));
		var srcDr = $('.menuTab:eq(2)').attr('src');
		$('.menuTab:eq(2)').attr("src", srcDr.replace("on", "off"));
		$("#selectedMenu").empty();
		$("#menuCount").val("1");
		$("#subPrice").text("0");
	});
	$('.menuTab:eq(1)').click(function() {
		$(".dmenu").hide();
		$(".hmenu").hide();
		$(".cmenu").show();
		var srcBg = $('.menuTab:eq(0)').attr('src');
		$('.menuTab:eq(0)').attr("src", srcBg.replace("on", "off"));
		var srcCh = $('.menuTab:eq(1)').attr('src');
		$('.menuTab:eq(1)').attr("src", srcCh.replace("off", "on"));
		var srcDr = $('.menuTab:eq(2)').attr('src');
		$('.menuTab:eq(2)').attr("src", srcDr.replace("on", "off"));
		$("#selectedMenu").empty();
		$("#menuCount").val("1");
		$("#subPrice").text("0");
	});
	$('.menuTab:eq(2)').click(function() {
		$(".dmenu").show();
		$(".hmenu").hide();
		$(".cmenu").hide();
		var srcBg = $('.menuTab:eq(0)').attr('src');
		$('.menuTab:eq(0)').attr("src", srcBg.replace("on", "off"));
		var srcCh = $('.menuTab:eq(1)').attr('src');
		$('.menuTab:eq(1)').attr("src", srcCh.replace("on", "off"));
		var srcDr = $('.menuTab:eq(2)').attr('src');
		$('.menuTab:eq(2)').attr("src", srcDr.replace("off", "on"));
		$("#selectedMenu").empty();
		$("#menuCount").val("1");
		$("#subPrice").text("0");
	});


	// 메뉴를 클릭하면 우측 상단에 메뉴가 선택됨
	$('.cmenu, .dmenu, .hmenu').click(function() {
		var clone = $(this).clone();
		$("#selectedMenu").empty();
		$("#menuCount").val('1');
		$('#selectedMenu').append(clone);
		clone = clone.find("[price]");
		$("#subPrice").text(clone.attr("price"));
	});

	// 개수 누르면 자동 계산
	$("#menuCount").change(function() {
		var priceObj = $("#selectedMenu").find("[price]"); // 객체 뽑기
		var selectedPrice = priceObj.attr("price");				// 속성값 텍스트로 추출
		selectedPrice = 1 * selectedPrice;
		$("#subPrice").text($(this).val() * selectedPrice);
	});


	// 계산을 위한 전역 변수 선언
	var sum = 0;		// 합계액
	var menuName;		// 메뉴 이름
	var count;			// 개수
	var price;			// 개당 가격

	var tdName;			// 주문 내역_이름
	var tdCount;		// 주문 내역_개수
	var tdPrice;		// 주문 내역_금액
	var tdButton;		// 주문 내역_삭제 버튼

	// 메뉴 추가 버튼을 눌렀을 때
	$("#addOrder").click(function() {
		if ($("#subPrice").text() == "0") {
			alert("메뉴를 선택하지 않았습니다");
		} else {
			// 1. 총액 출력
			// 1-1. 메뉴 이름 저장
			menuName = $("#selectedMenu").find("[value]").attr("value");
			// 1-2. 개수 저장$('#orderTbl tbody tr.list')
			count = $("#menuCount").val();
			// 1-3. 개당 가격 저장
			price = $("#selectedMenu").find("[price]").attr("price");
			//		alert("이름" + menuName + "개수" + count + "가격" + price);

			// 1-4. 총합 계산
			sum += count * price;

			// 1-5. 총 주문 금액 출력
			$("#total").attr("value", sum);

			// 2. 주문 내역 출력
			// 2-1. 이름을 td로 생성하여 저장
			tdName = $("<td/>").text(menuName);
			tdName.attr("name", price);

			/* 중복일 경우 */
			var flag = false;										//중복 여부 판단 변수 선언
			var lis = $('#orderTbl tbody tr.list');						//추가된 tr 저장한 변수
			for (var i = 0; i < lis.length; i++) {
				if (menuName == $(lis[i]).find('td:eq(0)').text()) {			//주문내역 table에 선택한 메뉴의 이름이 있을 경우
					alert(menuName + "(이)가 " + count + "개 추가되었습니다.");	//변경 내용 출력

					var currentCount = Number($(lis[i]).find('td:eq(2)').text());			//해당하는 tr(lis[i])의 자식요소(td)중 2번째의 값 저장
					currentCount += Number(count);
					$(lis[i]).find('td:eq(2)').text(currentCount);	//개수 수정 후 출력

					var currentPrice = Number($(lis[i]).find('td:eq(4)').text()); 			//해당하는 tr(lis[i])의 자식요소(td)중 3번째의 값 저장
					currentPrice += Number(count) * Number(price);
					$(lis[i]).find('td:eq(4)').text(currentPrice);		// 가격 수정 후 출력

					flag = true;
				}//if-for
			}//for

			if (!flag) {															//중복이 아닐 경우
				tdCount = $('<td/>').text(count);
				tdPrice = $('<td/>').text(price * count);
				tdButton = $('<td><button class="del" value="삭제">삭제</button></td>');
				tdPlus = $('<td><button class="plus" value="추가">+</button></td>');
				tdDown = $('<td><button class="down" value="감소">-</button></td>');

				//2) tr에 td들 붙이기
				var tr = $('<tr/>');
				tr.append(tdName);
				tr.append(tdDown);
				tr.append(tdCount);
				tr.append(tdPlus);
				tr.append(tdPrice);
				tr.append(tdButton);


				tr.attr('class', 'list'); //tr의 속성 설정 -- 다른 tr들과 동적으로 추가한 tr 구분함

				//3) tr을 table에 붙이기
				$('#orderTbl tbody').append(tr);
			}//if
			else {//else - 0개일 경우
				$('#menuCount').val('1');
			}
		}
	});

	// 삭제 버튼을 눌렀을 때
	$("#orderTbl").on("click", ".del", function() { 					//listTable안의 btn을 선택
		//		alert($(this).parent().parent().find('td:eq(4)').text());
		sum -= $(this).parent().parent().find('td:eq(4)').text(); 	//this(btn)의 부모(td)의 부모(tr)의 자식요소(td)중 3번째의 text 저장
		$('#total').attr('value', sum);											//최종금액 내용 설정
		$(this).parent().parent().remove();       							//this(btn)의 부모(td)의 부모(tr)를 삭제
		$('#menuCount').val('1');
	});//click

	// 주문 완료 버튼을 눌렀을 경우
	$('#btn').click(function() {
		var result = confirm("총 결제 금액: " + sum + "원\n결제하시겠습니까?");
		if (result) { // yes
			$(".dmenu").hide();
			$(".cmenu").hide();
			$(".hmenu").hide();
			$("#headerTbl").hide();
			$(".htb").hide();
			$("#orderTbl").hide();
			$("#orderCount").hide();
			$("#firstPage").show();
			$("#selectedMenu").empty();
			$("#menuCount").val('1');
			$("#subPrice").text("0");

			sum = 0;
			$("#total").attr("value", sum);
			$('#orderTbl tbody tr.list').remove();


		}										//sum 변수 초기화
	})//btn click
});

