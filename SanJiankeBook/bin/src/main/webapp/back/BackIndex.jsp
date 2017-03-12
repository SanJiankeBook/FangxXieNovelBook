<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>后台主页</title>

	<link rel="stylesheet" type="text/css" href="../easyui/css/easyui.css">
	<link rel="stylesheet" type="text/css" href="../easyui/css/icon.css">
	<link rel="stylesheet" type="text/css" href="../easyui/css/demo.css">
	
	<script type="text/javascript" src="../js/jquery-1.12.4.js"></script>
	<script type="text/javascript" src="../easyui/js/jquery.easyui.min.js"></script>
	<script type="text/javascript" src="../easyui/js/index.js"></script>
	
	<script type="text/javascript" src="../js/ajaxfileupload.js"></script>
	<script type="text/javascript" src="../js/showpic.js"></script>
	
	<script type="text/javascript" charset="utf-8" src="../ueditor/ueditor.config.js"></script>
	<script type="text/javascript" charset="utf-8" src="../ueditor/ueditor.all.min.js"> </script>
	
	 <script type="text/javascript" charset="utf-8" src="../ueditor/lang/zh-cn/zh-cn.js"></script> 

	<script type="text/javascript" src="../easyui/js/easyui-lang-zh_CN.js"></script>
</head>
<body class="easyui-layout">
	<div data-options="region:'north',border:false" style="height:60px;background:#B3DFDA;padding:10px;font-size:25px;text-align:center;">三剑客文学网</div>
	
	<div data-options="region:'west',split:true,title:'导航'" style="width:150px;padding:10px;">
		<ul id="novel_menu" class="easyui-tree">
			<li>
				<span id="authorManage">作家管理</span>
				<ul>
					<li id="showAllAuthor">所有作家</li>
					<li id="author_manage">管理作家</li>
				</ul>
			</li>
			
			<li>
			<span id="novelManage">小说管理</span>
				<ul>
					<li id="showAllNovel">所有小说</li>
					<li id="novel_manage">管理小说</li>
				</ul>
			</li>
			
			<li>
				<span id="userManage">用户管理</span>
				<ul>
					<li id="showAllUser">所有用户</li>
					<li id="user_manage">管理用户</li>
				</ul>
			</li>
			
			<li id="checkNovel_manage">审查上传小说</li>
		</ul>  
		
	
	</div>
	
	<div data-options="region:'east',split:true,collapsed:true,title:'帮助'" style="width:100px;padding:10px;">
	
	
	</div>
	
	<div data-options="region:'south',border:false" style="height:50px;background:#A9FACD;padding:10px;">
		底部版权区

	</div>
	
	<div data-options="region:'center',title:'内容', tools:[{
		iconCls:'icon-full',
		handler:function(){
			full();
		}
	},{
		iconCls:'icon-unfull',
		handler:function(){
			unFull();
		}
	}] ">
	
		<div id="index_content" class="easyui-tabs" data-options="fit:true ">  
		</div>  
	</div>
</body>
</html>