<%@ page import="java.util.*" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<title>추천 레이드 판독기</title>
</head>
<body>

<%! String id = null; %>
<%! String subLevel = null; %>

<p> 배운 것을 테스트해 보려고 하는 착한 학생의 모습입니다 </p>
<hr>
<hr>

<form method="get">
	닉네임과 아이템 레벨을 입력하세요 <br>
	닉네임: <input type="text" name="id"><br>
	아이템 레벨: <input type="text" name="level"><br>
	<input type="submit" value="전송"><br>
</form>
<hr>

<%	id = request.getParameter("id");
	subLevel = request.getParameter("level");
	
	if(id == null){
%>	아직 입력되지 않았습니다
<% 	} else {
	int level = Integer.parseInt(subLevel);
	if( level >= 1600 ) {
%>		축하합니다 <%= id %>님!<br>
		당신의 아이템 레벨은 <%= level %>이므로<br>
		<mark>
		하드 일리아칸<br>
		하드 아브렐슈드<br>
		쿠크세이튼<br>
		</mark>
		에 가야만 합니다
<% 	} else if (level >= 1580 ){
%>		축하합니다 <%= id %>님!<br>
	당신의 아이템 레벨은 <%= level %>이므로<br>
	<mark>노말 일리아칸<br>
	하드 아브렐슈드<br>
	쿠크세이튼<br>
	</mark>
	에 가야만 합니다
<% 	} else if (level >= 1540) {
	%>		축하합니다 <%= id %>님!<br>
	당신의 아이템 레벨은 <%= level %>이므로<br>
	<mark>
	하드 아브렐슈드<br>
	쿠크세이튼<br>
	발비따리<br></mark>
	에 가야만 합니다
<% 	}
}
	%>

</body>
</html>