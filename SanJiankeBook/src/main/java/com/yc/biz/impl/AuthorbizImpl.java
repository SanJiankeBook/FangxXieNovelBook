package com.yc.biz.impl;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.yc.bean.Author;
import com.yc.bean.Novel;
import com.yc.biz.Authorbiz;
import com.yc.dao.BaseDao;

@Service
public class AuthorbizImpl implements Authorbiz {
	private  BaseDao bd;
	
	@Resource(name="baseDaoMybatisImpl")
	public void setBd(BaseDao bd) {
		this.bd = bd;
	}

	@Override
	public List Show_Author(int nid) {
		Novel novel=new Novel();
		novel.setNid(nid);
		List list=bd.findAll(novel, "idgetauthor");
		return list;
	}
	
}
