package com.yc.biz.impl;

import javax.annotation.Resource;

import com.yc.biz.Novelbiz;
import com.yc.dao.BaseDao;

public class NovelbizImpl implements Novelbiz {
private  BaseDao bd;
	
	@Resource(name="baseDaoMybatisImpl")
	public void setBd(BaseDao bd) {
		this.bd = bd;
	}
}
