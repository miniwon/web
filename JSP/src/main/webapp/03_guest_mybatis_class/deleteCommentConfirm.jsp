<%@ page language="java" contentType="text/html; charset=utf-8"%>
 <%@ page import="mybatis.guest.model.Comment" %>    
 <%@ page import="mybatis.guest.service.CommentService" %>   
  <!--  이전 폼에서 넘겨오는 데이타의 한글 처리  -->
 <% 
 	request.setCharacterEncoding("utf-8");
 %>
 
  <!-- 서비스의 메소드 호출  -->
 <%
int commentNo =  Integer.parseInt(request.getParameter("commentNo"));
 CommentService.getInstance().deleteCommentByPK(commentNo);
 response.sendRedirect("listComment.jsp"); 
 %>
