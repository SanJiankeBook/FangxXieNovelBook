package com.yc.biz.impl;

import javax.annotation.Resource;

import com.yc.biz.Adminbiz;
import com.yc.dao.BaseDao;

public class AdminbizImpl implements Adminbiz {
private  BaseDao bd;
	
	@Resource(name="baseDaoMybatisImpl")
	public void setBd(BaseDao bd) {
		this.bd = bd;
	}
}
