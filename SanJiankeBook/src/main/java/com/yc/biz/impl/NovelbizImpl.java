package com.yc.biz.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import org.springframework.stereotype.Service;

import com.yc.bean.Novel;
import com.yc.bean.NovelType;
import com.yc.biz.Novelbiz;
import com.yc.dao.BaseDao;

@Service
public class NovelbizImpl implements Novelbiz {
	private BaseDao bd;

	@Resource(name = "baseDaoMybatisImpl")
	public void setBd(BaseDao bd) {
		this.bd = bd;
	}

	@Override
	public List<Novel> FindAllNovel() {
		List<Novel> list = this.bd.findAll(new Novel(), "findAllNovel");
		return list;
	}

	@Override
	public void delNovel(int nid) {
		Novel novel = new Novel();
		novel.setNid(nid);
		this.bd.delete(novel, "delNovel");
	}

	@Override
	public List<Novel> FindNovelByPage(Integer start, Integer end) {
		Map<String, Integer> map = new HashMap<String, Integer>();
		map.put("start", start);
		map.put("end", end);
		List<Novel> list = this.bd.findAll(new Novel(), map, "");
		return list;
	}

	@Override
	public List ShowNovel() {
		List list = bd.findAll(new Novel(), "getAllnname");
		return list;
	}

	// 根据小说id获取小说信息
	@Override
	public List ShowNovel_id(int nid) {
		Novel novel = new Novel();
		novel.setNid(nid);
		List list = bd.findAll(novel, "idgetAllnname");
		return list;
	}

	// 根据类型查询小说名字
	@Override
	public List<Novel> TypeNovel(String tname) {
		Novel novel = new Novel();
		NovelType ntype = new NovelType();
		ntype.setTname(tname);
		novel.setNovelType(ntype);
		List<Novel> list = bd.findAll(novel, "typegetAllnname");
		return list;
	}

	// 插入书本信息
	@Override
	public Integer InsertNovel(Novel novel) {
		this.bd.add(novel, "addNovel");
		return null;
	}

	//根据小说名查询所有小说信息
	@Override
	public List<Novel> NameFindNovel(String nname) {
		Novel novel=new Novel();
		novel.setNname(nname);
		List<Novel> list=bd.findAll(novel, "nnamegetAll");
		return list;
	}


}
