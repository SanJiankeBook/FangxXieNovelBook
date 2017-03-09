package com.yc.biz.impl;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.yc.bean.User;
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
	@Override
	public void save(User use) {
		this.bd.add(new User(), "saveUser");
		
	}
	
	@Override
	public List<User> userLogin(String uname, String upassword) {
		User use=new User();
		use.setUname(uname);
		use.setUpassword(upassword);
		List<User> list=this.bd.findAll(use, "userLogin");
		return list;
	}
}
