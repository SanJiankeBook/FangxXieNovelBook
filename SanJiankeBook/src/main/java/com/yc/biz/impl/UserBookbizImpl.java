package com.yc.biz.impl;
import javax.annotation.Resource;
import org.springframework.stereotype.Service;

import com.yc.bean.UserBook;
import com.yc.biz.UserBookbiz;
import com.yc.dao.BaseDao;

@Service
public class UserBookbizImpl implements UserBookbiz {
private  BaseDao bd;
	@Resource(name="baseDaoMybatisImpl")

	public void setBd(BaseDao bd) {
		this.bd = bd;
	}
	
	//根据用户id查询书架
	@Override
	public void finduserbook(UserBook ub) {
		this.bd.findAll(ub, "finduserbookByUid");
	}
}
