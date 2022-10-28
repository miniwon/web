<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
  <%@ page import="member.dao2.*" %>  
<%
	// 0. method="post"일 경우 한글 처리
	request.setCharacterEncoding("utf-8");
	// 1. 이전 폼의 입력값 얻어 오기
	String name = request.getParameter("realname");
	String nickname = request.getParameter("nickname");
	String email = request.getParameter("myemail");
	int age = Integer.parseInt(request.getParameter("myage"));
  
  // 2. VO 객체에 저장하기
  MemberVO vo = new MemberVO();
  vo.setName(name);
  vo.setNickname(nickname);
  vo.setEmail(email);
  vo.setAge(age);
  
  // 3. DB에 입력하기
  MemberDAO dao = MemberDAO.getInstance();
  dao.insert(vo);
  
  // 4. 출력은 알아서
%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>멤버 입력 폼 연습</title>
</head>
<body>
당신이 이 메시지를 보았다면 DB에 무사히 데이터가 들어갔기를 기도하십시오
</body>
</html>