package com.yc.biz.impl;

<<<<<<< HEAD
import java.util.List;

=======
>>>>>>> f36a3cf5ef558ccaca2a3c75466ba37b65dcaa9e
import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.yc.bean.Novel;
<<<<<<< HEAD
import com.yc.bean.NovelType;
import com.yc.biz.Novelbiz;
import com.yc.dao.BaseDao;

@Service
public class NovelbizImpl implements Novelbiz {
	//private Novel novel;
	private  BaseDao bd;
=======
import com.yc.biz.Novelbiz;
import com.yc.dao.BaseDao;
@Service
public class NovelbizImpl implements Novelbiz {
private  BaseDao bd;
>>>>>>> f36a3cf5ef558ccaca2a3c75466ba37b65dcaa9e
	
	@Resource(name="baseDaoMybatisImpl")
	public void setBd(BaseDao bd) {
		this.bd = bd;
	}
<<<<<<< HEAD

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
=======
	//插入书本信息
	@Override
	public Integer InsertNovel(Novel novel) {
		this.bd.add(novel, "addNovel");
		return null;
>>>>>>> f36a3cf5ef558ccaca2a3c75466ba37b65dcaa9e
	}
}
