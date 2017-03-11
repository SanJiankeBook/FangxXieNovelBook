package com.yc.biz.impl;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.yc.bean.NovelChapter;
import com.yc.biz.NovelChapterbiz;
import com.yc.dao.BaseDao;
@Service
public class NovelChapterbizImpl implements NovelChapterbiz {
private  BaseDao bd;
	
	@Resource(name="baseDaoMybatisImpl")
	public void setBd(BaseDao bd) {
		this.bd = bd;
	}

	//插入小说章节详细信息
	@Override
	public void insertNovelChapter(NovelChapter novelchapter) {
		this.bd.add(novelchapter, "insertNovel");
	}
}
