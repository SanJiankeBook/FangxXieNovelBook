package com.yc.biz.impl;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.yc.biz.NovelChapterbiz;
import com.yc.dao.BaseDao;
@Service
public class NovelChapterbizImpl implements NovelChapterbiz {
private  BaseDao bd;
	
	@Resource(name="baseDaoMybatisImpl")
	public void setBd(BaseDao bd) {
		this.bd = bd;
	}
}
