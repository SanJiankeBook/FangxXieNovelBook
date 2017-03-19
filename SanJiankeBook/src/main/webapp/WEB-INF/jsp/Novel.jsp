<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<%@ page isELIgnored="false"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%
	String path = request.getContextPath(); //douban
	//http					localhost				8080               douban
	String basePath = request.getScheme() + "://" + request.getServerName() + ":" + request.getServerPort()
			+ path + "/";
%>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<style id="znBdcsStyle" type="text/css">
.bdcs-container .bdcs-main, .bdcs-container .bdcs-main * {
	box-sizing: content-box;
	margin: 0;
	padding: 0;
	float: none;
	clear: none;
	overflow: hidden;
	white-space: nowrap;
	word-wrap: normal;
	border: 0;
	background: 0 0;
	width: auto;
	height: auto;
	max-width: none;
	min-width: none;
	max-height: none;
	min-height: none;
	border-radius: 0;
	box-shadow: none;
	transition: none;
	text-align: left
}

.bdcs-container .bdcs-clearfix:after {
	content: '';
	display: block;
	clear: both;
	height: 0
}

.bdcs-container .bdcs-clearfix {
	zoom: 1
}

.bdcs-container .bdcs-main {
	overflow: visible
}

.bdcs-container .bdcs-search {
	display: block;
	overflow: visible;
	position: relative;
	border-style: solid
}

.bdcs-container .bdcs-search-form-input-wrap {
	display: inline-block
}

.bdcs-container .bdcs-search-form-input {
	border-width: 1px;
	border-style: solid;
	display: inline-block;
	vertical-align: top;
	text-indent: 5px;
	background-color: #fff;
	float: left
}

.bdcs-container .bdcs-search-form-input:focus {
	border-width: 1px;
	border-style: solid;
	outline: 0
}

.bdcs-container .bdcs-search-form-submit-wrap {
	display: inline-block
}

.bdcs-container .bdcs-search-form-submit {
	display: inline-block;
	cursor: pointer;
	border-width: 1px;
	border-style: solid;
	vertical-align: top;
	text-align: center;
	width: 50px; //
	_overflow: hidden
}

.bdcs-container .bdcs-search-form-submit-magnifier {
	width: 45px;
	padding: 0;
	text-indent: -999em;
	overflow: hidden;
	background:
		url(http://znsv.baidu.com/static/customer-search/component/search/magnifier-icon.png)
		no-repeat center center;
	_background:
		url(http://znsv.baidu.com/static/customer-search/component/search/magnifier-icon_ie6.png)
		no-repeat center center
}

div#default-searchbox .default-channel-meun {
	position: relative;
	width: 75px;
	display: inline-block;
	vertical-align: middle;
	cursor: pointer;
	background: #fff;
	float: left;
	overflow: visible
}

div#default-searchbox .default-channel-current {
	border: 1px solid;
	position: relative;
	width: 100%;
	border-right: 0
}

div#default-searchbox .default-channel-current span {
	margin-left: 8px
}

div#default-searchbox .default-channel-current i {
	overflow: hidden;
	width: 0;
	height: 0;
	border-width: 6px 6px 0;
	border-color: #9E9E9E #fff;
	border-style: solid;
	display: block;
	position: absolute;
	right: 10px;
	top: 11px
}

div.cse-default-channel-container {
	display: block;
	position: absolute;
	z-index: 30061000000
}

div.cse-default-channel-container .default-channel-list {
	display: none;
	width: 99%;
	list-style: none;
	background: #fff;
	border: 1px solid #DDD;
	border-top: 0;
	margin: 0;
	padding: 0
}

div.cse-default-channel-container .default-channel-list li {
	background: 0 0;
	line-height: 24px;
	list-style: none;
	display: block;
	padding-left: 7px;
	cursor: pointer
}

div.cse-default-channel-container .default-channel-list li:hover {
	background: #DDD
}

.bdcs-container .bdcs-search-form-input-wrap {
	
}

.bdcs-container .bdcs-search-form-input-notspan {
	margin-left: 0px;
	font-family: Arial, SimSun, sans-serif;
	color: #000000;
	font-size: 14px;
}

.bdcs-container .bdcs-search-form-input .icon-nofocus {
	left:;
	right:;
	top:;
	height:;
	width:;
}

.bdcs-container .bdcs-search {
	width: 428px;
	height: 36px;
	overflow: visible;
	border-color: #ffffff;
	border-radius: 0px;
	border-width: 0px;
	box-shadow: none;
	background-color: none;
}

.bdcs-container .bdcs-search-form-input {
	border-color: #a6a6a6;
	margin-right: 10px;
	width: 318px;
	height: 34px;
	line-height: 34px;
	font-family: Arial, SimSun, sans-serif;
	color: #000000;
	font-size: 14px;
	border-radius: 0px;
	background-color: #FFFFFF;
}

.bdcs-container .bdcs-search-form-input:focus {
	border-color: #f79646;
}

.bdcs-container .bdcs-search-form-submit-wrap {
	
}

.bdcs-container .bdcs-search-form-submit {
	border-color: #a6a6a6;
	height: 34px;
	width: 96px;
	background-color: #f5f5f5;
	color: #000000;
	font-family: Arial, SimSun, sans-serif;
	font-size: 14px;
	border-radius: 0px;
}

.bdcs-container .bdcs-search-sug-list {
	width: px;
}

.bdcs-container .bdcs-search-sug-list-item {
	height: 28px;
	line-height: 28px;
	font-family: Arial, SimSun, sans-serif;
	font-size: 14px;
}

.bdcs-container .bdcs-search-sug-list-item-value {
	color: #000000;
}

.bdcs-container .bdcs-clearfix:after {
	content: '';
	display: block;
	clear: both;
	height: 0
}

.bdcs-container .bdcs-clearfix {
	zoom: 1
}

.bdcs-container .bdcs-search {
	overflow: visible;
	position: relative
}

.bdcs-container .bdcs-search-sug, .bdcs-container .bdcs-search-sug * {
	box-sizing: content-box;
	margin: 0;
	padding: 0;
	float: none;
	clear: none;
	overflow: hidden;
	white-space: nowrap;
	word-wrap: normal;
	border: 0;
	background: 0 0;
	width: auto;
	height: auto;
	max-width: none;
	min-width: none;
	max-height: none;
	min-height: none;
	border-radius: 0;
	box-shadow: none;
	transition: none;
	text-align: left
}

.bdcs-container .bdcs-search-sug {
	display: none;
	position: absolute;
	z-index: 2147483647
}

.bdcs-container .bdcs-search-sug-list {
	list-style: none;
	border: 1px solid #DDD;
	background-color: #FFF
}

.bdcs-container .bdcs-search-sug-list {
	
}

.bdcs-container .bdcs-search-sug-list-item {
	display: block;
	list-style: none;
	cursor: pointer;
	padding: 0 5px;
	white-space: nowrap;
	text-overflow: ellipsis;
	overflow: hidden
}

.bdcs-container .bdcs-search-sug-list-item-current {
	background-color: #EBEBEB
}

.bdcs-container .bdcs-search-sug-list-item-author-novel, .bdcs-container .bdcs-search-sug-list-item-author-music,
	.bdcs-container .bdcs-search-sug-list-item-type-movie {
	color: #BABABA
}

.bdcs-container .bdcs-search-sug-list-item-author-novel, .bdcs-container .bdcs-search-sug-list-item-author-music
	{
	margin-left: 5px
}

.bdcs-container .bdcs-search-sug-list-item-music {
	overflow: hidden;
	*zoom: 1
}

.bdcs-container .bdcs-search-sug-list-item-value-movie {
	float: left
}

.bdcs-container .bdcs-search-sug-list-item-type-movie {
	float: right
}

.bdcs-container .bdcs-search-sug-skin {
	display: none;
	width: 85px;
	height: 85px;
	position: absolute;
	right: 1px;
	bottom: 1px
}

.bdcs-container .bdcs-search-sug-skin-img {
	width: 85px;
	height: 85px
}

.bdcs-container .bdcs-search-sug-i {
	color: #e64fa3;
	font-weight: 700;
	margin-left: 10px;
	font-family: simsun;
	font-style: normal
}

.bdcs-container .bdcs-search-sug-adv {
	width: 105px;
	position: absolute;
	right: 1px;
	top: 1px;
	display: none
}

.bdcs-container .bdcs-search-sug-adv-img {
	position: absolute;
	top: 0;
	right: 0
}

.bdcs-container {
	overflow: visible;
}

.bdcs-container .bdcs-search-form-submit {
	*height: 36px;
	*margin-top: 1px;
}

.bdcs-container .bdcs-search-form-submit {
	height: 36px;
}

.bdcs-container .bdcs-search-form-submit {
	line-height: 34px;
}

.bdcs-container .bdcs-search-sug-list-item {
	height: 28px;
	line-height: 28px;
	font-family: Arial, SimSun, sans-serif;
	font-size: 14px;
}

.bdcs-container .bdcs-search-sug-list-item-value {
	color: #000000;
}

#bdcs-search-inline {
	height: 38px;
}

#bdcs-rec {
	display: none;
}
</style>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<meta http-equiv="Cache-Control" content="no-siteapp">
<meta http-equiv="Cache-Control" content="no-transform">
<meta http-equiv="mobile-agent"
	content="format=html5; url=http://m.bixia.org/2_2476/">
<meta http-equiv="mobile-agent"
	content="format=xhtml; url=http://m.bixia.org/2_2476/">
<title>儒道至圣最新章节列表_儒道至圣最新章节目录_笔下文学</title>
<meta name="keywords" content="儒道至圣,儒道至圣最新章节">
<meta name="description"
	content="儒道至圣最新章节由网友提供，《儒道至圣》情节跌宕起伏、扣人心弦，是一本情节与文笔俱佳的玄幻奇幻小说，笔下文学免费提供儒道至圣最新清爽干净的文字章节在线阅读。">
<meta property="og:type" content="novel">
<meta property="og:title" content="儒道至圣">
<meta property="og:description"
	content="这是一个读书人掌握天地之力的世界。&lt;br/&gt;&lt;br/&gt;&nbsp;&nbsp;&nbsp;&nbsp;才气在身，诗可杀敌，词能灭军，文章安天下。&lt;br/&gt;&lt;br/&gt;&nbsp;&nbsp;&nbsp;&nbsp;秀才提笔，纸上谈兵；举人杀敌，出口成章；进士一怒，唇枪舌剑。&lt;br/&gt;&lt;br/&gt;&nbsp;&nbsp;&nbsp;&nbsp;圣人驾临，口诛笔伐，可诛人，可判天子无道，以一敌国。&lt;br/&gt;&lt;br/&gt;&nbsp;&nbsp;&nbsp;&nbsp;此时，圣院把持文位，国君掌官位，十国相争，蛮族虎视，群妖作乱。&lt;br/&gt;&lt;br/&gt;&nbsp;&nbsp;&nbsp;&nbsp;...">
<meta property="og:image"
	content="http://www.bixia.org/BookFiles/BookImages/rudaozhisheng.jpg">
<meta property="og:novel:category" content="玄幻奇幻">
<meta property="og:novel:author" content="永恒之火">
<meta property="og:novel:book_name" content="儒道至圣">
<meta property="og:novel:read_url"
	content="http://www.bixia.org/2_2476/">
<meta property="og:url" content="http://www.bixia.org/2_2476/">
<meta property="og:novel:status" content="连载">
<meta property="og:novel:update_time" content="2017/3/5 0:40:57">
<meta property="og:novel:latest_chapter_name" content="第2031章 孤星伴月">
<meta property="og:novel:latest_chapter_url"
	content="http://www.bixia.org/2_2476/3433725.html">
<link rel="stylesheet" type="text/css" href="../css/style.css">
<script type="text/javascript" async=""
	src="http://znsv.baidu.com/customer_search/api/js?sid=3677118700255927857&amp;plate_url=http%3A%2F%2Fwww.bixia.org%2F2_2476%2F&amp;t=413530"></script>
<script type="text/javascript" src="../js/jquery.min.js"></script>
<script type="text/javascript" src="../js/post.js"></script>
<script type="text/javascript" src="../js/wap.js"></script>
<script type="text/javascript" src="../js/xiaoshuo.js"></script>
<script
	src="http://bdimg.share.baidu.com/static/js/logger.js?cdnversion=413530"></script>
<link
	href="http://bdimg.share.baidu.com/static/css/bdsstyle.css?cdnversion=20131219"
	rel="stylesheet" type="text/css">
</head>
<base href="<%=basePath%>">
<body>
	<iframe style="display: none;" frameborder="0"></iframe>
	<div id="bdshare_s" style="display: block;">
		<iframe id="bdsIfr"
			style="position: absolute; display: none; z-index: 9999; top: 84px; left: 1044.08px; height: 314px; width: 212px;"
			frameborder="0"></iframe>
		<div id="bdshare_l" style="display: none; left: 1044.08px; top: 84px;">
			<div id="bdshare_l_c">
				<h6>分享到</h6>
				<ul>
					<li><a href="#" class="bds_mshare mshare">一键分享</a></li>
					<li><a href="#" class="bds_qzone qqkj">QQ空间</a></li>
					<li><a href="#" class="bds_tsina xlwb">新浪微博</a></li>
					<li><a href="#" class="bds_bdysc bdysc">百度云收藏</a></li>
					<li><a href="#" class="bds_renren rrw">人人网</a></li>
					<li><a href="#" class="bds_tqq txwb">腾讯微博</a></li>
					<li><a href="#" class="bds_bdxc bdxc">百度相册</a></li>
					<li><a href="#" class="bds_kaixin001 kxw">开心网</a></li>
					<li><a href="#" class="bds_tqf txpy">腾讯朋友</a></li>
					<li><a href="#" class="bds_tieba bdtb">百度贴吧</a></li>
					<li><a href="#" class="bds_douban db">豆瓣网</a></li>
					<li><a href="#" class="bds_tsohu shwb">搜狐微博</a></li>
					<li><a href="#" class="bds_bdhome bdhome">百度新首页</a></li>
					<li><a href="#" class="bds_sqq sqq">QQ好友</a></li>
					<li><a href="#" class="bds_thx thx">和讯微博</a></li>
					<li><a href="#" class="bds_more">更多...</a></li>
				</ul>
				<p>
					<a href="#" class="goWebsite">百度分享</a>
				</p>
			</div>
		</div>
	</div>
	<div id="wrapper">
		<script>
			login();
		</script>
		<div style="display: none">
			<script
				src="http://s11.cnzz.com/stat.php?id=1261165914&amp;web_id=1261165914"
				language="JavaScript"></script>
			<script src="http://c.cnzz.com/core.php?web_id=1261165914&amp;t=z"
				charset="utf-8" type="text/javascript"></script>
			<a href="http://www.cnzz.com/stat/website.php?web_id=1261165914"
				target="_blank" title="站长统计">站长统计</a>
		</div>

		<div class="header">
			<div class="header_logo">
				<a href="http://www.bixia.org">笔下文学</a>
			</div>
			<div class="header_search">
				<script>
					search();
				</script>
				<script type="text/javascript">
					(function() {
						document
								.write(unescape('%3Cdiv id="bdcs"%3E%3C/div%3E'));
						var bdcs = document.createElement('script');
						bdcs.type = 'text/javascript';
						bdcs.async = true;
						bdcs.src = 'http://znsv.baidu.com/customer_search/api/js?sid=3677118700255927857'
								+ '&amp;plate_url='
								+ encodeURIComponent(window.location.href)
								+ '&amp;t=' + Math.ceil(new Date() / 3600000);
						var s = document.getElementsByTagName('script')[0];
						s.parentNode.insertBefore(bdcs, s);
					})();
				</script>
				<div id="bdcs">
					<div class="bdcs-container">
						<meta http-equiv="x-ua-compatible" content="IE=9">
						<!-- 嵌入式 -->
						<div class="bdcs-main bdcs-clearfix" id="default-searchbox">
							<div class="bdcs-search bdcs-clearfix" id="bdcs-search-inline">
								<form action="http://zhannei.baidu.com/cse/search" method="get"
									target="_blank" class="bdcs-search-form" autocomplete="off"
									id="bdcs-search-form">
									<input name="s" value="3677118700255927857" type="hidden">
									<input name="entry" value="1" type="hidden"> <input
										name="q" class="bdcs-search-form-input"
										id="bdcs-search-form-input" placeholder="请输入书名或作者"
										autocomplete="off" style="height: 36px; line-height: 36px;"
										type="text"> <input class="bdcs-search-form-submit "
										id="bdcs-search-form-submit" value="搜索" type="submit">
								</form>
							</div>
							<div class="bdcs-search-sug" id="bdcs-search-sug"
								style="top: 85px; width: 319px;">
								<ul class="bdcs-search-sug-list" id="bdcs-search-sug-list"></ul>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="userpanel">
				<script>
					banner();
				</script>
				<!-- Baidu Button BEGIN -->
				<script type="text/javascript" id="bdshare_js"
					data="type=tools&amp;uid=0"
					src="http://bdimg.share.baidu.com/static/js/bds_s_v2.js?cdnversion=413530"></script>

				<script type="text/javascript">
					document.getElementById("bdshell_js").src = "http://bdimg.share.baidu.com/static/js/shell_v2.js?cdnversion="
							+ Math.ceil(new Date() / 3600000)
				</script>
				<!-- Baidu Button END -->
			</div>
		</div>
		<div class="clear"></div>
		<div class="nav">
			<ul>
				<li><a href="/">首页</a></li>
				<li><a href="toindex_Type/${list[0].tname}">${list[0].tname}</a></li>
				<li><a href="toindex_Type/${list[1].tname}">${list[1].tname}</a></li>
				<li><a href="toindex_Type/${list[2].tname}">${list[2].tname}</a></li>
				<li><a href="toindex_Type/${list[3].tname}">${list[3].tname}</a></li>
				<li><a href="toindex_Type/${list[4].tname}">${list[4].tname}</a></li>
				<li><a href="toindex_Type/${list[5].tname}">${list[5].tname}</a></li>
				<li><a href="authorPrefectrue">作者专区</a></li>
				<li><a href="toindex_type">排行榜单</a></li>
				<li><a href="jsp/quanben.jsp/">全本小说</a></li>
				<li><a rel="nofollow" href="/bookcase.php">阅读记录</a></li>
			</ul>
		</div>
		<div class="dahengfu">
			<script type="text/javascript">
				list1();
			</script>
		</div>
		<div class="box_con">
			<div class="con_top">
				<a href="/">三剑客网文</a> &gt; ${novel_id[0].nname}最新章节列表
			</div>
			<div id="maininfo">

				<div id="info">
					<h1>${novel_id[0].nname}</h1>
					<p>作&nbsp;&nbsp;者：${author[0].author.aname}</p>
					<p>
						动&nbsp;&nbsp;作：<a rel="nofollow" href="javascript:;"
							onclick="addBookCase('${novel_id[0].nid }');">加入书架</a>、<a
							rel="nofollow" href="#footer">直达底部</a>、<a target="_blank"
							href="/down/txt2476.html" style="color: red;" title="儒道至圣TXT下载">TXT下载</a>
					</p>
					<p>
						最新更新：<a href="3433725.html">${chapter[0].cname }</a>
					</p>
				</div>
				<div id="intro">&nbsp${novel_id[0].ndescription }</div>
			</div>
			<div id="sidebar">
				<!-- 小说封面 -->
				<div id="fmimg">
					<img alt="${novel_id[0].nname}" src="${novel_id[0].npicture}"
						width="120" height="150"><span class="b"></span>
				</div>
			</div>
			<div id="listtj"></div>
		</div>
		<div class="box_con">
			<div id="list">
				<dl>

					<%-- <dt>《${novel_id[0].nname}》相关作品</dt>

					<dd>
						<a style="" href="/2_2476/2176810.html">以后每天晚上八到九点更。</a>
					</dd>

					<dd>
						<a style="" href="/2_2476/2176811.html">本书群号。</a>
					</dd>

					<dd>
						<a style="" href="/2_2476/2176812.html">三江封推感言。</a>
					</dd>

					<dd>
						<a style="" href="/2_2476/2176813.html">推书专页《三修奇仙》</a>
					</dd>

					<dd>
						<a style="" href="/2_2476/2176814.html">推历史好书《夜天子》!</a>
					</dd>

					<dd>
						<a style="" href="/2_2476/2176815.html">推仙侠好书《仙道之主》</a>
					</dd>

					<dd>
						<a style="color: Gray;" href="/2_2476/2176816.html">封推感言</a>
					</dd>

					<dd>
						<a style="" href="/2_2476/2176817.html">推书《三界超市》《纨绔毒医》《超级战兵》</a>
					</dd>

					<dd>
						<a style="" href="/2_2476/2176818.html">推书:《至高战帝》《仙王》《无尽逆袭》</a>
					</dd>

					<dd>
						<a style="" href="/2_2476/2176819.html">《帝霸》《无敌药尊》《雀神》</a>
					</dd>

					<dd>
						<a style="" href="/2_2476/2176820.html">推书《一世之尊》</a>
					</dd>

					<dd>
						<a style="" href="/2_2476/2176821.html">推书《妖族》《大魔龙》《绝世狂少》</a>
					</dd>

					<dd>
						<a style="" href="/2_2476/2176822.html">推书《天下第一》《浊仙》</a>
					</dd>

					<dd>
						<a style="" href="/2_2476/2176823.html">推书《万界独尊》《执掌仙国》</a>
					</dd>

					<dd>
						<a style="" href="/2_2476/2176824.html">推书《我的影子是食神》</a>
					</dd>

					<dd>
						<a style="" href="/2_2476/2176825.html">推书《一书封神》《逆袭万岁》</a>
					</dd> --%>


					<dt>《${novel_id[0].nname}》</dt>

					<c:forEach items="${nchapter}" var="nchapter">
						<dd>
							<a style="" href="${nchapter.caddress}">${nchapter.cname}</a>
						</dd>
					</c:forEach>

				</dl>
			</div>
		</div>
		<div id="footer" name="footer">
			<div class="footer_link"></div>
			<div class="footer_cont">
				<p>《儒道至圣》情节跌宕起伏、扣人心弦，是一本情节与文笔俱佳的玄幻奇幻小说，笔下文学转载收集儒道至圣最新章节。</p>
				<p>本站所有小说为转载作品，所有章节均由网友上传，转载至本站只是为了宣传本书让更多读者欣赏。</p>
				<p>Copyright ? 2016 笔下文学 All Rights Reserved.</p>
			</div>
		</div>
		<script>
			footer();
		</script>
	</div>

</body>
</html>