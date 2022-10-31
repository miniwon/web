<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>결과 출력 화면</title>
</head>
<body>

<!-- 이전 화면에서 사용자 입력값을 얻어 와서
	- request.getParameter("")
	- request.getParameterValues("")

화면 출력 -->
<%
	request.setCharacterEncoding("utf-8");	
	String name = request.getParameter("name");
	String[] animal = request.getParameterValues("animal");
	String chooseAnimal = "";
	for(int i=0; animal!=null && i < animal.length; i++){
		chooseAnimal += animal[i] + " ";
	}
%>
당신의 이름은: <%= name %><br>
당신이 좋아하는 동물은: <%= chooseAnimal %>


</body>
</html>