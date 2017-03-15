package com.yc.biz.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import org.springframework.stereotype.Service;
import com.yc.bean.Author;
import com.yc.bean.Novel;
import com.yc.biz.Authorbiz;
import com.yc.dao.BaseDao;
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

	//删除作家
	@Override
	public void DelAuthor(int aid) {
		Author author=new Author();
		author.setAid(aid);
		this.bd.delete(author, "delAuthor");
	}

	@Override
	public List<Author> FindAuthorByPage(Integer start,Integer end) {
		Map<String,Integer> map=new HashMap<String,Integer>();
		map.put("start", start);
		map.put("end", end);
		List<Author> list=this.bd.findAll(new Author(), map, "findAuthorByPage");
		return list;
	}

}
