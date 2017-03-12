$(function(){
	$('#index_content').tabs('add',{
		title:'三剑客文学',
		href:'sanJianKe.html',
		fit:true,
	});

	$('#novel_menu').tree({
		onClick:function(node){
			var id = node.id; //获取点击的节点
			var title= "三剑客文学";
			var href = "BackIndex.jsp";
			var tabObj = $('#index_content' );
			console.info(id);

			if( id == "authorManage"){	//信息管理
				if( tabObj.tabs("exists","作家管理")){
					//选中
					return ;
				}else{
					return;
				}
			}else if(id=="showAllAuthor"){ //添加商品
				if( tabObj.tabs("exists","所有作家")){
					//选中
					tabObj.tabs("select","所有作家");
					return ;
				}else{
					title="所有作家";
					href="showAllAuthor.jsp";
				}
			}else if( id=="author_manage" ){	//管理商品类型
				if( tabObj.tabs("exists","管理作家")){
					//选中
					tabObj.tabs("select","管理作家");
					return ;
				}else{
					title="管理作家";
					href="authorManage.jsp";
				}
			}else if( id=="showAllNovel" ){	//用户信息
				if( tabObj.tabs("exists","所有小说")){
					//选中
					tabObj.tabs("select","所有小说");
					return ;
				}else{
					title="所有小说";
					href="showAllNovel.jsp";
				}
			}else if( id=="novel_manage" ){	//商品销量排行
				if( tabObj.tabs("exists","管理小说")){
					//选中
					tabObj.tabs("select","管理小说");
					return ;
				}else{
					title="管理小说";
					href="novelManage.jsp";
				}
			}else if( id=="showAllUser" ){	//商品销量排行
				if( tabObj.tabs("exists","所有用户")){
					//选中
					tabObj.tabs("select","所有用户");
					return ;
				}else{
					title="所有用户";
					href="showAllUser.jsp";
				}
			}else if( id=="user_manage" ){	//商品销量排行
				if( tabObj.tabs("exists","管理用户")){
					//选中
					tabObj.tabs("select","管理用户");
					return ;
				}else{
					title="管理用户";
					href="userManage.jsp";
				}
			}else if( id=="checkNovel_manage" ){	//商品销量排行
				if( tabObj.tabs("exists","审查上传小说")){
					//选中
					tabObj.tabs("select","审查上传小说");
					return ;
				}else{
					title="审查上传小说";
					href="checkAuthorNovel.jsp";
				}
			}

			tabObj.tabs('add',{
				title:title,
				href:href,
				fit:true,
				closable:true
			});
		}
	});


	/*$("#btn_foods").click(function(){
		$.ajax({
			url:"addfoods.action",
			data:"op=addfoods",
			type:"POST",
			dataType:"JSON",
			success:function(data){
				if( data.code == 1 ){
					alert(1);
				}
			}
		});
	});*/

});





