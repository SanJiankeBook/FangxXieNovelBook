<!-- 新用户注册 -->
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<title>用户注册</title>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<link rel="stylesheet" href="../css/style.css" />
<script type="text/javascript" src="../js/xiaoshuo.js"></script>
<script type="text/javascript" src="../js/jquery.min.js"></script>

<script type="text/javascript" src="../js/userreg.js"></script>
</head>
<body>
	<div id="wrapper">

		<script>
			login();
		</script>
		<div class="header">
			<div class="header_logo">
				<a href="http://www.bixia.org">笔下文学</a>
			</div>
			<div class="header_search">
				<script>
					search();
				</script>
			</div>
			<div class="userpanel">
				<script>
					banner();
				</script>
			</div>
		</div>
		<div class="clear"></div>
		<div class="nav">
			<ul>
				<li><a href="/">首页</a></li>
				<li><a rel="nofollow" href="/modules/article/bookcase.php">我的书架</a></li>
				<li><a href="/mulu/1-1.html">玄幻奇幻</a></li>
				<li><a href="/mulu/2-1.html">武侠仙侠</a></li>
				<li><a href="/mulu/3-1.html">都市言情</a></li>
				<li><a href="/mulu/4-1.html">历史军事</a></li>
				<li><a href="/mulu/5-1.html">科幻灵异</a></li>
				<li><a href="/mulu/6-1.html">网游竞技</a></li>
				<li><a href="/mulu/7-1.html">女频频道</a></li>
				<li><a href="/top/toptime.html">排行榜单</a></li>
				<li><a href="/quanben/">全本小说</a></li>
				<li><a rel="nofollow" href="/bookcase.php">阅读记录</a></li>
			</ul>
		</div>
		<br />
		<form name="frmregister" id="frmregister" action="/register.php"
			method="post">
			<table class="grid" width="580" align="center">
				<caption>新用户注册</caption>
				<tr>
					<td class="odd" width="25%">用户名<span class="hottext">(必填)</span></td>
					<td class="even"><input type="text" class="text"
						name="username" id="regusername" size="25" maxlength="30"
						style="width: 160px" /> <span id="usermsg">请输入长度不少于5位的字母、数字</span></td>
				</tr>
				<tr>
					<td class="odd" width="25%">密码<span class="hottext">(必填)</span></td>
					<td class="even"><input type="password" class="text"
						name="password" id="regpassword" size="25" maxlength="20"
						style="width: 160px" /> <span id="passmsg">请输入长度不少于6位的密码</span></td>
				</tr>
				<tr>
					<td class="odd" width="25%">重复密码<span class="hottext">(必填)</span></td>
					<td class="even"><input type="password" class="text"
						name="repassword" id="regrepassword" size="25" maxlength="20"
						style="width: 160px" /> <span id="repassmsg">请再次输入密码</span></td>
				</tr>
				<tr>
					<td class="odd" width="25%">Email<span class="hottext">(必填)</span></td>
					<td class="even"><input type="text" class="text" name="email"
						id="regemail" size="25" maxlength="60" style="width: 160px" /> <span
						id="mailmsg">请输入邮箱地址</span></td>
				</tr>

				<tr>
					<td class="odd" width="25%">&nbsp;<input type="hidden"
						name="action" id="action" value="newuser" /></td>
					<td class="even"><input type="submit" class="button"
						name="submit" onclick="return checkUserReg()" id="submit"
						value="提 交" /></td>
				</tr>
			</table>
		</form>


		<div class="footer">
			<div class="footer_link"></div>
			<div class="footer_cont">
				<p>本站所有小说为转载作品，所有章节均由网友上传，转载至本站只是为了宣传本书让更多读者欣赏。</p>
				<p>Copyright © 2016 笔下文学</p>
				<script>
					footer();
				</script>
			</div>
		</div>
	</div>
</body>
</html>
