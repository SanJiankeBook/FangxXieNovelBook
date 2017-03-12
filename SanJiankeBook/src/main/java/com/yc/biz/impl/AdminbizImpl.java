package com.yc.biz.impl;

<<<<<<< HEAD
=======
import java.util.List;

>>>>>>> f36a3cf5ef558ccaca2a3c75466ba37b65dcaa9e
import javax.annotation.Resource;

import org.springframework.stereotype.Service;

<<<<<<< HEAD
import com.yc.biz.Adminbiz;
import com.yc.dao.BaseDao;

=======
import com.yc.bean.Admin;
import com.yc.biz.Adminbiz;
import com.yc.dao.BaseDao;
>>>>>>> f36a3cf5ef558ccaca2a3c75466ba37b65dcaa9e
@Service
public class AdminbizImpl implements Adminbiz {
private  BaseDao bd;
	
	@Resource(name="baseDaoMybatisImpl")
	public void setBd(BaseDao bd) {
		this.bd = bd;
	}
<<<<<<< HEAD
=======

	
	//管理员登录
	@Override
	public List<Admin> adminLogin(String adnumber, String adpassword) {
		Admin admin=new Admin();
		admin.setAdnumber(adnumber);
		admin.setAdpassword(adpassword);
		List<Admin> list=this.bd.findAll(admin, "adminLogin");
		return list;
	}
>>>>>>> f36a3cf5ef558ccaca2a3c75466ba37b65dcaa9e
}
