<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<link rel="stylesheet" type="text/css" href="css/search.css" />

<title>显示所有用户</title>
</head>
<body>
	<table id="type_showuser_info" data-options="fit:true"></table> 
	
	<script type="text/javascript">
	var datagridObj;
	var editRow = undefined;	//当前正在被编辑的行的索引
	var op;
	var flag;

	datagridObj=$('#type_showuser_info').datagrid({
		url:'findAllUserByPage',   
		fitColumns:true,
		loadMsg:'数据加载中...',
		striped:true,		//斑马线效果
		pagination : true, //显示分页栏
		nowrap:true,		//超出宽度自动截取
		rownumber:true,		//显示行数
		sortName:'uid',		//排序的咧
		remoteSort:false,	//前段排序而非服务器的排序，自己的排序
		pageSize:5,
        pageList:[5,10,15,20,25,30],
		columns:[[
			{field:'uid',title:'用户ID',width:100,align:'center',sortable:true},
			{field:'uname',title:'用户姓名',width:100,align:'center'},
 			{field:'u_number',title:'用户账号',width:100,align:'center',sortable:true},
 			{field:'upassword',title:'用户密码',width:100,align:'center',sortable:true},
 			{field:'usex',title:'用户性别',width:100,align:'center',sortable:true}
		]]
	
	});
		
	</script>
</body>
</html>