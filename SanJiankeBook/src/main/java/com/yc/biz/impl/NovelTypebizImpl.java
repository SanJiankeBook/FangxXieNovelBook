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
	public BaseDao get(){
		return this.bd;
	}
	
	@Override
	public List showType( Object object) {
		List list=bd.findAll(object, "getAllType");
		return list;
	}

}
