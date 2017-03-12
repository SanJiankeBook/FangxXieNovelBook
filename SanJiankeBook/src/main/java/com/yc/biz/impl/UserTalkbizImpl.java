package com.yc.biz.impl;

<<<<<<< HEAD
import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.yc.biz.UserTalkbiz;
import com.yc.dao.BaseDao;

@Service
public class UserTalkbizImpl implements UserTalkbiz {

	private  BaseDao bd;
	
	@Resource(name="baseDaoMybatisImpl")
	public void setBd(BaseDao bd) {
		this.bd = bd;
	}
=======
import org.springframework.stereotype.Service;

import com.yc.biz.UserTalkbiz;
@Service
public class UserTalkbizImpl implements UserTalkbiz {

>>>>>>> f36a3cf5ef558ccaca2a3c75466ba37b65dcaa9e
}
