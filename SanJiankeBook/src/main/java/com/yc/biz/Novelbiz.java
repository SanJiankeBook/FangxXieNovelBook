package com.yc.biz;

import java.util.List;
import com.yc.bean.Author;
import com.yc.bean.Novel;

public interface Novelbiz {

	// 插入书本信息
	Integer InsertNovel(Novel novel);

	// 查询小说信息
	public List ShowNovel();

	// 根据id查询小说信息
	public List ShowNovel_id(int nid);

	// 根据类型查询小说名
	public List TypeNovel(String tname);

	// 查找所有小说
	List<Novel> FindAllNovel();
<<<<<<< HEAD
		
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
		//根据小说名查询小说
		public List<Novel> findNovelByName(Novel novel);
		//根据小说名查询小说并且分页
		List<Novel> FindNovelByNameFenYe(String nname, int start, int end);
=======
>>>>>>> a7917f8052bcd2f740e03f238faf33fbaf247471

	// 删除小说
	void delNovel(int nid);

	// 分页查询
	List<Novel> FindNovelByPage(Integer start, Integer end);
	
	//根据小说名查询所有小说信息
	List<Novel> NameFindNovel(String nname);
	
}
