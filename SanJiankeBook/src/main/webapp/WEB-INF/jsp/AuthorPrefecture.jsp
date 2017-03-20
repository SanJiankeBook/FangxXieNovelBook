<!-- 女生频道 -->
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ page isELIgnored="false"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>女生频道_笔下文学</title>
<link rel="stylesheet"
	href="<%=request.getContextPath()%>/css/style.css" />
<!-- <script type="text/javascript" src="<%=request.getContextPath()%>/js/xiaoshuo.js"></script> -->
<script type="text/javascript"
	src="<%=request.getContextPath()%>/js/xiaoshuo.js"></script>
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
				<li><a href="../index.jsp">首页</a></li>
				<li><a href="bookcase.jsp">我的书架</a></li>
				<li><a href="toindex_Type/${list[0].tname}">${list[0].tname}</a></li>
				<li><a href="toindex_Type/${list[1].tname}">${list[1].tname}</a></li>
				<li><a href="toindex_Type/${list[2].tname}">${list[2].tname}</a></li>
				<li><a href="toindex_Type/${list[3].tname}">${list[3].tname}</a></li>
				<li><a href="toindex_Type/${list[4].tname}">${list[4].tname}</a></li>
				<li><a href="toindex_Type/${list[5].tname}">${list[5].tname}</a></li>
				<li><a href="authorPrefectrue">作者专区</a></li>
				<li><a href="toindex_type">排行榜单</a></li>
				<li><a href="jsp/quanben.jsp/">全本小说</a></li>
				<li><a rel="nofollow" href="readRecord.jsp">阅读记录</a></li>
			</ul>
		</div>
		<div id="main">
			<div id="hotcontent">
				<div class="ll">

					<div class="item">
						<form action="editor" method="post">
							<h1>尊敬的${author[0].aname },你好!</h1>
							<h1>你的信息</h1>
							<h2 id="pan_name">你的笔名：${author[0].pan_name }</h2>
							<h2 id="agrade">你的称号：${author[0].agrade }</h2>
							<h2 id="acard">你的身份证号：${author[0].acard }</h2>
							<h2 id="atel">你的联系方式：${author[0].atel }</h2>
							<input type="submit" name="editor" value="信息编辑" />
						</form>
					</div>

					<div class="item">
						<h1>你写的小说</h1>
						<c:forEach items="${novel}" var="novel" begin="0" end="5">
							<dd>
								<img src="${novel.npicture}">
							</dd>
							<a style="" href="toindex_id/${novel.nid}">${novel.nname}</a>
						</c:forEach>
					</div>


				</div>
			</div>
		</div>

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
