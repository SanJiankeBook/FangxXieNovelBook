package com.yc.biz.impl;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.yc.biz.UserBookbiz;
import com.yc.dao.BaseDao;
<<<<<<< HEAD

@Service
public class UserBookbizImpl implements UserBookbiz {
	private  BaseDao bd;
=======
@Service
public class UserBookbizImpl implements UserBookbiz {
private  BaseDao bd;
>>>>>>> f36a3cf5ef558ccaca2a3c75466ba37b65dcaa9e
	
	@Resource(name="baseDaoMybatisImpl")
	public void setBd(BaseDao bd) {
		this.bd = bd;
	}
}
