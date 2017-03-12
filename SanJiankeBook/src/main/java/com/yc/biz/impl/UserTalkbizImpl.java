package com.yc.biz.impl;


import javax.annotation.Resource;
import org.springframework.stereotype.Service;
import com.yc.biz.UserTalkbiz;
import com.yc.dao.BaseDao;
import org.springframework.stereotype.Service;
import com.yc.biz.UserTalkbiz;


@Service
public class UserTalkbizImpl implements UserTalkbiz {
	private  BaseDao bd;
	@Resource(name="baseDaoMybatisImpl")
	public void setBd(BaseDao bd) {
		this.bd = bd;
	}
}
