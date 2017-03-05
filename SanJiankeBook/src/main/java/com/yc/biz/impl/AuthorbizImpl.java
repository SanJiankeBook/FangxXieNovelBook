package com.yc.biz.impl;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.yc.biz.Authorbiz;
import com.yc.dao.BaseDao;
@Service
public class AuthorbizImpl implements Authorbiz {
private  BaseDao bd;
	
	@Resource(name="baseDaoMybatisImpl")
	public void setBd(BaseDao bd) {
		this.bd = bd;
	}
	
	//注册成为作家
	@Override
	public void insertAuthor(Object obj) {
		this.bd.add(obj, "addAuthor");
	}
}
