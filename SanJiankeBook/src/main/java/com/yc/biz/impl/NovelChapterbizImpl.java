package com.yc.biz.impl;

import javax.annotation.Resource;

import com.yc.biz.NovelChapterbiz;
import com.yc.dao.BaseDao;

public class NovelChapterbizImpl implements NovelChapterbiz {
private  BaseDao bd;
	
	@Resource(name="baseDaoMybatisImpl")
	public void setBd(BaseDao bd) {
		this.bd = bd;
	}
}
