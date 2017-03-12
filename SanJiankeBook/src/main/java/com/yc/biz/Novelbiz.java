package com.yc.biz;

import java.util.List;
import com.yc.bean.Novel;

public interface Novelbiz {
	//插入书本信息
	Integer InsertNovel(Novel novel);
	
	//查找所有小说
	List<Novel> FindAllNovel();
		
		//删除小说
	void delNovel(int nid);
	
	//分页查询
	List<Novel> FindNovelByPage(Integer start,Integer end);
		
		//查询小说信息
		public List ShowNovel();
		
		//根据id查询小说信息
		public List ShowNovel_id(int nid);
		
		//根据类型查询小说名
		public List TypeNovel(String tname);


}

