package com.yc.test;


import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.yc.bean.Author;
import com.yc.bean.Novel;
import com.yc.bean.NovelType;
import com.yc.biz.Authorbiz;
import com.yc.biz.NovelChapterbiz;
import com.yc.biz.NovelTypebiz;
import com.yc.biz.Novelbiz;
import com.yc.utils.RedisUtil;
import com.yc.bean.User;
import com.yc.biz.Userbiz;



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
		NovelTypebiz sb =   (NovelTypebiz) ac.getBean("novelTypebizImpl");
		List list=sb.showType(n);
		System.out.println(list);
	}
	
	
	public void testCache4() {
		ApplicationContext ac = new ClassPathXmlApplicationContext("beans.xml");
		Novelbiz sb =   (Novelbiz) ac.getBean("novelbizImpl");
		List list=sb.ShowNovel();
		System.out.println(list);
	}
	
	
	
	public void testCache5() {
		ApplicationContext ac = new ClassPathXmlApplicationContext("beans.xml");
		Authorbiz sb =   (Authorbiz) ac.getBean("authorbizImpl");
		List list=sb.Show_Author(1);
		System.out.println(list);
	}
	
	
	public void testCache6() {
		ApplicationContext ac = new ClassPathXmlApplicationContext("beans.xml");
		Novelbiz sb =   (Novelbiz) ac.getBean("novelbizImpl");
		List list=sb.TypeNovel("修仙");
		System.out.println(list);
	}
	
	//排行榜测试
	public void testCache7(){
		ApplicationContext ac = new ClassPathXmlApplicationContext("beans.xml");
		RedisUtil redis=(RedisUtil) ac.getBean("redisUtil");
		for(int i=0;i<10;i++){
			redis.Ranking("nihao");
		}
		
		for(int i=0;i<4;i++){
			redis.Ranking("nihao123");
		}
		
		for(int i=0;i<20;i++){
			redis.Ranking("gun");
		}

		Set<String> set =redis.ShowRankNum();
		List<String> list=new ArrayList<String>(set);
		System.out.println(list+" --- List是什么");
		list.get(0);
		redis.ShowRank(list.get(0));
//		String[] st=new String[set.size()];
//		int j=0;
//		for(Iterator  iter=redis.ShowRankNum().iterator();;iter.hasNext()){
//			st[j]=(String) iter.next();
//			System.out.println(st[j]+"是什么");
//			redis.ShowRank(st[j]);
//		}
		
	}
	
	
	public void testCache8() {
		ApplicationContext ac = new ClassPathXmlApplicationContext("beans.xml");
		NovelChapterbiz sb =   (NovelChapterbiz) ac.getBean("novelChapterbizImpl");
		List list=sb.ShowAllChapter(1);
		System.out.println(list);
	}
	
	
	public void testCache9() {
		ApplicationContext ac = new ClassPathXmlApplicationContext("beans.xml");
		Novelbiz sb =   (Novelbiz) ac.getBean("novelbizImpl");
		List list=sb.NameFindNovel("你的名字");
		System.out.println(list);
	}
	
	public void testCache10() {
		ApplicationContext ac = new ClassPathXmlApplicationContext("beans.xml");
		Userbiz sb =   (Userbiz) ac.getBean("userbizImpl");
		List list=sb.findUserName("469058237");
		System.out.println(list);
	}
	
	
	public void testCache11() {
		ApplicationContext ac = new ClassPathXmlApplicationContext("beans.xml");
		Authorbiz sb =   (Authorbiz) ac.getBean("authorbizImpl");
		List list=sb.inforByunumber(1);
		System.out.println(list);
	}
	
	public void testCache12() {
		ApplicationContext ac = new ClassPathXmlApplicationContext("beans.xml");
		Authorbiz sb =   (Authorbiz) ac.getBean("authorbizImpl");
		List<Novel> list=sb.inforByaid(1);
		System.out.println(list);
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
