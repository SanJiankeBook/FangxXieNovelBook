package com.yc.biz.impl;

<<<<<<< HEAD
=======
import java.util.List;

>>>>>>> f36a3cf5ef558ccaca2a3c75466ba37b65dcaa9e
import javax.annotation.Resource;

import org.springframework.stereotype.Service;

<<<<<<< HEAD
import com.yc.biz.Userbiz;
import com.yc.dao.BaseDao;

=======
import com.yc.bean.User;
import com.yc.biz.Userbiz;
import com.yc.dao.BaseDao;
>>>>>>> f36a3cf5ef558ccaca2a3c75466ba37b65dcaa9e
@Service
public class UserbizImpl implements Userbiz {
private  BaseDao bd;
	
	@Resource(name="baseDaoMybatisImpl")
	public void setBd(BaseDao bd) {
		this.bd = bd;
	}
<<<<<<< HEAD
=======
	//注册成为用户
	@Override
	public Integer InsertUser(Object obj) {
		Integer uid=this.bd.add1(obj, "addUser");
		return uid;
	}
	@Override
	public void save(User use) {
		this.bd.add(use, "addUser");
		
	}
	
	@Override
	public List<User> userLogin(String uname, String upassword) {
		User use=new User();
		use.setUname(uname);
		use.setUpassword(upassword);
		List<User> list=this.bd.findAll(use, "userLogin");
		return list;
	}
	
	/**
	 * 查询所有用户
	 */
	@Override
	public List<User> findUser() {
		List<User> list=this.bd.findAll(new User(), "findAllUser");
		return list;
	}
	
	/**
	 * 根据id查询用户
	 */
	@Override
	public List<User> findUserById(int id) {
		return null;
	}
	
	/**
	 * 分页查询用户
	 */
	@Override
	public List<User> findUserByPage(int start,int end) {
		List<User> list=this.bd.findAll(new User(), "findUserByPage");
		return list;
	}
	
	/**
	 * 删除用户
	 */
	@Override
	public void DelUser(int id) {
		User use=new User();
		use.setUid(id);
		this.bd.delete(use, "delUser");
	}
>>>>>>> f36a3cf5ef558ccaca2a3c75466ba37b65dcaa9e
}
