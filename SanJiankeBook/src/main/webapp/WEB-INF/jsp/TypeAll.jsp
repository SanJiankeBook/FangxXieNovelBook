<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ page isELIgnored="false"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>${tname}</title>
<link rel="stylesheet" href="../css/style.css" />
<!--   <script type="text/javascript" src="../js/xiaoshuo.js"></script> -->
<script type="text/javascript" src="../js/xiaoshuo.js"></script>
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
				<li><a rel="nofollow" href="bookcase.jsp">我的书架</a></li>
				<li><a href="../toindex_Type/${list[0].tname}">${list[0].tname}</a></li>
				<li><a href="../toindex_Type/${list[1].tname}">${list[1].tname}</a></li>
				<li><a href="../toindex_Type/${list[2].tname}">${list[2].tname}</a></li>
				<li><a href="../toindex_Type/${list[3].tname}">${list[3].tname}</a></li>
				<li><a href="../toindex_Type/${list[4].tname}">${list[4].tname}</a></li>
				<li><a href="../toindex_Type/${list[5].tname}">${list[5].tname}</a></li>
				<li><a href="authorPrefectrue">作者专区</a></li>
				<li><a href="toindex_type">排行榜单</a></li>
				<li><a href="jsp/quanben.jsp/">全本小说</a></li>
				<li><a rel="nofollow" href="readRecord.jsp">阅读记录</a></li>
			</ul>
		</div>
		<div id="main">
			<div id="hotcontent">
				<div class="ll">

					<c:forEach items="${list1}" var="list1">
						<div class="item">
							<div class="image">
								<a href="${list1.npicture}"> <img src="${list1.npicture}"
									alt="${list1.aname}" width="120" height="150" /></a>

							</div>
							<dl>
								<dt>
									<span> ${list1.aname}</span> <a href="toindex_id/${list1.nid}">${list1.nname}</a>
								</dt>
								<dd>${list1.ndescription}</dd>
							</dl>
							<div class="clear"></div>
						</div>
					</c:forEach>




				</div>
			</div>
			<div id="newscontent">
				<div class="l">
					<h2>玄幻奇幻最近更新列表</h2>
					<ul>

						<li><span class="s1">[玄幻奇幻]</span><span class="s2"><a
								href="/24_24748/" target="_blank">柯南之所谓记者不好当</a></span><span class="s3"><a
								href="/24_24748/2211325.html" target="_blank">第一百五十章
									每个人背后都有...</a></span><span class="s4">蔬菜馒头</span><span class="s5">03-04</span></li>



					</ul>
				</div>


				<div class="r">
					<h2>玄幻奇幻点击榜</h2>
					<ul>

						<li><span class="s1">[玄幻奇幻]</span><span class="s2"><a
								href="/2_2476/">儒道至圣</a></span><span class="s5">永恒之火</span></li>



					</ul>
				</div>

				<div class="clear"></div>
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
