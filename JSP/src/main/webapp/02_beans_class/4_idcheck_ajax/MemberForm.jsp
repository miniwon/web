<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>

<%@ page import="member.beans.MemberDao" %>
    
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<script type="text/javascript"
   src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
<title> 회원가입  </title>
<script type="text/javascript">

$(function () {
	$(':button').click(function () {
		//alert('ok');
		if($('input[name=id]').val() ==null || $('input[name=id]').val() ==''){$('#result').text('아이디를 입력해 주세요.');}
		else{   
			$.ajax({
	            url : 'CheckId.jsp',
	            data : {
	               id : $('input[name=id]').val()   // 사용자가 입력한 아이디의 값
	            },
	            success : function(data) {
	               // data : 서버에서 return 된 값
	               if (data.trim() == 'true') {
	                  $('#result').text('이미 존재하는 아이디입니다.');
	                  $('#result').show();
	               } else if (data.trim() == 'false') {
	                  // result 가 리턴 될 때 문자열 앞뒤로 공백이 생김. 
	                  // trim() 함수 사용해서 공백 제거 필수.
	                  $('#result').text('사용 가능한 아이디입니다.');
	                  $('#result').show();
	               }

	            }

	         });
		}
	}); // end of $(':button').click(function () {})
	
})// end of $(function (){})
	
</script>
</head>
<body>

<h1>회원가입서 작성하기</h1>
 
	<form action="InsertMember.jsp" method="post" name="frm">
		<table>
			<tr>
				<td width="100">
				<font color="blue">아이디</font>
				</td>
				<td width="100">
				<input type="text" name="id">
				<input type="button" value="중복확인" ><br/>
				<div id='result'></div>
				</td>
			</tr>
			<tr>
				<td width="100">
				<font color="blue">비밀번호</font>
				</td>
				<td width="100">
				<input type="password" name="password"/><br/>
				</td>
			</tr>
			<tr>
				<td width="100">
				<font color="blue">비밀번호학인</font>
				</td>
				<td width="100">
				<input type="password" name="repassword"/><br/>
				</td>
			</tr>
			<tr>
				<td width="100">
				<font color="blue">이름</font>
				</td>
				<td width="100">
				<input type="text" name="name"/><br/>
				</td>
			</tr>
			<tr>
				<td width="100">
				<font color="blue">전화번호</font>
				</td>
				<td>
				<input type="text" size="15" name="tel"/>
				<br/>
				</td>
			</tr>
			<tr>
				<td width="100">
				<font color="blue">주소</font>
				</td>
				<td>
				<input type="text" size="50" name="addr"/><br/>
				</td>
			</tr>
			<tr>
				<td width="100">
				 <!--로그인 버튼-->
				 <input type="submit" value="회원가입">
				</td>
				<td width="100">
				<input type="reset" name="cancel" value="취소"><br/>
				</td>
			</tr>
		</table>
	</form>



 </body>
</html>
    