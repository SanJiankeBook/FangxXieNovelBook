package com.yc.biz;

import java.util.List;

import com.yc.bean.Author;

public interface Authorbiz {
	//注册成为作家
	public void insertAuthor(Object obj);
	
	//查找作家
	List<Author> FindAuthor();
	
	//删除作家
	void DelAuthor(int id);
}
