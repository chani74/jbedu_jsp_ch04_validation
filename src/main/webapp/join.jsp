<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<script type="text/javascript" src="js/joinCheck.js"></script>
<title>join member</title>
</head>
<body>
	<h2>Join member</h2>
	<hr>
	<form action="joinOk.jsp" name='joinForm' onsubmit="return joinCheck();">
		ID : <input type="text" name="memberId"> <br><br>
		PW : <input type="text" name='memberPw'> <br><br>
		Name : <input type="text" name='memberName'> <br><br>
		Phone : <input type="text" name='memberPhone'> #숫자만 입력하시오<br><br>
		<input type='submit' value='join Member'>
		
		
		
	</form>
</body>
</html>