<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>作家注册专区</title>
</head>
<body style="text-align:center; margin:auto auto">
	<h1>三剑客作家注册专区</h1>
	<form action="registauthor" method="post" style="margin-top:100px">
		作家笔名&nbsp;&nbsp;&nbsp;<input type="text" name="uname"><br/><br/>
		作家真实姓名<input type="text" name="aname"><br/><br/>
		作家年龄&nbsp;&nbsp;<input type="text" name="aage"><br/><br/>
		作家身份证号<input type="text" name="acard"><br/><br/>
		作家联系方式<input type="text" name="atel"><br/><br/>
		账号&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="text" name="u_number"><br/><br/>
		密码&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="password" name="upassword"><br/><br/>
		性别<select id="usex" name="usex" style="margin-left:100px">
			<option value="男">男</option>
			<option value="女">女</option>
		</select><br/>
		<input type="reset" value="重置">
		<input type="submit" value="注册">
		
	</form>

</body>
</html>