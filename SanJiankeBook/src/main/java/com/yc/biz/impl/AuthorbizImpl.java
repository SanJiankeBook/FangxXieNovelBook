package com.yc.biz.impl;

import javax.annotation.Resource;

import com.yc.biz.Authorbiz;
import com.yc.dao.BaseDao;

public class AuthorbizImpl implements Authorbiz {
private  BaseDao bd;
	
	@Resource(name="baseDaoMybatisImpl")
	public void setBd(BaseDao bd) {
		this.bd = bd;
	}
}
