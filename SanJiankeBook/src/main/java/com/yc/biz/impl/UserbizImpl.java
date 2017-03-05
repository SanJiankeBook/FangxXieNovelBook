package com.yc.biz.impl;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.yc.biz.Userbiz;
import com.yc.dao.BaseDao;
@Service
public class UserbizImpl implements Userbiz {
private  BaseDao bd;
	
	@Resource(name="baseDaoMybatisImpl")
	public void setBd(BaseDao bd) {
		this.bd = bd;
	}
	//注册成为用户
	@Override
	public Integer InsertUser(Object obj) {
		Integer uid=this.bd.add1(obj, "addUser");
		return uid;
	}
}
