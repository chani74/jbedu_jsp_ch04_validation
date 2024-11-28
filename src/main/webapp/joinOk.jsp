<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>check member infomation</title>
</head>
<body>
	<%
		request.setCharacterEncoding("utf-8"); // utf-8로 입력 받는 값들을 모두 인코딩
		String mid = request.getParameter("memberId");
		String mpw = request.getParameter("memberPw");
		String mmame = request.getParameter("memberName");
		String mphone = request.getParameter("memberPhone");
	%>
	
	<h2> check Member Infomation</h2>
	<hr>
	ID : <%= mid %>	<br><br>
	PW : <%= mpw %>	<br><br>
	Name : <%= mmame %>	<br><br>
	Phone : <%= mphone %>
	
	
</body>
</html>