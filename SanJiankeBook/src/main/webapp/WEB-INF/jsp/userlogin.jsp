<!-- 书架 -->
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
	<%@ page isELIgnored="false" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head><title>
	用户登录
</title>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<link rel="stylesheet" href="css/style.css" />
<script type="text/javascript" src="js/jquery-1.12.4.js"></script>
<!--  <script type="text/javascript" src="../js/xiaoshuo.js"></script> -->
<script type="text/javascript" src="js/xiaoshuo.js"></script>
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
				<li><a href="toindex_zpd">首页</a></li>
					<li><a rel="nofollow" href="mybook">我的书架</a></li>
					<li><a href="toindex_Type/${list1[0].tname}">${list1[0].tname}</a></li>
					<li><a href="toindex_Type/${list1[1].tname}">${list1[1].tname}</a></li>
					<li><a href="toindex_Type/${list1[2].tname}">${list1[2].tname}</a></li>
					<li><a href="toindex_Type/${list1[3].tname}">${list1[3].tname}</a></li>
					<li><a href="toindex_Type/${list1[4].tname}">${list1[4].tname}</a></li>
					<li><a href="toindex_Type/${list1[5].tname}">${list1[5].tname}</a></li>
					<li><a href="authorPrefectrue">作者专区</a></li>
					<li><a href="toindex_type">排行榜单</a></li>
					<li><a href="jsp/quanben.jsp/">全本小说</a></li>
					<li><a rel="nofollow" href="jsp/readRecord.jsp">阅读记录</a></li>
			</ul>
		</div>
       <br />
<form name="frmLogin" id="frmLogin" action="logger" method="post">
<table class="grid" width="580" align="center">
<c:if test="${errmsg!='' }">
		<font style="color:red" ><c:out value="${errmsg }"></c:out></font>
	</c:if>
<caption>用户登录</caption>
<tr>
  <td class="odd" width="25%">用户账号</td>
  <td class="even"><input type="text" class="text" name="uname" id="uname" size="25" maxlength="30" value="" style="width:160px"/></td>
</tr>
<tr>
  <td class="odd" width="25%">密码</td>
  <td class="even"><input type="password" class="text" name="upassword" id="upassword" size="25" maxlength="20" style="width:160px"/></td>
</tr>
<tr>
	<td class="odd" width="25%">验证码</td>
	<td><input type="text" id="validateCode" name="validateCode"/>
			<img id="randImg" border=0 src="imageCode.jsp">
			<a href="javascript:loadImage();" style="margin-top: 20px">换一张</a>
	</td>
</tr>
<tr>
  <td class="odd" width="25%">&nbsp;<input type="hidden" name="action" id="action" value="login" /></td>
  <td class="even"><input type="button" class="button" name="submit" onclick="logger()"  id="submit" value="登录" /></td>
</tr>
</table>
</form>
<script type="text/javascript">
//刷新验证码
function loadImage(){
	var img=document.getElementById("randImg");
	img.src="imageCode.jsp?rb="+Math.random();
	//加了个随机数后，不会再从缓存拿数据了
}
function logger() {
						$.ajax({
										url : "logger",
										type : "POST",
										dataType : "JSON",//客户端返回过来的数据类型
										data : {
											'uname' : $("#uname").val(),
											'upassword' : $("#upassword").val(),
											'validateCode' : $("#validateCode").val()
										},
										success : function(data) {
											if (data.status == -2) {
												//response.sendRedirect("500.jsp");
												alert("验证码错误");
											} else if (data.status == 1) {
												window.location="toindex_zpd";
											} else {
												alert("用户名或密码错误");
											}
										}
									});
						}
</script>
        
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
