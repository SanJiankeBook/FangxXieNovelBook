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

	// 删除小说
	void delNovel(Integer nid);

	// 分页查询
	List<Novel> FindNovelByPage(Integer start, Integer end);

	// 根据小说名查询小说
	public List<Novel> findNovelByName(Novel novel);

	// 根据小说名查询小说并且分页
	List<Novel> FindNovelByNameFenYe(String nname, int start, int end);

	// 根据小说名查询所有小说信息
	List<Novel> NameFindNovel(String nname);

	// 查询所有待审核小说个数
	List<Novel> count();

	// 查询待审核的小说
	List<Novel> UncheckNovel(Integer start, Integer end);

	// 将待审核小说通过,修改standby_1值
	void passNovel(Integer nid);

	// 不通过待审核小说
	void UnpassNovel(Integer nid);
	
	//显示作品推荐区的数据
	List<Novel> NovelRecommend();

}
