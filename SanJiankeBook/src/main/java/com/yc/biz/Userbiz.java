package com.yc.biz;

import java.util.List;

import com.yc.bean.User;

public interface Userbiz {
	//注册成为用户需要一个id号
	public Integer InsertUser(Object obj);
	//注册用户
	void save(User use);
	
	//用户登录
	List<User> userLogin(String uname, String upassword);
	
}
