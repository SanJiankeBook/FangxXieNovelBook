package com.yc.web.controller;

import java.io.UnsupportedEncodingException;
import java.util.List;
import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.google.gson.Gson;
import com.yc.bean.Admin;
import com.yc.bean.Author;
import com.yc.bean.EasyuiFindByPage;
import com.yc.bean.Novel;
import com.yc.bean.User;
import com.yc.biz.Adminbiz;
import com.yc.biz.Authorbiz;
import com.yc.biz.Novelbiz;
import com.yc.biz.Userbiz;

@Controller
public class ZLNovelController {
    private static final Log logger=LogFactory.getLog(ZLNovelController.class);

    private Userbiz userbiz;
    private Adminbiz adminbiz;
    private Authorbiz authorbiz;
    private Novelbiz novelbiz;
    
    @Resource(name="novelbizImpl")
    public void setNovelbiz(Novelbiz novelbiz) {
		this.novelbiz = novelbiz;
	}

	@Resource(name="userbizImpl")
    public void setUserbiz(Userbiz userbiz) {
		this.userbiz = userbiz;
	}
    
    @Resource(name="adminbizImpl")
    public void setAdminbiz(Adminbiz adminbiz) {
		this.adminbiz = adminbiz;
	}
    
    @Resource(name="authorbizImpl")
	public void setAuthorbiz(Authorbiz authorbiz) {
		this.authorbiz = authorbiz;
	}

	//用户注册
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
    
//后台管理员模块------------------------------------------------------------------------------
   /**
    * 管理员登录
    * @param adnumber    编号
    * @param adpassword   密码
    * @param req
    * @return
    */
    @RequestMapping(value="adminLogin")
    public String BackIndex(@RequestParam(value="adnumber") String adnumber,@RequestParam(value="adpassword") String adpassword,HttpServletRequest req){
		logger.info("this is backLogin .......");
		
		List<Admin> list=this.adminbiz.adminLogin(adnumber, adpassword);
		
		if(!list.isEmpty()){
			return "../../back/BackIndex";
		}else if(list.isEmpty()){
			return "404";
		}else{
			return null;
		}
    }
    
    
    /**
     * 查找所有用户
     * 因为在controller中返回json用了@ResponseBody，而spring源码中@ResponseBody 的实现类发现其默认的编码是 iso-8859-1，
	 * 而项目用的编码为utf-8,所以传中文会出现乱码。
	 * 加produces = {"application/text;charset=UTF-8"}解决中文乱码的问题
     */
    @RequestMapping(value="/findAllUser",produces = {"application/text;charset=UTF-8"})
    public @ResponseBody String FindUser() throws UnsupportedEncodingException{
    	logger.info("this is findAllUser.....");
    	List<User> list=this.userbiz.findUser();
    	Gson gson=new Gson();
    	return gson.toJson(list);
    }
    
    /**
     * 分页查询用户
     */
    @RequestMapping(value="/findAllUserByPage",produces = {"application/text;charset=UTF-8"})
    public @ResponseBody String FindUserByPage(HttpServletRequest request) throws UnsupportedEncodingException{
    	logger.info("this is findAllUser.....");
    	String page=request.getParameter("page");    
    	String rows=request.getParameter("rows");
    	int currentPage=Integer.parseInt(page);     //当前的页数
    	int end=Integer.parseInt(rows);           //每页的条数
    	int start=0;
    	start=(currentPage-1)*end;
    	List<User> list=this.userbiz.findUserByPage(start, end);
    	//request.setAttribute("list", list);
    	EasyuiFindByPage ebp=new EasyuiFindByPage();
    	ebp.setTotal(list.size());
    	ebp.setRows(list);
    	Gson gson=new Gson();
		return gson.toJson(ebp);
    	
    }
    
    /**
     * 删除用户
     * @param id
     * @return
     */
    @RequestMapping(value="/delUser")
    public @ResponseBody void DelUser(int uid){
    	logger.info("this is easyUI delUser.....");
    	this.userbiz.DelUser(uid);
    } 
    
    /**
     * 查找作者
     */
    @RequestMapping(value="/findAllAuthor",produces = {"application/text;charset=UTF-8"})
    public @ResponseBody String FindAuthor(){
    	logger.info("this is findAllAuthor.....");
    	List<Author> list=this.authorbiz.FindAuthor();
    	Gson gson=new Gson();
		return gson.toJson(list);
    	
    }
    
    /**
     * 删除作者
     */
    @RequestMapping(value="/delAuthor")
    public @ResponseBody void DelAuthor(int aid){
    	logger.info("this is DelAuthor.....");
    	this.authorbiz.DelAuthor(aid);
    }
    
    /**
     * 查找小说
     */
    @RequestMapping(value="/findAllNovel",produces = {"application/text;charset=UTF-8"})
    public @ResponseBody String FindNovel(){
    	logger.info("this is findAllNovel.....");
    	List<Novel> list=this.novelbiz.FindAllNovel();
    	Gson gson=new Gson();
    	return gson.toJson(list);
    } 
    
    /**
     * 删除小说
     * @param nid
     */
    @RequestMapping(value="/delNovel")
    public @ResponseBody void DelNovel(int nid){
    	logger.info("this is delNovel.....");
    	this.novelbiz.delNovel(nid);
    }
    
   
    
    
}
