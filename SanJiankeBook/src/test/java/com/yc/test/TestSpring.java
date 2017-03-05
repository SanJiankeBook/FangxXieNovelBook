package com.yc.test;


import java.sql.SQLException;
import java.util.List;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import com.yc.bean.NovelType;
import com.yc.biz.impl.NovelTypebizImpl;

import junit.framework.TestCase;

public class TestSpring extends TestCase {
	
	public void testCache() throws SQLException
	{
		ApplicationContext ac=new ClassPathXmlApplicationContext("beans.xml");
		System.out.println(ac.getBean("novelController"));
		
	}
	
	
	public void testCache1() {
		ApplicationContext ac = new ClassPathXmlApplicationContext("beans.xml");
		 Object obj=ac.getBean("sqlSessionFactory");
		System.out.println(obj);
	}
	
	
	public void testCache2() {
		ApplicationContext ac = new ClassPathXmlApplicationContext("beans.xml");
		 Object obj=ac.getBean("dataSource");
		System.out.println(obj);
	}
	

	
	public void testCache3() {
		NovelType n = new NovelType();
		n.setTid(2);
		ApplicationContext ac = new ClassPathXmlApplicationContext("beans.xml");
		NovelTypebizImpl sb =   (NovelTypebizImpl) ac.getBean("hotbizImpl");
		//System.out.println(sb);
		//System.out.println(sb);
		List list=sb.showType(n);
		System.out.println(list);
	}
	
	
}
