package com.yc.biz;


import java.util.List;
import com.yc.bean.NovelChapter;

public interface NovelChapterbiz {
	
	//插入小说章节信息
	void insertNovelChapter(NovelChapter novelchapter);
	
	//查询小说最新章节
	public List NewChapter(int nid);
}
