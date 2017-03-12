<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>小说管理</title>
</head>
<body>
	<div id="goods_manager_search" style="height: 28px">
	<a href="javascript:addFoodsInfo()" class="easyui-linkbutton"
		data-options="iconCls:'icon-add',plain:true" style="float: left">添加</a>
	<div class="datagrid-btn-separator"></div>
	<a href="javascript:delFoodsInfo()" class="easyui-linkbutton"
		data-options="iconCls:'icon-remove',plain:true" style="float: left">删除</a>
	<div class="datagrid-btn-separator"></div>
	<a href="javascript:updateGoodsInfo()" class="easyui-linkbutton"
		data-options="iconCls:'icon-edit',plain:true" style="float: left">修改</a>
	<div class="datagrid-btn-separator"></div>
	<!-- <a id="btn" href="javascript:foodsUp()" class="easyui-linkbutton" data-options="iconCls:'icon'">上架</a>		//1
	<a id="btn" href="javascript:foodsDown()" class="easyui-linkbutton" data-options="iconCls:'icon'">下架</a>	//2 -->
	<label>商品名称:</label><input type="text" name="fname" id="search_fname" />
	<a id="btn" href="javascript:goods_search()" class="easyui-linkbutton"
		data-options="iconCls:'icon-search'">查询</a>

</div>
</body>
</html>