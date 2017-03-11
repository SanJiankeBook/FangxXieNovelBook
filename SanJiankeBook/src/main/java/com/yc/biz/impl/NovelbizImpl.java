package com.yc.biz.impl;

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
}
