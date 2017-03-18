package com.yc.biz.impl;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import org.springframework.stereotype.Service;
import com.yc.bean.Novel;
import com.yc.bean.NovelChapter;
import com.yc.biz.NovelChapterbiz;
import com.yc.dao.BaseDao;
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


	@Override
	public List NewChapter(int nid) {
		Novel novel=new Novel();
		novel.setNid(nid);
		List list=bd.findAll(novel, "newChapter");
		return list;

	}

	@Override
	public List<NovelChapter> ShowAllChapter(int nid) {
		NovelChapter nchpater=new NovelChapter();
		nchpater.setNid(nid);
		List<NovelChapter> list=bd.findAll(nchpater, "allChapter");
		return list;

	}
	//插入小说章节详细信息
	@Override
	public void insertNovelChapter(NovelChapter novelchapter) {
		this.bd.add(novelchapter, "insertNovel");


	}

	//根据小说id获取章节id
	@Override
	public Double getNovleChapterId(NovelChapter novelchapter) {
		Map map=new HashMap<>();
		map.put("nid", novelchapter.getNid());
		Double nc =this.bd.fingFunc(novelchapter, map, "getNovelChapterId");
		return nc;
	}
}
