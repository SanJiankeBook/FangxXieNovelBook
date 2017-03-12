package com.yc.biz.impl;

<<<<<<< HEAD
import java.util.List;

=======
>>>>>>> f36a3cf5ef558ccaca2a3c75466ba37b65dcaa9e
import javax.annotation.Resource;

import org.springframework.stereotype.Service;

<<<<<<< HEAD
import com.yc.bean.Novel;
import com.yc.bean.NovelChapter;
import com.yc.biz.NovelChapterbiz;
import com.yc.dao.BaseDao;

@Service
public class NovelChapterbizImpl implements NovelChapterbiz {
	private  BaseDao bd;
=======
import com.yc.bean.NovelChapter;
import com.yc.biz.NovelChapterbiz;
import com.yc.dao.BaseDao;
@Service
public class NovelChapterbizImpl implements NovelChapterbiz {
private  BaseDao bd;
>>>>>>> f36a3cf5ef558ccaca2a3c75466ba37b65dcaa9e
	
	@Resource(name="baseDaoMybatisImpl")
	public void setBd(BaseDao bd) {
		this.bd = bd;
	}

<<<<<<< HEAD
	@Override
	public List NewChapter(int nid) {
		Novel novel=new Novel();
		novel.setNid(nid);
		List list=bd.findAll(novel, "newChapter");
		return list;
=======
	//插入小说章节详细信息
	@Override
	public void insertNovelChapter(NovelChapter novelchapter) {
		this.bd.add(novelchapter, "insertNovel");
>>>>>>> f36a3cf5ef558ccaca2a3c75466ba37b65dcaa9e
	}
}
