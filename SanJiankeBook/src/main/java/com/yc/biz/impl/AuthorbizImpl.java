package com.yc.biz.impl;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.yc.bean.Author;
import com.yc.biz.Authorbiz;
import com.yc.dao.BaseDao;
@Service
public class AuthorbizImpl implements Authorbiz {
private  BaseDao bd;
	
	@Resource(name="baseDaoMybatisImpl")
	public void setBd(BaseDao bd) {
		this.bd = bd;
	}
	
	//注册成为作家
	@Override
	public void insertAuthor(Object obj) {
		this.bd.add(obj, "addAuthor");
	}

	//查找作家
	@Override
	public List<Author> FindAuthor() {
		List<Author> list=this.bd.findAll(new Author(), "findAllAuthor");
		return list;
	}

	@Override
	public void DelAuthor(int aid) {
		Author author=new Author();
		author.setAid(aid);
		this.bd.delete(author, "delAuthor");
	}
}
