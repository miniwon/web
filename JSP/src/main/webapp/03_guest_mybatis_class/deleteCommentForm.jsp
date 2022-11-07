<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<% String commentNo = request.getParameter("cId"); %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>게시글 삭제</title>
</head>
<body>
정말 삭제하시겠습니까?
<form name="frm" action="deleteCommentConfirm.jsp">
<input type="submit" id="btnConfirm" value="예"/>
<input type="hidden" name="commentNo" value="<%= commentNo %>"/>
</form>
</body>
</html>