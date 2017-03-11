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
	
	//查询所有用户
	List<User> findUser();
	
	//根据id查询用户
	List<User> findUserById(int id);
	
	//分页查询用户
	List<User> findUserByPage(int start,int end);
	
	void DelUser(int id);
}
