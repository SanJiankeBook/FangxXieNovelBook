package com.yc.biz.impl;

import javax.annotation.Resource;

import com.yc.biz.Userbiz;
import com.yc.dao.BaseDao;

public class UserbizImpl implements Userbiz {
private  BaseDao bd;
	
	@Resource(name="baseDaoMybatisImpl")
	public void setBd(BaseDao bd) {
		this.bd = bd;
	}
}
