<!-- 书架 -->
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head><title>
	用户登录
</title>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<link rel="stylesheet" href="../css/style.css" />
<!--  <script type="text/javascript" src="../js/xiaoshuo.js"></script> -->
<script type="text/javascript" src="../js/xiaoshuo.js"></script>
      <script type="text/javascript">
       function checkfrmLogin()
        {
            if(document.getElementById("frmLogin_username").value=="")
            {
                alert("请输入用户名!");
                document.getElementById("frmLogin_password").focus();
                return false;
            }
            if(document.getElementById("frmLogin_password").value=="")
            {
                alert("请输入用户密码!");
                document.getElementById("frmLogin_password").focus();
                return false;
            }
        }
      </script>
</head>
<body>
    <div id="wrapper">
        
<script>login();</script>
<div class="header">
    <div class="header_logo"><a href="http://www.bixia.org">笔下文学</a></div>
    <div class="header_search"><script>search();</script></div>
    <div class="userpanel"><script>banner();</script></div>
</div>
<div class="clear"></div>
<div class="nav">
			<ul>
				<li><a href="../index.jsp">首页</a></li>
				<li><a rel="nofollow" href="bookcase.jsp">我的书架</a></li>
				<li><a href="1-1.jsp">玄幻奇幻</a></li>
				<li><a href="2-1.jsp">武侠仙侠</a></li>
				<li><a href="3-1.jsp">都市言情</a></li>
				<li><a href="4-1.jsp">历史军事</a></li>
				<li><a href="5-1.jsp">科幻灵异</a></li>
				<li><a href="6-1.jsp">网游竞技</a></li>
				<li><a href="7-1.jsp">女频频道</a></li>
				<li><a href="rank.jsp">排行榜单</a></li>
				<li><a href="quanben.jsp">全本小说</a></li>
				<li><a rel="nofollow" href="readRecord.jsp">阅读记录</a></li>
			</ul>
		</div>
       <br />
<form name="frmLogin" id="frmLogin" action="/Login.php" method="post">
<table class="grid" width="580" align="center">
<caption>用户登录</caption>
<tr>
  <td class="odd" width="25%">用户名</td>
  <td class="even"><input type="text" class="text" name="username" id="frmLogin_username" size="25" maxlength="30" value="" style="width:160px"/></td>
</tr>
<tr>
  <td class="odd" width="25%">密码</td>
  <td class="even"><input type="password" class="text" name="password" id="frmLogin_password" size="25" maxlength="20" style="width:160px"/></td>
</tr>
<tr>
  <td class="odd" width="25%">有效期：</td>
  <td class="even"><select name="usecookie" class="select">
              <option value="0">浏览器进程</option>
              <option value="1440">保存一天</option>
			  <option value="43200">保存一月</option>
			  <option value="525600">保存一年</option>
            </select>
</td>
</tr>
<tr>
  <td class="odd" width="25%">&nbsp;<input type="hidden" name="action" id="action" value="login" /></td>
  <td class="even"><input type="submit" class="button" name="submit" onclick="return checkfrmLogin()"  id="submit" value="提 交" /></td>
</tr>
</table>
</form>

        
<div class="footer">
    <div class="footer_link">
    </div>
    <div class="footer_cont">
        <p>
            本站所有小说为转载作品，所有章节均由网友上传，转载至本站只是为了宣传本书让更多读者欣赏。</p>
        <p>
            Copyright © 2016
            笔下文学</p>
       <script>footer();</script>
    </div>
</div>
    </div>
</body>
</html>
