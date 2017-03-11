package com.yc.test;


import java.sql.SQLException;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.sql.DataSource;

import org.apache.ibatis.session.SqlSessionFactory;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.yc.bean.Novel;
import com.yc.bean.User;
import com.yc.biz.Novelbiz;
import com.yc.biz.Userbiz;
import com.yc.dao.BaseDao;


import junit.framework.TestCase;

public class TestSpring extends TestCase {
	
	public void testCache() throws SQLException
	{
		ApplicationContext ac=new ClassPathXmlApplicationContext("beans.xml");
		System.out.println(ac.getBean("novelController"));
		
		
	}
	
	public void TestApp(){
		ApplicationContext ac = new ClassPathXmlApplicationContext( "beans.xml" );
		Userbiz ub=ac.getBean("userbizImpl",Userbiz.class);
		List<User> list=ub.findUser();
		for(User u:list){
			System.out.println(u);
		}
	}
	
	public void TestApp1(){
		ApplicationContext ac = new ClassPathXmlApplicationContext( "beans.xml" );
		Novelbiz nb=ac.getBean("novelbizImpl",Novelbiz.class);
		List<Novel> list=nb.FindAllNovel();
		for(Novel n:list){
			System.out.println(n);
		}
	}
	
	public void TestApp2(){
		ApplicationContext ac = new ClassPathXmlApplicationContext( "beans.xml" );
		Userbiz ub=ac.getBean("userbizImpl",Userbiz.class);
		List<User> list=ub.findUserByPage(0, 5);
		for(User n:list){
			System.out.println(n);
		}
	}
}
