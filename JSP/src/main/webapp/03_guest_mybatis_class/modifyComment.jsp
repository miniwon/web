<%@ page language="java" contentType="text/html; charset=utf-8"%>
<%@ page import="mybatis.guest.model.Comment"%>
<%@ page import="mybatis.guest.service.CommentService"%>

<%
	// 0. 넘겨받는 데이타의 한글 처리
	request.setCharacterEncoding("utf-8");
	
%>
<!-- 1. 이전 화면의 입력값을 넘겨받아 Comment 객체의 각 멤버변수로 지정 -->
<jsp:useBean id="modify" class="mybatis.guest.model.Comment">
	<jsp:setProperty name="modify" property="*" />
</jsp:useBean>

<!-- 2. Service에 update() 호출하여 레코드 수정 -->
<%
 CommentService.getInstance().modifyComment(modify);
 response.sendRedirect("listComment.jsp"); 
%>
