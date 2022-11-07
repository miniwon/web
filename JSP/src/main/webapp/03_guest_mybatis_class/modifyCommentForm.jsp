<%@page import="mybatis.guest.service.CommentService"%>
<%@page import="mybatis.guest.model.Comment"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%
	// 1. 수정할 레코드의 게시글 번호를 넘겨받기
	int commentNo = Integer.parseInt(request.getParameter("cId"));
	
	// 2. Service에 selectCommentByPrimaryKey(cId) 함수를 호출하여 그 번호의 레코드를 검색
	Comment c = CommentService.getInstance().selectCommentByPrimaryKey(commentNo);
%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>게시글 수정</title>
</head>
<body>
<h2>메시지 수정하기</h2>
<form name="frm" action="modifyComment.jsp" >
<input type="hidden" name="commentNo" value="<%=c.getCommentNo()%>"/>
<input type="hidden" name="regDate" value="<%= c.getRegDate() %>"/>
<table>
	<tr><td>사용자</td><td><input type="text" name="userId" size="15" value="<%=c.getUserId()%>"/></td></tr>
	<tr><td>메세지</td><td><textarea name="commentContent" rows="10" columns="40"><%= c.getCommentContent()%></textarea></td></tr>
	<tr><td><input type="submit" value="수정"/></td></tr>
</table>
</form>
</body>
</html>