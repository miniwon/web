<%@ page import="java.util.*" contentType="text/html; charset=UTF-8" 
pageEncoding="UTF-8"%>

<!DOCTYPE html>
<html>
<head><title> Number Guess </title></head>
<body>

<%! int answer=0; %>		<!-- 정답 -->
<%! int numGuesses=0; %>	<!-- 정답을 입력한 횟수 -->

<% 
	// request 객체의 getParameter("form의 name값") 메서드
	// getParameter()는 항상 값을 String 형태로 반환: int형 저장을 원할 시 형변환
	String guess=request.getParameter("guess");		// 입력받은 숫자를 guess라는 String 변수에 저장
	 	
		// 첫 시행: 입력받은 적이 없으므로 guess가 비어 있음
		if( guess==null ) {
%>
			<p>Welcome to the Number Guess game. </p>

<% 			answer= (int)( Math.random()*100 )  + 1;	// 정답 만들기: 1~100 랜덤 숫자 뽑기
			numGuesses=0;								// 정답 입력한 횟수 초기화
			
		// 첫 시행이 아닌 경우: 입력받은 적이 있기 때문에 guess에 값이 있다	
		} else {a
			
			int value=Integer.parseInt(guess);			// 입력받은 숫자가 저장된 String guess를 int형으로 변환
			
			// 입력값과 정답이 같으면
			if( value==answer ){
%>
					<p>Congratulations!!! you got it.<br/><br/>
					And after just <%= numGuesses %> tries..</p>
					
					<p>Care to <a href="01_QuizNumber.jsp"> try again </a> </p>
<%			// 입력값과 정답이 같지 않으면
			} else {
%>
				Good guess, but nope. try
			
<%				numGuesses++;
				if( value < answer ) {
%>
						<b> higher </b>
<%				} else if( value > answer ) {
%>

						<b> lower </b>
<%				} 
			}
		}		
%>
		<p>I'm thinking of a number between 1 and 100. </p>
		
		<form method='get'>
				What's your guess?
				<input type='text' name='guess'>	<!-- 숫자를 입력받는 창 -->
				<input type='submit' value="전송">
		</form>
	</body>
</html>
