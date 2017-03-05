package com.yc.web.controller;

import java.io.IOException;

import java.io.InputStream;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Map.Entry;
import java.util.Properties;
import javax.annotation.Resource;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import com.google.gson.Gson;
import com.yc.bean.Author;
import com.yc.bean.User;
import com.yc.biz.Authorbiz;
import com.yc.biz.Userbiz;
import com.yc.dao.BaseDao;

@Controller
public class NovelController {
    private static final Log logger=LogFactory.getLog(NovelController.class);
    private Authorbiz authorbiz;
    private Userbiz userbiz;
    
    @Resource(name="authorbizImpl")
    public void setAuthorbiz(Authorbiz authorbiz) {
		this.authorbiz = authorbiz;
	}
    @Resource(name="userbizImpl")
	public void setUser(Userbiz userbiz) {
		this.userbiz = userbiz;
	}


	//跳转到前台
    @RequestMapping(value="/toindex")
	public String Index(){
    	logger.info("toIndex.....");
    	return "index";
    }
    
    //搜索
    @RequestMapping(value="/tosousuo")
    public String sousuo(){
    	logger.info("tosousuo.....");
    	//这个功能并没有从数据库中拿数据
    	return "findnovel";
    }
    
    //前往作家注册页面
    @RequestMapping(value="/toauthor")
    public String author(){
    	logger.info("toauthor.....");
    	return "author";
    }
    //注册成为作家
    @RequestMapping(value="/registauthor")
    public String registauthor(Author author,User user){
    	logger.info("registauthor.....");
    	author.setPan_name(user.getUname());
    	//需要先注册成为一个用户
    	this.userbiz.InsertUser(user);
    	author.setUid(user.getUid());
    	//在注册成为一个作家
    	this.authorbiz.insertAuthor(author);
    	return "creatnovel";
    }
    @RequestMapping(value="/test")
    public String test(){
    	logger.info("test....");
    	return "creatnovel";
    }
    
 
   
}
