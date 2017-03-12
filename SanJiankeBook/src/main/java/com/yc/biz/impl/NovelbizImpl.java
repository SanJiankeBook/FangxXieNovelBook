package com.yc.biz.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.yc.bean.Novel;
import com.yc.biz.Novelbiz;
import com.yc.dao.BaseDao;
@Service
public class NovelbizImpl implements Novelbiz {
private  BaseDao bd;
	
	@Resource(name="baseDaoMybatisImpl")
	public void setBd(BaseDao bd) {
		this.bd = bd;
	}
	//插入书本信息
	@Override
	public Integer InsertNovel(Novel novel) {
		this.bd.add(novel, "addNovel");
		return null;
	}

	@Override
	public List<Novel> FindAllNovel() {
		List<Novel> list=this.bd.findAll(new Novel(), "findAllNovel");
		return list;
	}

	@Override
	public void delNovel(int nid) {
		Novel novel=new Novel();
		novel.setNid(nid);
		this.bd.delete(novel, "delNovel");
	}
	@Override
	public List<Novel> FindNovelByPage(Integer start, Integer end) {
		Map<String,Integer> map=new HashMap<String,Integer>();
		map.put("start", start);
		map.put("end", end);
		List<Novel> list=this.bd.findAll(new Novel(), map, "findNovelByPage");
		return list;
	}
}
