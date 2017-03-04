package com.yc.biz.impl;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.yc.bean.NovelType;
import com.yc.biz.Hotbiz;
import com.yc.dao.BaseDao;

@Service
public class HotbizImpl implements Hotbiz {

	private  BaseDao bd;
	
	@Resource(name="baseDaoImpl")
	public void setBd(BaseDao bd) {
		this.bd = bd;
	}
	
	@Override
	public List showType(NovelType noveltype) {
		List list=bd.findAll(noveltype, "getAllType");
		return list;
	}

}
