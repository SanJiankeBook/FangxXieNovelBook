$(function(){
	$('#goods_menu').tree({
		onClick: function(node){
			var id=node.id;//获取点击的节点；
			var title="元辰信息";
			var  href="managerfood.html";
			var tabobj=$("#index_content_info");
			 if(id=="add_goods"){
				 if(tabobj.tabs("exists","添加商品")){
					tabobj.tabs("select","添加商品") ;
					return;
				 }else{
					 title='添加商品';   
					 href="addgoods.html";
				 }
			 }else if(id=="manager_goods"){
				 	if(tabobj.tabs("exists","管理商品")){
						tabobj.tabs("select","管理商品") ;
						return;
					 }else{
						 title='管理商品';   
						 href="showgoods.html";
					 }
				 
			 }else if(id=="manager_user"){
				 if(tabobj.tabs("exists","管理用户信息")){
						tabobj.tabs("select","管理用户信息") ;
						return;
				 }else{
						 title='管理用户信息';   
						 href="managerfood.html";
				 }
				 
				 
			 }else if(id=="manager_shuju"){
				 if(tabobj.tabs("exists","后台用户数据统计")){
						tabobj.tabs("select","后台用户数据统计") ;
						return;
				 }else{
						 title='后台数据统计';   
						 href="shujutongji.html";
				 }
			 }else if(id=="qiantai"){
				 window.location.href="../../index.jsp";
			 }else if(id=="manager_foodshuju"){
				 if(tabobj.tabs("exists","后台商品数据统计")){
						tabobj.tabs("select","后台商品数据统计") ;
						return;
				 }else{
						 title='后台数据统计';   
						 href="foodshujutongji.html";
				 }
			 }
			 
			
			 tabobj.tabs('add',{ //添加一个选项卡  
				    title: title,  
				    href:href,  
				    fit:true,
				    closable:true //是否关闭  
				    
				}); 
			
		}
	});


})