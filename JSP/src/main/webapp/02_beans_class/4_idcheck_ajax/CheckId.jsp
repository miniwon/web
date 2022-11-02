<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    
<%@ page import="member.beans.MemberDao" %>     
    
 <%
 	// 회원가입한 아이디값 받아오기
 	String userId = request.getParameter("id");
 	MemberDao dao = MemberDao.getInstance();
 	boolean result = dao.isDuplicatedId(userId); // true or false
 	
 	
 		out.print(result);		// true or false 값이 담긴 변수를 out.print() 로 발송 
 		// out.print : 웹 화면에 출력 // 화면이 없을 경우 출력되지 않고 값을 클라로 보내주어 function(data)의 data로 넘어감


 	
 %> 
