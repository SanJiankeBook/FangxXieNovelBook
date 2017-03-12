<!-- 頁面榜單 -->
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ page isELIgnored="false"%>
<%@ page import="com.yc.utils.RedisUtil"%>
<%@ page import="java.util.Set"%>
<%@ page import="java.util.Iterator"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%> 
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Cache-Control" content="no-siteapp" />
<meta http-equiv="Cache-Control" content="no-transform" />
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<title>小说人气月榜_小说排行榜_笔下文学</title>
<link href="<%=request.getContextPath()%>/css/style.css" type="text/css" rel="stylesheet" />
<link href="<%=request.getContextPath()%>/css/imageStyle.css" type="text/css" rel="stylesheet" />
<script type="text/javascript"
	src="http://libs.baidu.com/jquery/1.4.2/jquery.min.js"></script>
<!--   <script type="text/javascript" src="/js/xiaoshuo.js"></script> -->
<script type="text/javascript" src="<%=request.getContextPath()%>/js/xiaoshuo.js"></script>
</head>
<body>

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
	<div id="main">


		<div class="index_toplist mright mbottom">
			<div class="toptab" id="top_all_1">
				<span>玄幻奇幻排行</span> <span class="tabRight"> <span
					onmouseover="setTab('o1g',1,3,'cur','')" class="cur" id="o1g1">总</span>
					<span onmouseover="setTab('o1g',2,3,'cur','')" id="o1g2" class="">月</span>
					<span onmouseover="setTab('o1g',3,3,'cur','')" id="o1g3" class="">周</span>
				</span>
			</div>
			<div id="tabData_1">

				<div class="topbooks" id="con_o1g_1" style="display: block;">
					<ul>

				

						<c:forEach items="${listAll }" var="listAll1">
							<li><span class="hits">${listAll1.ranknum}
							</span>
							<span class="num">${ listAll1.doll}</span>
							<a href="/2_2476/" title="儒道至圣"
							target="_blank">${listAll1.novelname}</a>
							</li>		
						</c:forEach>
						
						
				
					</ul>
				</div>

				<div class="topbooks" id="con_o1g_2" style="display: none;">
					<ul>

						<li><span class="hits">03-04</span><span class="num">1.</span><a
							href="/2_2476/" title="儒道至圣" target="_blank">儒道至圣</a></li>

						<li><span class="hits">05-18</span><span class="num">2.</span><a
							href="/4_4120/" title="至尊战神" target="_blank">至尊战神</a></li>

						<li><span class="hits">03-03</span><span class="num">3.</span><a
							href="/29_29220/" title="太古星辰诀" target="_blank">太古星辰诀</a></li>

						<li><span class="hits">03-01</span><span class="num">4.</span><a
							href="/3_3546/" title="龙血王者" target="_blank">龙血王者</a></li>

						<li><span class="hits">03-03</span><span class="num">5.</span><a
							href="/5_5954/" title="无敌剑域" target="_blank">无敌剑域</a></li>

						<li><span class="hits">03-03</span><span class="num">6.</span><a
							href="/0_599/" title="狂武战帝" target="_blank">狂武战帝</a></li>

						<li><span class="hits">03-04</span><span class="num">7.</span><a
							href="/27_27047/" title="圣墟" target="_blank">圣墟</a></li>

						<li><span class="hits">02-12</span><span class="num">8.</span><a
							href="/24_24902/" title="神级修炼系统" target="_blank">神级修炼系统</a></li>

						<li><span class="hits">02-17</span><span class="num">9.</span><a
							href="/23_23026/" title="星河帝国" target="_blank">星河帝国</a></li>

						<li><span class="hits">05-17</span><span class="num">10.</span><a
							href="/4_4827/" title="至尊箭神" target="_blank">至尊箭神</a></li>

						<li><span class="hits">03-04</span><span class="num">11.</span><a
							href="/2_2775/" title="雪鹰领主" target="_blank">雪鹰领主</a></li>

						<li><span class="hits">03-03</span><span class="num">12.</span><a
							href="/4_4745/" title="武炼巅峰" target="_blank">武炼巅峰</a></li>

						<li><span class="hits">12-04</span><span class="num">13.</span><a
							href="/19_19514/" title="逆天武神" target="_blank">逆天武神</a></li>

						<li><span class="hits">03-03</span><span class="num">14.</span><a
							href="/8_8330/" title="天域苍穹" target="_blank">天域苍穹</a></li>

						<li><span class="hits">03-01</span><span class="num">15.</span><a
							href="/3_3317/" title="天价萌妻" target="_blank">天价萌妻</a></li>

					</ul>
				</div>

				<div class="topbooks" id="con_o1g_3" style="display: none;">
					<ul>

						<li><span class="hits">03-04</span><span class="num">1.</span><a
							href="/2_2476/" title="儒道至圣" target="_blank">儒道至圣</a></li>

						<li><span class="hits">05-18</span><span class="num">2.</span><a
							href="/4_4120/" title="至尊战神" target="_blank">至尊战神</a></li>

						<li><span class="hits">03-03</span><span class="num">3.</span><a
							href="/29_29220/" title="太古星辰诀" target="_blank">太古星辰诀</a></li>

						<li><span class="hits">03-01</span><span class="num">4.</span><a
							href="/3_3546/" title="龙血王者" target="_blank">龙血王者</a></li>

						<li><span class="hits">03-03</span><span class="num">5.</span><a
							href="/5_5954/" title="无敌剑域" target="_blank">无敌剑域</a></li>

						<li><span class="hits">03-03</span><span class="num">6.</span><a
							href="/0_599/" title="狂武战帝" target="_blank">狂武战帝</a></li>

						<li><span class="hits">02-12</span><span class="num">7.</span><a
							href="/24_24902/" title="神级修炼系统" target="_blank">神级修炼系统</a></li>

						<li><span class="hits">02-17</span><span class="num">8.</span><a
							href="/23_23026/" title="星河帝国" target="_blank">星河帝国</a></li>

						<li><span class="hits">03-04</span><span class="num">9.</span><a
							href="/27_27047/" title="圣墟" target="_blank">圣墟</a></li>

						<li><span class="hits">03-04</span><span class="num">10.</span><a
							href="/2_2775/" title="雪鹰领主" target="_blank">雪鹰领主</a></li>

						<li><span class="hits">03-03</span><span class="num">11.</span><a
							href="/4_4745/" title="武炼巅峰" target="_blank">武炼巅峰</a></li>

						<li><span class="hits">12-04</span><span class="num">12.</span><a
							href="/19_19514/" title="逆天武神" target="_blank">逆天武神</a></li>

						<li><span class="hits">03-03</span><span class="num">13.</span><a
							href="/2_2486/" title="大主宰" target="_blank">大主宰</a></li>

						<li><span class="hits">03-03</span><span class="num">14.</span><a
							href="/8_8330/" title="天域苍穹" target="_blank">天域苍穹</a></li>

						<li><span class="hits">03-03</span><span class="num">15.</span><a
							href="/0_650/" title="太古神王" target="_blank">太古神王</a></li>

					</ul>
				</div>

			</div>
			
			
			
			<div class="clearfix"></div>
		</div>

		<div class="index_toplist mright mbottom">
			<div class="toptab" id="top_all_2">
				<span>武侠仙侠排行</span> <span class="tabRight"> <span
					onmouseover="setTab('o2g',1,3,'cur','')" class="cur" id="o2g1">总</span>
					<span onmouseover="setTab('o2g',2,3,'cur','')" id="o2g2" class="">月</span>
					<span onmouseover="setTab('o2g',3,3,'cur','')" id="o2g3" class="">周</span>
				</span>
			</div>
			<div id="tabData_2">

				<div class="topbooks" id="con_o2g_1" style="display: block;">
					<ul>

						<li><span class="hits">12-15</span><span class="num">1.</span><a
							href="/8_8784/" title="洪荒之血道冥河" target="_blank">洪荒之血道冥河</a></li>

						<li><span class="hits">03-03</span><span class="num">2.</span><a
							href="/3_3417/" title="九仙图" target="_blank">九仙图</a></li>

						<li><span class="hits">03-03</span><span class="num">3.</span><a
							href="/22_22842/" title="重生西游之万界妖尊" target="_blank">重生西游之万界妖尊</a></li>

						<li><span class="hits">03-03</span><span class="num">4.</span><a
							href="/0_608/" title="大圣道" target="_blank">大圣道</a></li>

						<li><span class="hits">03-03</span><span class="num">5.</span><a
							href="/18_18943/" title="九阳绝神" target="_blank">九阳绝神</a></li>

						<li><span class="hits">02-11</span><span class="num">6.</span><a
							href="/4_4758/" title="申公豹传承" target="_blank">申公豹传承</a></li>

						<li><span class="hits">03-04</span><span class="num">7.</span><a
							href="/26_26157/" title="九世轮回诀" target="_blank">九世轮回诀</a></li>

						<li><span class="hits">03-03</span><span class="num">8.</span><a
							href="/25_25086/" title="一念永恒" target="_blank">一念永恒</a></li>

						<li><span class="hits">05-17</span><span class="num">9.</span><a
							href="/1_1553/" title="灵鼎" target="_blank">灵鼎</a></li>

						<li><span class="hits">06-21</span><span class="num">10.</span><a
							href="/2_2508/" title="造化之门" target="_blank">造化之门</a></li>

						<li><span class="hits">11-09</span><span class="num">11.</span><a
							href="/2_2572/" title="不朽剑神" target="_blank">不朽剑神</a></li>

						<li><span class="hits">03-04</span><span class="num">12.</span><a
							href="/3_3300/" title="盖世仙尊" target="_blank">盖世仙尊</a></li>

						<li><span class="hits">11-30</span><span class="num">13.</span><a
							href="/6_6444/" title="我欲封天" target="_blank">我欲封天</a></li>

						<li><span class="hits">02-09</span><span class="num">14.</span><a
							href="/3_3357/" title="飞天" target="_blank">飞天</a></li>

						<li><span class="hits">03-04</span><span class="num">15.</span><a
							href="/2_2186/" title="极品修仙高手" target="_blank">极品修仙高手</a></li>

					</ul>
				</div>

				<div class="topbooks" id="con_o2g_2" style="display: none;">
					<ul>

						<li><span class="hits">03-03</span><span class="num">1.</span><a
							href="/3_3417/" title="九仙图" target="_blank">九仙图</a></li>

						<li><span class="hits">03-03</span><span class="num">2.</span><a
							href="/22_22842/" title="重生西游之万界妖尊" target="_blank">重生西游之万界妖尊</a></li>

						<li><span class="hits">12-15</span><span class="num">3.</span><a
							href="/8_8784/" title="洪荒之血道冥河" target="_blank">洪荒之血道冥河</a></li>

						<li><span class="hits">03-03</span><span class="num">4.</span><a
							href="/18_18943/" title="九阳绝神" target="_blank">九阳绝神</a></li>

						<li><span class="hits">03-03</span><span class="num">5.</span><a
							href="/25_25086/" title="一念永恒" target="_blank">一念永恒</a></li>

						<li><span class="hits">06-21</span><span class="num">6.</span><a
							href="/2_2508/" title="造化之门" target="_blank">造化之门</a></li>

						<li><span class="hits">03-04</span><span class="num">7.</span><a
							href="/3_3391/" title="九炼归仙" target="_blank">九炼归仙</a></li>

						<li><span class="hits">03-04</span><span class="num">8.</span><a
							href="/26_26157/" title="九世轮回诀" target="_blank">九世轮回诀</a></li>

						<li><span class="hits">03-03</span><span class="num">9.</span><a
							href="/5_5114/" title="仙界赢家" target="_blank">仙界赢家</a></li>

						<li><span class="hits">03-03</span><span class="num">10.</span><a
							href="/2_2649/" title="偷香高手" target="_blank">偷香高手</a></li>

						<li><span class="hits">02-16</span><span class="num">11.</span><a
							href="/18_18594/" title="洪荒时辰" target="_blank">洪荒时辰</a></li>

						<li><span class="hits">03-03</span><span class="num">12.</span><a
							href="/40_40766/" title="穿越宁采臣" target="_blank">穿越宁采臣</a></li>

						<li><span class="hits">03-03</span><span class="num">13.</span><a
							href="/29_29523/" title="不朽凡人" target="_blank">不朽凡人</a></li>

						<li><span class="hits">11-09</span><span class="num">14.</span><a
							href="/2_2572/" title="不朽剑神" target="_blank">不朽剑神</a></li>

						<li><span class="hits">05-17</span><span class="num">15.</span><a
							href="/1_1553/" title="灵鼎" target="_blank">灵鼎</a></li>

					</ul>
				</div>

				<div class="topbooks" id="con_o2g_3" style="display: none;">
					<ul>

						<li><span class="hits">03-03</span><span class="num">1.</span><a
							href="/3_3417/" title="九仙图" target="_blank">九仙图</a></li>

						<li><span class="hits">03-03</span><span class="num">2.</span><a
							href="/22_22842/" title="重生西游之万界妖尊" target="_blank">重生西游之万界妖尊</a></li>

						<li><span class="hits">12-15</span><span class="num">3.</span><a
							href="/8_8784/" title="洪荒之血道冥河" target="_blank">洪荒之血道冥河</a></li>

						<li><span class="hits">03-03</span><span class="num">4.</span><a
							href="/18_18943/" title="九阳绝神" target="_blank">九阳绝神</a></li>

						<li><span class="hits">03-03</span><span class="num">5.</span><a
							href="/25_25086/" title="一念永恒" target="_blank">一念永恒</a></li>

						<li><span class="hits">03-04</span><span class="num">6.</span><a
							href="/26_26157/" title="九世轮回诀" target="_blank">九世轮回诀</a></li>

						<li><span class="hits">06-21</span><span class="num">7.</span><a
							href="/2_2508/" title="造化之门" target="_blank">造化之门</a></li>

						<li><span class="hits">11-09</span><span class="num">8.</span><a
							href="/2_2572/" title="不朽剑神" target="_blank">不朽剑神</a></li>

						<li><span class="hits">02-16</span><span class="num">9.</span><a
							href="/18_18594/" title="洪荒时辰" target="_blank">洪荒时辰</a></li>

						<li><span class="hits">03-03</span><span class="num">10.</span><a
							href="/6_6397/" title="掠天记" target="_blank">掠天记</a></li>

						<li><span class="hits">03-03</span><span class="num">11.</span><a
							href="/2_2649/" title="偷香高手" target="_blank">偷香高手</a></li>

						<li><span class="hits">05-17</span><span class="num">12.</span><a
							href="/1_1553/" title="灵鼎" target="_blank">灵鼎</a></li>

						<li><span class="hits">03-04</span><span class="num">13.</span><a
							href="/3_3391/" title="九炼归仙" target="_blank">九炼归仙</a></li>

						<li><span class="hits">03-03</span><span class="num">14.</span><a
							href="/40_40766/" title="穿越宁采臣" target="_blank">穿越宁采臣</a></li>

						<li><span class="hits">03-03</span><span class="num">15.</span><a
							href="/29_29523/" title="不朽凡人" target="_blank">不朽凡人</a></li>

					</ul>
				</div>

			</div>
			<div class="clearfix"></div>
		</div>

		<div class="index_toplist mright mbottom">
			<div class="toptab" id="top_all_3">
				<span>都市言情排行</span> <span class="tabRight"> <span
					onmouseover="setTab('o3g',1,3,'cur','')" class="cur" id="o3g1">总</span>
					<span onmouseover="setTab('o3g',2,3,'cur','')" id="o3g2" class="">月</span>
					<span onmouseover="setTab('o3g',3,3,'cur','')" id="o3g3" class="">周</span>
				</span>
			</div>
			<div id="tabData_3">

				<div class="topbooks" id="con_o3g_1" style="display: block;">
					<ul>

						<li><span class="hits">03-03</span><span class="num">1.</span><a
							href="/20_20067/" title="极品透视保镖" target="_blank">极品透视保镖</a></li>

						<li><span class="hits">12-09</span><span class="num">2.</span><a
							href="/16_16150/" title="贴身狂医" target="_blank">贴身狂医</a></li>

						<li><span class="hits">03-03</span><span class="num">3.</span><a
							href="/0_218/" title="超品透视" target="_blank">超品透视</a></li>

						<li><span class="hits">12-31</span><span class="num">4.</span><a
							href="/4_4177/" title="官榜" target="_blank">官榜</a></li>

						<li><span class="hits">03-03</span><span class="num">5.</span><a
							href="/3_3701/" title="极品全能学生" target="_blank">极品全能学生</a></li>

						<li><span class="hits">03-03</span><span class="num">6.</span><a
							href="/8_8033/" title="校花的贴身高手" target="_blank">校花的贴身高手</a></li>

						<li><span class="hits">06-28</span><span class="num">7.</span><a
							href="/5_5220/" title="超级医道高手" target="_blank">超级医道高手</a></li>

						<li><span class="hits">03-04</span><span class="num">8.</span><a
							href="/1_1175/" title="极品桃花运" target="_blank">极品桃花运</a></li>

						<li><span class="hits">03-03</span><span class="num">9.</span><a
							href="/0_897/" title="校园护花高手" target="_blank">校园护花高手</a></li>

						<li><span class="hits">08-01</span><span class="num">10.</span><a
							href="/20_20172/" title="美女的透视神医" target="_blank">美女的透视神医</a></li>

						<li><span class="hits">03-03</span><span class="num">11.</span><a
							href="/3_3354/" title="超品相师" target="_blank">超品相师</a></li>

						<li><span class="hits">03-04</span><span class="num">12.</span><a
							href="/3_3915/" title="我真是大明星" target="_blank">我真是大明星</a></li>

						<li><span class="hits">05-30</span><span class="num">13.</span><a
							href="/9_9463/" title="都市霸主" target="_blank">都市霸主</a></li>

						<li><span class="hits">03-04</span><span class="num">14.</span><a
							href="/3_3566/" title="超时空垃圾站" target="_blank">超时空垃圾站</a></li>

						<li><span class="hits">03-03</span><span class="num">15.</span><a
							href="/5_5788/" title="透视邪医" target="_blank">透视邪医</a></li>

					</ul>
				</div>

				<div class="topbooks" id="con_o3g_2" style="display: none;">
					<ul>

						<li><span class="hits">03-03</span><span class="num">1.</span><a
							href="/20_20067/" title="极品透视保镖" target="_blank">极品透视保镖</a></li>

						<li><span class="hits">03-03</span><span class="num">2.</span><a
							href="/0_897/" title="校园护花高手" target="_blank">校园护花高手</a></li>

						<li><span class="hits">03-03</span><span class="num">3.</span><a
							href="/3_3354/" title="超品相师" target="_blank">超品相师</a></li>

						<li><span class="hits">03-03</span><span class="num">4.</span><a
							href="/3_3701/" title="极品全能学生" target="_blank">极品全能学生</a></li>

						<li><span class="hits">12-31</span><span class="num">5.</span><a
							href="/4_4177/" title="官榜" target="_blank">官榜</a></li>

						<li><span class="hits">12-09</span><span class="num">6.</span><a
							href="/16_16150/" title="贴身狂医" target="_blank">贴身狂医</a></li>

						<li><span class="hits">03-03</span><span class="num">7.</span><a
							href="/25_25674/" title="绝美女神爱上我" target="_blank">绝美女神爱上我</a></li>

						<li><span class="hits">03-04</span><span class="num">8.</span><a
							href="/1_1175/" title="极品桃花运" target="_blank">极品桃花运</a></li>

						<li><span class="hits">03-03</span><span class="num">9.</span><a
							href="/0_218/" title="超品透视" target="_blank">超品透视</a></li>

						<li><span class="hits">05-30</span><span class="num">10.</span><a
							href="/9_9463/" title="都市霸主" target="_blank">都市霸主</a></li>

						<li><span class="hits">03-03</span><span class="num">11.</span><a
							href="/8_8033/" title="校花的贴身高手" target="_blank">校花的贴身高手</a></li>

						<li><span class="hits">03-04</span><span class="num">12.</span><a
							href="/3_3566/" title="超时空垃圾站" target="_blank">超时空垃圾站</a></li>

						<li><span class="hits">09-22</span><span class="num">13.</span><a
							href="/2_2670/" title="至尊兵王" target="_blank">至尊兵王</a></li>

						<li><span class="hits">08-01</span><span class="num">14.</span><a
							href="/20_20172/" title="美女的透视神医" target="_blank">美女的透视神医</a></li>

						<li><span class="hits">03-03</span><span class="num">15.</span><a
							href="/29_29542/" title="重生之都市修仙" target="_blank">重生之都市修仙</a></li>

					</ul>
				</div>

				<div class="topbooks" id="con_o3g_3" style="display: none;">
					<ul>

						<li><span class="hits">03-03</span><span class="num">1.</span><a
							href="/20_20067/" title="极品透视保镖" target="_blank">极品透视保镖</a></li>

						<li><span class="hits">03-03</span><span class="num">2.</span><a
							href="/0_897/" title="校园护花高手" target="_blank">校园护花高手</a></li>

						<li><span class="hits">03-03</span><span class="num">3.</span><a
							href="/3_3701/" title="极品全能学生" target="_blank">极品全能学生</a></li>

						<li><span class="hits">03-03</span><span class="num">4.</span><a
							href="/3_3354/" title="超品相师" target="_blank">超品相师</a></li>

						<li><span class="hits">12-31</span><span class="num">5.</span><a
							href="/4_4177/" title="官榜" target="_blank">官榜</a></li>

						<li><span class="hits">12-09</span><span class="num">6.</span><a
							href="/16_16150/" title="贴身狂医" target="_blank">贴身狂医</a></li>

						<li><span class="hits">03-03</span><span class="num">7.</span><a
							href="/0_218/" title="超品透视" target="_blank">超品透视</a></li>

						<li><span class="hits">03-04</span><span class="num">8.</span><a
							href="/1_1175/" title="极品桃花运" target="_blank">极品桃花运</a></li>

						<li><span class="hits">03-03</span><span class="num">9.</span><a
							href="/25_25674/" title="绝美女神爱上我" target="_blank">绝美女神爱上我</a></li>

						<li><span class="hits">03-04</span><span class="num">10.</span><a
							href="/3_3566/" title="超时空垃圾站" target="_blank">超时空垃圾站</a></li>

						<li><span class="hits">03-03</span><span class="num">11.</span><a
							href="/8_8033/" title="校花的贴身高手" target="_blank">校花的贴身高手</a></li>

						<li><span class="hits">06-28</span><span class="num">12.</span><a
							href="/5_5220/" title="超级医道高手" target="_blank">超级医道高手</a></li>

						<li><span class="hits">05-30</span><span class="num">13.</span><a
							href="/9_9463/" title="都市霸主" target="_blank">都市霸主</a></li>

						<li><span class="hits">08-01</span><span class="num">14.</span><a
							href="/20_20172/" title="美女的透视神医" target="_blank">美女的透视神医</a></li>

						<li><span class="hits">03-04</span><span class="num">15.</span><a
							href="/24_24685/" title="重生完美时代" target="_blank">重生完美时代</a></li>

					</ul>
				</div>

			</div>
			<div class="clearfix"></div>
		</div>

		<div class="index_toplist  mbottom">
			<div class="toptab" id="top_all_4">
				<span>历史军事排行</span> <span class="tabRight"> <span
					onmouseover="setTab('o4g',1,3,'cur','')" class="cur" id="o4g1">总</span>
					<span onmouseover="setTab('o4g',2,3,'cur','')" id="o4g2" class="">月</span>
					<span onmouseover="setTab('o4g',3,3,'cur','')" id="o4g3" class="">周</span>
				</span>
			</div>
			<div id="tabData_4">

				<div class="topbooks" id="con_o4g_1" style="display: block;">
					<ul>

						<li><span class="hits">03-03</span><span class="num">1.</span><a
							href="/23_23027/" title="庶子风流" target="_blank">庶子风流</a></li>

						<li><span class="hits">03-03</span><span class="num">2.</span><a
							href="/2_2716/" title="三国之召唤猛将" target="_blank">三国之召唤猛将</a></li>

						<li><span class="hits">01-01</span><span class="num">3.</span><a
							href="/3_3479/" title="铁血强国" target="_blank">铁血强国</a></li>

						<li><span class="hits">03-03</span><span class="num">4.</span><a
							href="/2_2273/" title="我要做皇帝" target="_blank">我要做皇帝</a></li>

						<li><span class="hits">03-04</span><span class="num">5.</span><a
							href="/24_24848/" title="一品唐侯" target="_blank">一品唐侯</a></li>

						<li><span class="hits">01-04</span><span class="num">6.</span><a
							href="/5_5856/" title="国士" target="_blank">国士</a></li>

						<li><span class="hits">12-31</span><span class="num">7.</span><a
							href="/4_4862/" title="最强兵王" target="_blank">最强兵王</a></li>

						<li><span class="hits">03-04</span><span class="num">8.</span><a
							href="/22_22841/" title="逆明1644" target="_blank">逆明1644</a></li>

						<li><span class="hits">01-24</span><span class="num">9.</span><a
							href="/17_17595/" title="抗日之超级壮丁" target="_blank">抗日之超级壮丁</a></li>

						<li><span class="hits">03-03</span><span class="num">10.</span><a
							href="/5_5444/" title="抗日之将胆传奇" target="_blank">抗日之将胆传奇</a></li>

						<li><span class="hits">09-14</span><span class="num">11.</span><a
							href="/11_11760/" title="崇祯：重征天下" target="_blank">崇祯：重征天下</a></li>

						<li><span class="hits">03-04</span><span class="num">12.</span><a
							href="/23_23321/" title="极品帝王" target="_blank">极品帝王</a></li>

						<li><span class="hits">03-03</span><span class="num">13.</span><a
							href="/6_6326/" title="大魏宫廷" target="_blank">大魏宫廷</a></li>

						<li><span class="hits">03-03</span><span class="num">14.</span><a
							href="/2_2746/" title="明士" target="_blank">明士</a></li>

						<li><span class="hits">04-24</span><span class="num">15.</span><a
							href="/21_21681/" title="回到古代玩机械" target="_blank">回到古代玩机械</a></li>

					</ul>
				</div>

				<div class="topbooks" id="con_o4g_2" style="display: none;">
					<ul>

						<li><span class="hits">03-03</span><span class="num">1.</span><a
							href="/23_23027/" title="庶子风流" target="_blank">庶子风流</a></li>

						<li><span class="hits">01-24</span><span class="num">2.</span><a
							href="/17_17595/" title="抗日之超级壮丁" target="_blank">抗日之超级壮丁</a></li>

						<li><span class="hits">03-03</span><span class="num">3.</span><a
							href="/2_2716/" title="三国之召唤猛将" target="_blank">三国之召唤猛将</a></li>

						<li><span class="hits">03-04</span><span class="num">4.</span><a
							href="/24_24848/" title="一品唐侯" target="_blank">一品唐侯</a></li>

						<li><span class="hits">03-03</span><span class="num">5.</span><a
							href="/24_24756/" title="寒门状元" target="_blank">寒门状元</a></li>

						<li><span class="hits">12-31</span><span class="num">6.</span><a
							href="/4_4862/" title="最强兵王" target="_blank">最强兵王</a></li>

						<li><span class="hits">03-04</span><span class="num">7.</span><a
							href="/22_22841/" title="逆明1644" target="_blank">逆明1644</a></li>

						<li><span class="hits">03-03</span><span class="num">8.</span><a
							href="/2_2273/" title="我要做皇帝" target="_blank">我要做皇帝</a></li>

						<li><span class="hits">05-20</span><span class="num">9.</span><a
							href="/4_4630/" title="极品将军" target="_blank">极品将军</a></li>

						<li><span class="hits">03-01</span><span class="num">10.</span><a
							href="/4_4891/" title="江山战图" target="_blank">江山战图</a></li>

						<li><span class="hits">03-04</span><span class="num">11.</span><a
							href="/5_5132/" title="穿越1630之崛起南美" target="_blank">穿越1630之崛起南美</a></li>

						<li><span class="hits">03-04</span><span class="num">12.</span><a
							href="/40_40697/" title="超级响马系统" target="_blank">超级响马系统</a></li>

						<li><span class="hits">03-03</span><span class="num">13.</span><a
							href="/6_6326/" title="大魏宫廷" target="_blank">大魏宫廷</a></li>

						<li><span class="hits">03-03</span><span class="num">14.</span><a
							href="/32_32833/" title="三国之大秦复辟" target="_blank">三国之大秦复辟</a></li>

						<li><span class="hits">03-04</span><span class="num">15.</span><a
							href="/23_23321/" title="极品帝王" target="_blank">极品帝王</a></li>

					</ul>
				</div>

				<div class="topbooks" id="con_o4g_3" style="display: none;">
					<ul>

						<li><span class="hits">03-03</span><span class="num">1.</span><a
							href="/23_23027/" title="庶子风流" target="_blank">庶子风流</a></li>

						<li><span class="hits">03-04</span><span class="num">2.</span><a
							href="/24_24848/" title="一品唐侯" target="_blank">一品唐侯</a></li>

						<li><span class="hits">01-24</span><span class="num">3.</span><a
							href="/17_17595/" title="抗日之超级壮丁" target="_blank">抗日之超级壮丁</a></li>

						<li><span class="hits">03-03</span><span class="num">4.</span><a
							href="/2_2716/" title="三国之召唤猛将" target="_blank">三国之召唤猛将</a></li>

						<li><span class="hits">03-04</span><span class="num">5.</span><a
							href="/23_23321/" title="极品帝王" target="_blank">极品帝王</a></li>

						<li><span class="hits">03-04</span><span class="num">6.</span><a
							href="/22_22835/" title="最强特种兵之龙王" target="_blank">最强特种兵之龙王</a></li>

						<li><span class="hits">12-31</span><span class="num">7.</span><a
							href="/4_4862/" title="最强兵王" target="_blank">最强兵王</a></li>

						<li><span class="hits">09-14</span><span class="num">8.</span><a
							href="/11_11760/" title="崇祯：重征天下" target="_blank">崇祯：重征天下</a></li>

						<li><span class="hits">03-03</span><span class="num">9.</span><a
							href="/2_2273/" title="我要做皇帝" target="_blank">我要做皇帝</a></li>

						<li><span class="hits">03-04</span><span class="num">10.</span><a
							href="/22_22841/" title="逆明1644" target="_blank">逆明1644</a></li>

						<li><span class="hits">03-03</span><span class="num">11.</span><a
							href="/24_24756/" title="寒门状元" target="_blank">寒门状元</a></li>

						<li><span class="hits">03-03</span><span class="num">12.</span><a
							href="/6_6326/" title="大魏宫廷" target="_blank">大魏宫廷</a></li>

						<li><span class="hits">01-04</span><span class="num">13.</span><a
							href="/5_5856/" title="国士" target="_blank">国士</a></li>

						<li><span class="hits">04-24</span><span class="num">14.</span><a
							href="/21_21681/" title="回到古代玩机械" target="_blank">回到古代玩机械</a></li>

						<li><span class="hits">03-03</span><span class="num">15.</span><a
							href="/32_32833/" title="三国之大秦复辟" target="_blank">三国之大秦复辟</a></li>

					</ul>
				</div>

			</div>
			<div class="clearfix"></div>
		</div>

		<div class="index_toplist mright mbottom">
			<div class="toptab" id="top_all_5">
				<span>科幻灵异排行</span> <span class="tabRight"> <span
					onmouseover="setTab('o5g',1,3,'cur','')" class="cur" id="o5g1">总</span>
					<span onmouseover="setTab('o5g',2,3,'cur','')" id="o5g2" class="">月</span>
					<span onmouseover="setTab('o5g',3,3,'cur','')" id="o5g3" class="">周</span>
				</span>
			</div>
			<div id="tabData_5">

				<div class="topbooks" id="con_o5g_1" style="display: block;">
					<ul>

						<li><span class="hits">03-01</span><span class="num">1.</span><a
							href="/3_3064/" title="无限进化" target="_blank">无限进化</a></li>

						<li><span class="hits">12-20</span><span class="num">2.</span><a
							href="/3_3144/" title="网游之三国无双" target="_blank">网游之三国无双</a></li>

						<li><span class="hits">03-03</span><span class="num">3.</span><a
							href="/24_24153/" title="穿越电影之无限崛起" target="_blank">穿越电影之无限崛起</a></li>

						<li><span class="hits">03-04</span><span class="num">4.</span><a
							href="/7_7482/" title="末世大回炉" target="_blank">末世大回炉</a></li>

						<li><span class="hits">03-03</span><span class="num">5.</span><a
							href="/5_5175/" title="修真四万年" target="_blank">修真四万年</a></li>

						<li><span class="hits">10-01</span><span class="num">6.</span><a
							href="/4_4830/" title="全方位幻想" target="_blank">全方位幻想</a></li>

						<li><span class="hits">03-03</span><span class="num">7.</span><a
							href="/7_7025/" title="网游之逆天戒指" target="_blank">网游之逆天戒指</a></li>

						<li><span class="hits">06-30</span><span class="num">8.</span><a
							href="/4_4155/" title="龙骸战神" target="_blank">龙骸战神</a></li>

						<li><span class="hits">01-15</span><span class="num">9.</span><a
							href="/3_3023/" title="电影世界冒险王" target="_blank">电影世界冒险王</a></li>

						<li><span class="hits">03-03</span><span class="num">10.</span><a
							href="/5_5216/" title="无限潜能" target="_blank">无限潜能</a></li>

						<li><span class="hits">03-04</span><span class="num">11.</span><a
							href="/1_1135/" title="英雄联盟之绝世无双" target="_blank">英雄联盟之绝世无双</a></li>

						<li><span class="hits">03-03</span><span class="num">12.</span><a
							href="/5_5930/" title="我在末世有套房" target="_blank">我在末世有套房</a></li>

						<li><span class="hits">03-03</span><span class="num">13.</span><a
							href="/6_6385/" title="武侠世界大穿越" target="_blank">武侠世界大穿越</a></li>

						<li><span class="hits">02-22</span><span class="num">14.</span><a
							href="/26_26112/" title="电影世界大盗" target="_blank">电影世界大盗</a></li>

						<li><span class="hits">05-29</span><span class="num">15.</span><a
							href="/12_12704/" title="大尸潮" target="_blank">大尸潮</a></li>

					</ul>
				</div>

				<div class="topbooks" id="con_o5g_2" style="display: none;">
					<ul>

						<li><span class="hits">03-01</span><span class="num">1.</span><a
							href="/3_3064/" title="无限进化" target="_blank">无限进化</a></li>

						<li><span class="hits">12-20</span><span class="num">2.</span><a
							href="/3_3144/" title="网游之三国无双" target="_blank">网游之三国无双</a></li>

						<li><span class="hits">03-03</span><span class="num">3.</span><a
							href="/24_24153/" title="穿越电影之无限崛起" target="_blank">穿越电影之无限崛起</a></li>

						<li><span class="hits">03-04</span><span class="num">4.</span><a
							href="/22_22975/" title="僵尸本源" target="_blank">僵尸本源</a></li>

						<li><span class="hits">12-29</span><span class="num">5.</span><a
							href="/19_19502/" title="老子是癞蛤蟆" target="_blank">老子是癞蛤蟆</a></li>

						<li><span class="hits">03-03</span><span class="num">6.</span><a
							href="/7_7025/" title="网游之逆天戒指" target="_blank">网游之逆天戒指</a></li>

						<li><span class="hits">02-09</span><span class="num">7.</span><a
							href="/18_18141/" title="英雄联盟之我是对面爹" target="_blank">英雄联盟之我是对面爹</a></li>

						<li><span class="hits">03-04</span><span class="num">8.</span><a
							href="/7_7482/" title="末世大回炉" target="_blank">末世大回炉</a></li>

						<li><span class="hits">12-30</span><span class="num">9.</span><a
							href="/26_26845/" title="霉运阴阳眼" target="_blank">霉运阴阳眼</a></li>

						<li><span class="hits">12-29</span><span class="num">10.</span><a
							href="/10_10674/" title="网游之无双三国" target="_blank">网游之无双三国</a></li>

						<li><span class="hits">02-26</span><span class="num">11.</span><a
							href="/5_5085/" title="战耀星空" target="_blank">战耀星空</a></li>

						<li><span class="hits">12-14</span><span class="num">12.</span><a
							href="/23_23320/" title="缉捕娇妻：刑警先生，我自首" target="_blank">缉捕娇妻：刑警先生，我自首</a></li>

						<li><span class="hits">03-04</span><span class="num">13.</span><a
							href="/30_30837/" title="赶尸世家" target="_blank">赶尸世家</a></li>

						<li><span class="hits">03-04</span><span class="num">14.</span><a
							href="/40_40645/" title="穿越火线之一枪飙血" target="_blank">穿越火线之一枪飙血</a></li>

						<li><span class="hits">06-06</span><span class="num">15.</span><a
							href="/1_1067/" title="绝望教室" target="_blank">绝望教室</a></li>

					</ul>
				</div>

				<div class="topbooks" id="con_o5g_3" style="display: none;">
					<ul>

						<li><span class="hits">03-01</span><span class="num">1.</span><a
							href="/3_3064/" title="无限进化" target="_blank">无限进化</a></li>

						<li><span class="hits">12-20</span><span class="num">2.</span><a
							href="/3_3144/" title="网游之三国无双" target="_blank">网游之三国无双</a></li>

						<li><span class="hits">03-03</span><span class="num">3.</span><a
							href="/24_24153/" title="穿越电影之无限崛起" target="_blank">穿越电影之无限崛起</a></li>

						<li><span class="hits">03-04</span><span class="num">4.</span><a
							href="/7_7482/" title="末世大回炉" target="_blank">末世大回炉</a></li>

						<li><span class="hits">02-09</span><span class="num">5.</span><a
							href="/18_18141/" title="英雄联盟之我是对面爹" target="_blank">英雄联盟之我是对面爹</a></li>

						<li><span class="hits">03-03</span><span class="num">6.</span><a
							href="/7_7025/" title="网游之逆天戒指" target="_blank">网游之逆天戒指</a></li>

						<li><span class="hits">02-22</span><span class="num">7.</span><a
							href="/26_26112/" title="电影世界大盗" target="_blank">电影世界大盗</a></li>

						<li><span class="hits">05-09</span><span class="num">8.</span><a
							href="/17_17052/" title="无尽沉沦" target="_blank">无尽沉沦</a></li>

						<li><span class="hits">03-04</span><span class="num">9.</span><a
							href="/40_40590/" title="英雄联盟之开挂直播系统" target="_blank">英雄联盟之开挂直播系统</a></li>

						<li><span class="hits">03-03</span><span class="num">10.</span><a
							href="/29_29901/" title="直死无限" target="_blank">直死无限</a></li>

						<li><span class="hits">11-30</span><span class="num">11.</span><a
							href="/4_4546/" title="人族训练场" target="_blank">人族训练场</a></li>

						<li><span class="hits">01-02</span><span class="num">12.</span><a
							href="/25_25146/" title="无限体验人生" target="_blank">无限体验人生</a></li>

						<li><span class="hits">03-03</span><span class="num">13.</span><a
							href="/5_5175/" title="修真四万年" target="_blank">修真四万年</a></li>

						<li><span class="hits">03-03</span><span class="num">14.</span><a
							href="/4_4565/" title="最后一个摸金校尉" target="_blank">最后一个摸金校尉</a></li>

						<li><span class="hits">03-03</span><span class="num">15.</span><a
							href="/40_40825/" title="废土崛起" target="_blank">废土崛起</a></li>

					</ul>
				</div>

			</div>
			<div class="clearfix"></div>
		</div>

		<div class="index_toplist mright mbottom">
			<div class="toptab" id="top_all_6">
				<span>网游竞技排行</span> <span class="tabRight"> <span
					onmouseover="setTab('o6g',1,3,'cur','')" class="cur" id="o6g1">总</span>
					<span onmouseover="setTab('o6g',2,3,'cur','')" id="o6g2" class="">月</span>
					<span onmouseover="setTab('o6g',3,3,'cur','')" id="o6g3" class="">周</span>
				</span>
			</div>
			<div id="tabData_6">

				<div class="topbooks" id="con_o6g_1" style="display: block;">
					<ul>

						<li><span class="hits">03-03</span><span class="num">1.</span><a
							href="/3_3104/" title="重生之最强剑神" target="_blank">重生之最强剑神</a></li>

						<li><span class="hits">01-19</span><span class="num">2.</span><a
							href="/2_2847/" title="超级包裹" target="_blank">超级包裹</a></li>

						<li><span class="hits">12-10</span><span class="num">3.</span><a
							href="/2_2026/" title="网游之大盗贼" target="_blank">网游之大盗贼</a></li>

						<li><span class="hits">04-18</span><span class="num">4.</span><a
							href="/21_21346/" title="网游之混沌强化" target="_blank">网游之混沌强化</a></li>

						<li><span class="hits">06-23</span><span class="num">5.</span><a
							href="/2_2381/" title="带着历史名将闯三国" target="_blank">带着历史名将闯三国</a></li>

						<li><span class="hits">05-28</span><span class="num">6.</span><a
							href="/10_10619/" title="暗夜游侠" target="_blank">暗夜游侠</a></li>

						<li><span class="hits">03-04</span><span class="num">7.</span><a
							href="/0_945/" title="天才后卫" target="_blank">天才后卫</a></li>

						<li><span class="hits">03-04</span><span class="num">8.</span><a
							href="/2_2241/" title="网游之三国超级领主" target="_blank">网游之三国超级领主</a></li>

						<li><span class="hits">03-03</span><span class="num">9.</span><a
							href="/29_29890/" title="大盗贼" target="_blank">大盗贼</a></li>

						<li><span class="hits">03-03</span><span class="num">10.</span><a
							href="/7_7738/" title="网游之荒古时代" target="_blank">网游之荒古时代</a></li>

						<li><span class="hits">03-03</span><span class="num">11.</span><a
							href="/24_24582/" title="网游之神级机械猎人" target="_blank">网游之神级机械猎人</a></li>

						<li><span class="hits">03-03</span><span class="num">12.</span><a
							href="/6_6383/" title="网游之倒行逆施" target="_blank">网游之倒行逆施</a></li>

						<li><span class="hits">03-03</span><span class="num">13.</span><a
							href="/7_7043/" title="无限之配角的逆袭" target="_blank">无限之配角的逆袭</a></li>

						<li><span class="hits">03-03</span><span class="num">14.</span><a
							href="/2_2773/" title="神级英雄" target="_blank">神级英雄</a></li>

						<li><span class="hits">01-15</span><span class="num">15.</span><a
							href="/0_21/" title="位面穿越之帝王之路" target="_blank">位面穿越之帝王之路</a></li>

					</ul>
				</div>

				<div class="topbooks" id="con_o6g_2" style="display: none;">
					<ul>

						<li><span class="hits">09-07</span><span class="num">1.</span><a
							href="/5_5107/" title="超级指环王" target="_blank">超级指环王</a></li>

						<li><span class="hits">01-19</span><span class="num">2.</span><a
							href="/2_2847/" title="超级包裹" target="_blank">超级包裹</a></li>

						<li><span class="hits">08-26</span><span class="num">3.</span><a
							href="/4_4097/" title="百变妖锋" target="_blank">百变妖锋</a></li>

						<li><span class="hits">02-24</span><span class="num">4.</span><a
							href="/32_32251/" title="足坛鬼脚" target="_blank">足坛鬼脚</a></li>

						<li><span class="hits">01-14</span><span class="num">5.</span><a
							href="/38_38161/" title="死灵术士闯异界" target="_blank">死灵术士闯异界</a></li>

						<li><span class="hits">10-28</span><span class="num">6.</span><a
							href="/5_5269/" title="墓园崛起" target="_blank">墓园崛起</a></li>

						<li><span class="hits">02-01</span><span class="num">7.</span><a
							href="/43_43160/" title="网游之攻防无敌" target="_blank">网游之攻防无敌</a></li>

						<li><span class="hits">02-10</span><span class="num">8.</span><a
							href="/23_23103/" title="重生之火影世界" target="_blank">重生之火影世界</a></li>

						<li><span class="hits">03-04</span><span class="num">9.</span><a
							href="/33_33052/" title="网游校园" target="_blank">网游校园</a></li>

						<li><span class="hits">03-04</span><span class="num">10.</span><a
							href="/2_2471/" title="迷失在艾泽拉斯" target="_blank">迷失在艾泽拉斯</a></li>

						<li><span class="hits">04-18</span><span class="num">11.</span><a
							href="/21_21346/" title="网游之混沌强化" target="_blank">网游之混沌强化</a></li>

						<li><span class="hits">11-26</span><span class="num">12.</span><a
							href="/26_26150/" title="英雄联盟之全民解说" target="_blank">英雄联盟之全民解说</a></li>

						<li><span class="hits">03-03</span><span class="num">13.</span><a
							href="/29_29890/" title="大盗贼" target="_blank">大盗贼</a></li>

						<li><span class="hits">03-03</span><span class="num">14.</span><a
							href="/7_7785/" title="战姬随我闯异世" target="_blank">战姬随我闯异世</a></li>

						<li><span class="hits">03-03</span><span class="num">15.</span><a
							href="/5_5904/" title="异界那些事儿" target="_blank">异界那些事儿</a></li>

					</ul>
				</div>

				<div class="topbooks" id="con_o6g_3" style="display: none;">
					<ul>

						<li><span class="hits">01-19</span><span class="num">1.</span><a
							href="/2_2847/" title="超级包裹" target="_blank">超级包裹</a></li>

						<li><span class="hits">03-04</span><span class="num">2.</span><a
							href="/2_2241/" title="网游之三国超级领主" target="_blank">网游之三国超级领主</a></li>

						<li><span class="hits">03-03</span><span class="num">3.</span><a
							href="/29_29890/" title="大盗贼" target="_blank">大盗贼</a></li>

						<li><span class="hits">04-18</span><span class="num">4.</span><a
							href="/21_21346/" title="网游之混沌强化" target="_blank">网游之混沌强化</a></li>

						<li><span class="hits">02-10</span><span class="num">5.</span><a
							href="/23_23103/" title="重生之火影世界" target="_blank">重生之火影世界</a></li>

						<li><span class="hits">06-23</span><span class="num">6.</span><a
							href="/2_2381/" title="带着历史名将闯三国" target="_blank">带着历史名将闯三国</a></li>

						<li><span class="hits">03-03</span><span class="num">7.</span><a
							href="/3_3104/" title="重生之最强剑神" target="_blank">重生之最强剑神</a></li>

						<li><span class="hits">03-04</span><span class="num">8.</span><a
							href="/22_22878/" title="斗鱼之顶级主播" target="_blank">斗鱼之顶级主播</a></li>

						<li><span class="hits">12-10</span><span class="num">9.</span><a
							href="/2_2026/" title="网游之大盗贼" target="_blank">网游之大盗贼</a></li>

						<li><span class="hits">01-31</span><span class="num">10.</span><a
							href="/25_25240/" title="英雄联盟之星海争霸" target="_blank">英雄联盟之星海争霸</a></li>

						<li><span class="hits">03-03</span><span class="num">11.</span><a
							href="/9_9801/" title="惊悚乐园" target="_blank">惊悚乐园</a></li>

						<li><span class="hits">02-22</span><span class="num">12.</span><a
							href="/25_25389/" title="恶魔囚笼" target="_blank">恶魔囚笼</a></li>

						<li><span class="hits">03-03</span><span class="num">13.</span><a
							href="/6_6383/" title="网游之倒行逆施" target="_blank">网游之倒行逆施</a></li>

						<li><span class="hits">10-28</span><span class="num">14.</span><a
							href="/5_5269/" title="墓园崛起" target="_blank">墓园崛起</a></li>

						<li><span class="hits">03-03</span><span class="num">15.</span><a
							href="/40_40684/" title="超级卡牌系统" target="_blank">超级卡牌系统</a></li>

					</ul>
				</div>

			</div>
			<div class="clearfix"></div>
		</div>

		<div class="index_toplist mright mbottom">
			<div class="toptab" id="top_all_7">
				<span>女生频道排行</span> <span class="tabRight"> <span
					onmouseover="setTab('o7g',1,3,'cur','')" class="cur" id="o7g1">总</span>
					<span onmouseover="setTab('o7g',2,3,'cur','')" id="o7g2" class="">月</span>
					<span onmouseover="setTab('o7g',3,3,'cur','')" id="o7g3" class="">周</span>
				</span>
			</div>
			<div id="tabData_7">

				<div class="topbooks" id="con_o7g_1" style="display: block;">
					<ul>

						<li><span class="hits">03-04</span><span class="num">1.</span><a
							href="/3_3454/" title="完美恋人，首席已过期" target="_blank">完美恋人，首席已过期</a></li>

						<li><span class="hits">02-02</span><span class="num">2.</span><a
							href="/9_9138/" title="女配逆袭之末世生存系统" target="_blank">女配逆袭之末世生存系统</a></li>

						<li><span class="hits">01-26</span><span class="num">3.</span><a
							href="/9_9030/" title="Hello，继承者" target="_blank">Hello，继承者</a></li>

						<li><span class="hits">07-22</span><span class="num">4.</span><a
							href="/5_5368/" title="霸道枭少狂宠妻" target="_blank">霸道枭少狂宠妻</a></li>

						<li><span class="hits">03-03</span><span class="num">5.</span><a
							href="/8_8728/" title="都市奇门医圣" target="_blank">都市奇门医圣</a></li>

						<li><span class="hits">05-17</span><span class="num">6.</span><a
							href="/5_5283/" title="一夜悍妃：王妃爆笑驯夫记" target="_blank">一夜悍妃：王妃爆笑驯夫记</a></li>

						<li><span class="hits">03-03</span><span class="num">7.</span><a
							href="/3_3532/" title="拒嫁豪门：少夫人99次出逃" target="_blank">拒嫁豪门：少夫人99次出逃</a></li>

						<li><span class="hits">11-08</span><span class="num">8.</span><a
							href="/22_22863/" title="长嫡" target="_blank">长嫡</a></li>

						<li><span class="hits">06-20</span><span class="num">9.</span><a
							href="/10_10476/" title="独家宠婚：高冷老公呆萌妻" target="_blank">独家宠婚：高冷老公呆萌妻</a></li>

						<li><span class="hits">11-16</span><span class="num">10.</span><a
							href="/1_1930/" title="绝世神医：腹黑大小姐" target="_blank">绝世神医：腹黑大小姐</a></li>

						<li><span class="hits">03-03</span><span class="num">11.</span><a
							href="/4_4381/" title="邪王追妻：废材逆天小姐" target="_blank">邪王追妻：废材逆天小姐</a></li>

						<li><span class="hits">01-01</span><span class="num">12.</span><a
							href="/30_30276/" title="盛世宠婚：帝少的小辣妻" target="_blank">盛世宠婚：帝少的小辣妻</a></li>

						<li><span class="hits">01-22</span><span class="num">13.</span><a
							href="/10_10926/" title="盛世谋臣" target="_blank">盛世谋臣</a></li>

						<li><span class="hits">01-01</span><span class="num">14.</span><a
							href="/30_30111/" title="首席长官，求别撩！" target="_blank">首席长官，求别撩！</a></li>

						<li><span class="hits">01-14</span><span class="num">15.</span><a
							href="/1_1653/" title="女总裁的贴身兵王" target="_blank">女总裁的贴身兵王</a></li>

					</ul>
				</div>

				<div class="topbooks" id="con_o7g_2" style="display: none;">
					<ul>

						<li><span class="hits">01-26</span><span class="num">1.</span><a
							href="/9_9030/" title="Hello，继承者" target="_blank">Hello，继承者</a></li>

						<li><span class="hits">02-02</span><span class="num">2.</span><a
							href="/9_9138/" title="女配逆袭之末世生存系统" target="_blank">女配逆袭之末世生存系统</a></li>

						<li><span class="hits">03-04</span><span class="num">3.</span><a
							href="/4_4100/" title="神医弃女：鬼帝的驭兽狂妃" target="_blank">神医弃女：鬼帝的驭兽狂妃</a></li>

						<li><span class="hits">03-04</span><span class="num">4.</span><a
							href="/3_3454/" title="完美恋人，首席已过期" target="_blank">完美恋人，首席已过期</a></li>

						<li><span class="hits">07-22</span><span class="num">5.</span><a
							href="/5_5368/" title="霸道枭少狂宠妻" target="_blank">霸道枭少狂宠妻</a></li>

						<li><span class="hits">02-23</span><span class="num">6.</span><a
							href="/27_27414/" title="倾世暖婚：首席亿万追妻" target="_blank">倾世暖婚：首席亿万追妻</a></li>

						<li><span class="hits">03-02</span><span class="num">7.</span><a
							href="/26_26600/" title="丑女种田：山里汉宠妻无度" target="_blank">丑女种田：山里汉宠妻无度</a></li>

						<li><span class="hits">03-03</span><span class="num">8.</span><a
							href="/30_30437/" title="绝宠妖妃：邪王，太闷骚！" target="_blank">绝宠妖妃：邪王，太闷骚！</a></li>

						<li><span class="hits">03-02</span><span class="num">9.</span><a
							href="/26_26659/" title="甜心V5：总裁宠之过急" target="_blank">甜心V5：总裁宠之过急</a></li>

						<li><span class="hits">06-07</span><span class="num">10.</span><a
							href="/1_1715/" title="秘密新婚，总裁爱妻极致" target="_blank">秘密新婚，总裁爱妻极致</a></li>

						<li><span class="hits">03-04</span><span class="num">11.</span><a
							href="/26_26992/" title="素女寻仙" target="_blank">素女寻仙</a></li>

						<li><span class="hits">03-04</span><span class="num">12.</span><a
							href="/30_30382/" title="总裁大人，体力好！" target="_blank">总裁大人，体力好！</a></li>

						<li><span class="hits">03-04</span><span class="num">13.</span><a
							href="/30_30240/" title="拒嫁魔帝：诱宠呆萌妃" target="_blank">拒嫁魔帝：诱宠呆萌妃</a></li>

						<li><span class="hits">03-04</span><span class="num">14.</span><a
							href="/11_11289/" title="误惹妖孽王爷：废材逆天四小姐" target="_blank">误惹妖孽王爷：废材逆天四小姐</a></li>

						<li><span class="hits">03-04</span><span class="num">15.</span><a
							href="/31_31385/" title="豪宠小萌妻：买个老婆回家爱" target="_blank">豪宠小萌妻：买个老婆回家爱</a></li>

					</ul>
				</div>

				<div class="topbooks" id="con_o7g_3" style="display: none;">
					<ul>

						<li><span class="hits">01-26</span><span class="num">1.</span><a
							href="/9_9030/" title="Hello，继承者" target="_blank">Hello，继承者</a></li>

						<li><span class="hits">02-02</span><span class="num">2.</span><a
							href="/9_9138/" title="女配逆袭之末世生存系统" target="_blank">女配逆袭之末世生存系统</a></li>

						<li><span class="hits">03-04</span><span class="num">3.</span><a
							href="/3_3454/" title="完美恋人，首席已过期" target="_blank">完美恋人，首席已过期</a></li>

						<li><span class="hits">07-22</span><span class="num">4.</span><a
							href="/5_5368/" title="霸道枭少狂宠妻" target="_blank">霸道枭少狂宠妻</a></li>

						<li><span class="hits">03-03</span><span class="num">5.</span><a
							href="/3_3532/" title="拒嫁豪门：少夫人99次出逃" target="_blank">拒嫁豪门：少夫人99次出逃</a></li>

						<li><span class="hits">01-01</span><span class="num">6.</span><a
							href="/30_30111/" title="首席长官，求别撩！" target="_blank">首席长官，求别撩！</a></li>

						<li><span class="hits">12-10</span><span class="num">7.</span><a
							href="/25_25954/" title="黑帝1001夜盛宠：鲜妻，有孕" target="_blank">黑帝1001夜盛宠：鲜妻，有孕</a></li>

						<li><span class="hits">03-04</span><span class="num">8.</span><a
							href="/11_11289/" title="误惹妖孽王爷：废材逆天四小姐" target="_blank">误惹妖孽王爷：废材逆天四小姐</a></li>

						<li><span class="hits">03-04</span><span class="num">9.</span><a
							href="/30_30382/" title="总裁大人，体力好！" target="_blank">总裁大人，体力好！</a></li>

						<li><span class="hits">03-03</span><span class="num">10.</span><a
							href="/8_8728/" title="都市奇门医圣" target="_blank">都市奇门医圣</a></li>

						<li><span class="hits">12-16</span><span class="num">11.</span><a
							href="/13_13026/" title="绝色丹药师：狂女遮天" target="_blank">绝色丹药师：狂女遮天</a></li>

						<li><span class="hits">01-14</span><span class="num">12.</span><a
							href="/1_1653/" title="女总裁的贴身兵王" target="_blank">女总裁的贴身兵王</a></li>

						<li><span class="hits">03-03</span><span class="num">13.</span><a
							href="/29_29278/" title="天价小逃妻：总裁，请止步" target="_blank">天价小逃妻：总裁，请止步</a></li>

						<li><span class="hits">03-03</span><span class="num">14.</span><a
							href="/4_4381/" title="邪王追妻：废材逆天小姐" target="_blank">邪王追妻：废材逆天小姐</a></li>

						<li><span class="hits">01-23</span><span class="num">15.</span><a
							href="/0_621/" title="重生娘子在种田" target="_blank">重生娘子在种田</a></li>

					</ul>
				</div>

			</div>
			<div class="clearfix"></div>
		</div>


		<div class="index_toplist mbottom">
			<div class="toptab" id="top_all_8">
				<span>完本小说排行</span> <span class="tabRight"> <span
					onmouseover="setTab('hng',1,3,'cur','')" class="cur" id="hng1">总</span>
					<span onmouseover="setTab('hng',2,3,'cur','')" id="hng2" class="">月</span>
					<span onmouseover="setTab('hng',3,3,'cur','')" id="hng3" class="">周</span>
				</span>
			</div>
			<div id="tabData_8">



				<div class="topbooks" id="con_hng_1" style="display: block;">
					<ul>

						<li><span class="hits">05-18</span><span class="num">1.</span><a
							href="/4_4120/" title="至尊战神" target="_blank">至尊战神</a></li>

						<li><span class="hits">03-01</span><span class="num">2.</span><a
							href="/3_3546/" title="龙血王者" target="_blank">龙血王者</a></li>

						<li><span class="hits">12-20</span><span class="num">3.</span><a
							href="/3_3144/" title="网游之三国无双" target="_blank">网游之三国无双</a></li>

						<li><span class="hits">12-15</span><span class="num">4.</span><a
							href="/8_8784/" title="洪荒之血道冥河" target="_blank">洪荒之血道冥河</a></li>

						<li><span class="hits">02-02</span><span class="num">5.</span><a
							href="/9_9138/" title="女配逆袭之末世生存系统" target="_blank">女配逆袭之末世生存系统</a></li>

						<li><span class="hits">02-17</span><span class="num">6.</span><a
							href="/23_23026/" title="星河帝国" target="_blank">星河帝国</a></li>

						<li><span class="hits">01-26</span><span class="num">7.</span><a
							href="/9_9030/" title="Hello，继承者" target="_blank">Hello，继承者</a></li>

						<li><span class="hits">12-09</span><span class="num">8.</span><a
							href="/16_16150/" title="贴身狂医" target="_blank">贴身狂医</a></li>

						<li><span class="hits">07-22</span><span class="num">9.</span><a
							href="/5_5368/" title="霸道枭少狂宠妻" target="_blank">霸道枭少狂宠妻</a></li>

						<li><span class="hits">04-21</span><span class="num">10.</span><a
							href="/7_7087/" title="武灵天下" target="_blank">武灵天下</a></li>

						<li><span class="hits">11-24</span><span class="num">11.</span><a
							href="/3_3087/" title="完美世界" target="_blank">完美世界</a></li>

						<li><span class="hits">06-28</span><span class="num">12.</span><a
							href="/5_5220/" title="超级医道高手" target="_blank">超级医道高手</a></li>

						<li><span class="hits">12-04</span><span class="num">13.</span><a
							href="/19_19514/" title="逆天武神" target="_blank">逆天武神</a></li>

						<li><span class="hits">08-01</span><span class="num">14.</span><a
							href="/20_20172/" title="美女的透视神医" target="_blank">美女的透视神医</a></li>

						<li><span class="hits">01-01</span><span class="num">15.</span><a
							href="/3_3479/" title="铁血强国" target="_blank">铁血强国</a></li>

					</ul>
				</div>



				<div class="topbooks" id="con_hng_2" style="display: none;">
					<ul>

						<li><span class="hits">05-18</span><span class="num">1.</span><a
							href="/4_4120/" title="至尊战神" target="_blank">至尊战神</a></li>

						<li><span class="hits">03-01</span><span class="num">2.</span><a
							href="/3_3546/" title="龙血王者" target="_blank">龙血王者</a></li>

						<li><span class="hits">12-20</span><span class="num">3.</span><a
							href="/3_3144/" title="网游之三国无双" target="_blank">网游之三国无双</a></li>

						<li><span class="hits">01-26</span><span class="num">4.</span><a
							href="/9_9030/" title="Hello，继承者" target="_blank">Hello，继承者</a></li>

						<li><span class="hits">02-02</span><span class="num">5.</span><a
							href="/9_9138/" title="女配逆袭之末世生存系统" target="_blank">女配逆袭之末世生存系统</a></li>

						<li><span class="hits">02-17</span><span class="num">6.</span><a
							href="/23_23026/" title="星河帝国" target="_blank">星河帝国</a></li>

						<li><span class="hits">05-17</span><span class="num">7.</span><a
							href="/4_4827/" title="至尊箭神" target="_blank">至尊箭神</a></li>

						<li><span class="hits">12-09</span><span class="num">8.</span><a
							href="/16_16150/" title="贴身狂医" target="_blank">贴身狂医</a></li>

						<li><span class="hits">05-30</span><span class="num">9.</span><a
							href="/9_9463/" title="都市霸主" target="_blank">都市霸主</a></li>

						<li><span class="hits">12-15</span><span class="num">10.</span><a
							href="/8_8784/" title="洪荒之血道冥河" target="_blank">洪荒之血道冥河</a></li>

						<li><span class="hits">12-29</span><span class="num">11.</span><a
							href="/19_19502/" title="老子是癞蛤蟆" target="_blank">老子是癞蛤蟆</a></li>

						<li><span class="hits">12-04</span><span class="num">12.</span><a
							href="/19_19514/" title="逆天武神" target="_blank">逆天武神</a></li>

						<li><span class="hits">06-21</span><span class="num">13.</span><a
							href="/2_2508/" title="造化之门" target="_blank">造化之门</a></li>

						<li><span class="hits">03-01</span><span class="num">14.</span><a
							href="/3_3317/" title="天价萌妻" target="_blank">天价萌妻</a></li>

						<li><span class="hits">07-22</span><span class="num">15.</span><a
							href="/5_5368/" title="霸道枭少狂宠妻" target="_blank">霸道枭少狂宠妻</a></li>

					</ul>
				</div>



				<div class="topbooks" id="con_hng_3" style="display: none;">
					<ul>

						<li><span class="hits">05-18</span><span class="num">1.</span><a
							href="/4_4120/" title="至尊战神" target="_blank">至尊战神</a></li>

						<li><span class="hits">03-01</span><span class="num">2.</span><a
							href="/3_3546/" title="龙血王者" target="_blank">龙血王者</a></li>

						<li><span class="hits">12-20</span><span class="num">3.</span><a
							href="/3_3144/" title="网游之三国无双" target="_blank">网游之三国无双</a></li>

						<li><span class="hits">01-26</span><span class="num">4.</span><a
							href="/9_9030/" title="Hello，继承者" target="_blank">Hello，继承者</a></li>

						<li><span class="hits">02-02</span><span class="num">5.</span><a
							href="/9_9138/" title="女配逆袭之末世生存系统" target="_blank">女配逆袭之末世生存系统</a></li>

						<li><span class="hits">02-17</span><span class="num">6.</span><a
							href="/23_23026/" title="星河帝国" target="_blank">星河帝国</a></li>

						<li><span class="hits">12-09</span><span class="num">7.</span><a
							href="/16_16150/" title="贴身狂医" target="_blank">贴身狂医</a></li>

						<li><span class="hits">12-15</span><span class="num">8.</span><a
							href="/8_8784/" title="洪荒之血道冥河" target="_blank">洪荒之血道冥河</a></li>

						<li><span class="hits">12-04</span><span class="num">9.</span><a
							href="/19_19514/" title="逆天武神" target="_blank">逆天武神</a></li>

						<li><span class="hits">06-21</span><span class="num">10.</span><a
							href="/2_2508/" title="造化之门" target="_blank">造化之门</a></li>

						<li><span class="hits">06-28</span><span class="num">11.</span><a
							href="/5_5220/" title="超级医道高手" target="_blank">超级医道高手</a></li>

						<li><span class="hits">05-30</span><span class="num">12.</span><a
							href="/9_9463/" title="都市霸主" target="_blank">都市霸主</a></li>

						<li><span class="hits">07-22</span><span class="num">13.</span><a
							href="/5_5368/" title="霸道枭少狂宠妻" target="_blank">霸道枭少狂宠妻</a></li>

						<li><span class="hits">08-01</span><span class="num">14.</span><a
							href="/20_20172/" title="美女的透视神医" target="_blank">美女的透视神医</a></li>

						<li><span class="hits">12-31</span><span class="num">15.</span><a
							href="/4_4862/" title="最强兵王" target="_blank">最强兵王</a></li>

					</ul>
				</div>


			</div>
			<div class="clearfix"></div>
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
	<script type="text/javascript">
		//滑动门
		function setTab(name, cursel, n, currentClass, otherClass) {
			for (i = 1; i <= n; i++) {
				var menu = document.getElementById(name + i);
				var con = document.getElementById("con_" + name + "_" + i);
				menu.className = i == cursel ? currentClass : otherClass;
				con.style.display = i == cursel ? "block" : "none";
			}
		}
	</script>
</body>
</html>
