package com.yc.biz.impl;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.yc.bean.Novel;
import com.yc.bean.NovelType;
import com.yc.biz.Novelbiz;
import com.yc.dao.BaseDao;

@Service
public class NovelbizImpl implements Novelbiz {
	//private Novel novel;
	private  BaseDao bd;
	
	@Resource(name="baseDaoMybatisImpl")
	public void setBd(BaseDao bd) {
		this.bd = bd;
	}

	@Override
	public List ShowNovel() {
		List list=bd.findAll(new Novel(), "getAllnname");
		return list;
	}

	@Override
	public List ShowNovel_id(int nid) {
		Novel novel=new Novel();
		novel.setNid(nid);
		List list=bd.findAll(novel, "idgetAllnname");
		return list;
	}

	@Override
	public List<Novel> TypeNovel(String tname) {
		Novel novel=new Novel();
		NovelType ntype=new NovelType();
		ntype.setTname(tname);
		novel.setNovelType(ntype);
		List<Novel> list=bd.findAll(novel, "typegetAllnname");
		return list;
	}
}
