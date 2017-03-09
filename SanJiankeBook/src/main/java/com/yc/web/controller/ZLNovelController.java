package com.yc.web.controller;

import java.util.List;
import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import com.yc.bean.User;
import com.yc.biz.Userbiz;

@Controller
public class ZLNovelController {
    private static final Log logger=LogFactory.getLog(ZLNovelController.class);

    private Userbiz userbiz;
    
    
    @Resource(name="userbizImpl")
    public void setUserbiz(Userbiz userbiz) {
		this.userbiz = userbiz;
	}

    //用户注册
    	//TODO:有问题
    @RequestMapping(value="/toSave")
    public String addUser(User use){
    	logger.info("addUser called...");
    	this.userbiz.save(use);
		return "index";
    }
    
    //用户登录
    @RequestMapping(value="/userLogin")
    public String userLogin(@RequestParam(value="uname") String uname,@RequestParam(value="upassword") String upassword,HttpServletRequest req){
    	logger.info("this is the userLogin.....");
    	
    	List<User> list= this.userbiz.userLogin(uname, upassword);
    	
    	// TODO:将404页面显示成弹出提示框"用户名或密码错误",再完善一下,
    	if(!list.isEmpty()){
    		//若用户存在,存到session中
    		req.getSession().setAttribute("uname",uname);
    		return "index";
    	}else if(list.isEmpty()){
    		return "404";
    	}else{
    		return "";
    	}
    	
    }
    
 
}
