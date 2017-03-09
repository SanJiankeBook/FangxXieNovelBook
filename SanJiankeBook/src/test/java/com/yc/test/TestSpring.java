package com.yc.test;


import java.sql.SQLException;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.sql.DataSource;

import org.apache.ibatis.session.SqlSessionFactory;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.yc.bean.User;
import com.yc.dao.BaseDao;


import junit.framework.TestCase;

public class TestSpring extends TestCase {
	
	public void testCache() throws SQLException
	{
		ApplicationContext ac=new ClassPathXmlApplicationContext("beans.xml");
		System.out.println(ac.getBean("novelController"));
		
	}
	
	public void testApp(){
		ApplicationContext ac=new ClassPathXmlApplicationContext("beans.xml");
		User use=new User();
		use.setUname("龙傲天");
		use.setU_number("1");
		use.setUpassword("a");
		use.setUsex("男");
		
	}
}
