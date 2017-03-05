package com.yc.biz.impl;

import javax.annotation.Resource;

import com.yc.biz.UserBookbiz;
import com.yc.dao.BaseDao;

public class UserBookbizImpl implements UserBookbiz {
private  BaseDao bd;
	
	@Resource(name="baseDaoMybatisImpl")
	public void setBd(BaseDao bd) {
		this.bd = bd;
	}
}
