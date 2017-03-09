package com.yc.biz.impl;

import java.util.List;

import javax.annotation.Resource;

import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Service;

import com.yc.bean.NovelType;
import com.yc.biz.NovelTypebiz;
import com.yc.dao.BaseDao;

@Service
public class NovelTypebizImpl implements NovelTypebiz {

	private  BaseDao bd;
	
	@Resource(name="baseDaoMybatisImpl")
	public void setBd(BaseDao bd) {
		this.bd = bd;
	}
	
	@Override
	public List showType( Object object) {
		//System.out.println("showType");
		List list=bd.findAll(object, "getAllType");
		//System.out.println(bd.findAll(object, "getAllType"));
		//System.out.println(list+"输出");
		return list;
	}
	
	//	//获取所有的书本类型，包括id，名字
	@Override
	public List<Object> AllNovelType(Object obj) {
		List<Object> list=bd.findAll(obj, "getAllNovelType");
		return list;
	}

}
