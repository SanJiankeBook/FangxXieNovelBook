<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<title>作品创作区</title>
	<link rel="stylesheet" type="text/css" href="easyui/css/easyui.css">
	<link rel="stylesheet" type="text/css" href="easyui/css/icon.css">
	<link rel="stylesheet" type="text/css" href="easyui/css/demo.css">
	<script type="text/javascript" src="js/jquery-1.12.4.js"></script>
	<script type="text/javascript" src="easyui/js/jquery.easyui.min.js"></script>
	<script type="text/javascript" src="easyui/js/index.js"></script>
	<script type="text/javascript" src="easyui/js/easyui-lang-zh_CN.js"></script>
	
	<script type="text/javascript" charset="utf-8" src="ueditor/ueditor.config.js"></script>
    <script type="text/javascript" charset="utf-8" src="ueditor/ueditor.all.min.js"> </script>
    <!--建议手动加在语言，避免在ie下有时因为加载语言失败导致编辑器加载失败-->
    <!--这里加载的语言文件会覆盖你在配置项目里添加的语言类型，比如你在配置项目里配置的是英文，这里加载的中文，那最后就是中文-->
    <script type="text/javascript" charset="utf-8" src="../../ueditor/lang/zh-cn/zh-cn.js"></script>
    
</head>
<body class="easyui-layout">
<body class="easyui-layout">  
    <div data-options="region:'north',title:'作品创作',split:true" style="height:300px;">
    <p id="name"></p>
    	<div id="yonghupl"></div>
    </div>  
    <div data-options="region:'center',title:'评论编写'" style="padding:5px;background:#eee;">
    <p style="clear:both;">作品创作</p>
		<div>
		<script type="text/javascript" id="editor" style="width:98%;height:100px;"></script>
	</div>
	<input type="button" onclick="addGoods()" value="发表评论"/> 
    </div>  
</body>  

	<script type="text/javascript">
	function GetQueryString(name)
	{
	     var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
	     var r = window.location.search.substr(1).match(reg);
	     if(r!=null)return  unescape(r[2]); return null;
	}
	$(function(){
		var id=GetQueryString("id");
		$.ajax({//显示评论
			url:"pinglun.action",
			type:"post",
			data:"op=getpinlun&id="+id,
			dataType:"JSON",
			success:function( data ){
				var art=document.getElementById("yonghupl");
				$(art).html("");
				for(var i=0;i<data.length;i++){
					var buybtn1=document.createElement("p");
					$(buybtn1).html("<span>"+data[i].obj1+"</span>&nbsp;&nbsp;&nbsp;<span>"+data[i].obj+"</span>");
					art.appendChild(buybtn1);
				}
			}
		});
	});
	var ue=UE.getEditor('editor');
	function addGoods(){
		var id=GetQueryString("id");
		var des=ue.getContent();
			$.ajax({//插入评论
				url:"pinglun.action",
				type:"post",
				data:"op=addpinlun&ue="+des+"&id="+id,
				dataType:"JSON",
				success:function( data ){
					if(data.code==0){
						alert("请先去登入");
						window.location.href="../../index.jsp";
					}else{
						var art=document.getElementById("yonghupl");
						$(art).html("");
						for(var i=0;i<data.length;i++){
							var buybtn1=document.createElement("p");
							$(buybtn1).html("<span>"+data[i].obj1+"</span style='color: #000000'>&nbsp;&nbsp;&nbsp;<span style='color:blue'>"+data[i].obj+"</span>");
							art.appendChild(buybtn1);
						}
					}
				}
			});
	}
	
	</script>
</body>
</html>