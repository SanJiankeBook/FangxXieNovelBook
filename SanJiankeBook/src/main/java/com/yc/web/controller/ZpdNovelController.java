package com.yc.web.controller;

import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.google.gson.Gson;
import com.yc.bean.Alllist;
import com.yc.bean.Author;
import com.yc.bean.Novel;
import com.yc.bean.NovelChapter;
import com.yc.bean.NovelType;
import com.yc.bean.Rank;
import com.yc.bean.User;
import com.yc.biz.Authorbiz;
import com.yc.biz.NovelChapterbiz;
import com.yc.biz.NovelTypebiz;
import com.yc.biz.Novelbiz;
import com.yc.biz.Userbiz;
import com.yc.biz.impl.AuthorbizImpl;
import com.yc.biz.impl.NovelChapterbizImpl;
import com.yc.biz.impl.NovelTypebizImpl;
import com.yc.biz.impl.NovelbizImpl;
import com.yc.duanxin.DuanxinJudge;
import com.yc.utils.RandomUtils;
import com.yc.utils.RankUtils;
import com.yc.utils.RedisUtils;
import com.yc.utils.TNovelUtils;

@Controller
public class ZpdNovelController {

	private static final Log logger = LogFactory.getLog(NovelController.class);

	private Authorbiz authorbiz;
	private Userbiz userbiz;
	private NovelTypebiz noveltypebiz;
	private Novelbiz novelbiz;
	private NovelChapterbiz novelchapterbiz;
	private NovelType noveltype;
	private Novel novel;
	private NovelTypebizImpl novelTypebizImpl;
	private NovelbizImpl novelbizImpl;
	private AuthorbizImpl authorbizImpl;
	private NovelChapterbizImpl novelChapterbizImpl;
	private RankUtils rutils;
	private TNovelUtils tNovelUtils;
	private RandomUtils randomUtils;

	
	@Resource(name = "tNovelUtils")
	public void settNovelUtils(TNovelUtils tNovelUtils) {
		//System.out.println("注入了tNovelUtils");
		this.tNovelUtils = tNovelUtils;
	}
	@Resource(name = "randomUtils")
	public void setRandomUtils(RandomUtils randomUtils) {
		this.randomUtils = randomUtils;
	}

	@Resource(name = "rankUtils")
	public void setRk(RankUtils rutils) {
		this.rutils = rutils;
	}

	@Resource(name = "novelChapterbizImpl")
	public void setNovelchapterbiz(NovelChapterbiz novelchapterbiz) {
		this.novelchapterbiz = novelchapterbiz;
	}

	@Resource(name = "novelbizImpl")
	public void setNovelbiz(Novelbiz novelbiz) {
		this.novelbiz = novelbiz;
	}

	@Resource(name = "novelTypebizImpl")
	public void setNoveltypebiz(NovelTypebiz noveltypebiz) {
		this.noveltypebiz = noveltypebiz;
	}

	@Resource(name = "authorbizImpl")
	public void setAuthorbiz(Authorbiz authorbiz) {
		this.authorbiz = authorbiz;
	}

	@Resource(name = "userbizImpl")
	public void setUser(Userbiz userbiz) {
		this.userbiz = userbiz;
	}

	@Resource(name = "novel")
	public void setNovel(Novel novel) {
		this.novel = novel;
	}

	@Resource(name = "novelType")
	public void setNoveltype(NovelType noveltype) {
		this.noveltype = noveltype;
	}

	@Resource(name = "novelbizImpl")
	public void setNovelbizImpl(NovelbizImpl novelbizImpl) {
		this.novelbizImpl = novelbizImpl;
	}

	@Resource(name = "novelTypebizImpl")
	public void setNovelTypebizImpl(NovelTypebizImpl novelTypebizImpl) {
		this.novelTypebizImpl = novelTypebizImpl;
	}

	@Resource(name = "authorbizImpl")
	public void setAuthorbizImpl(AuthorbizImpl authorbizImpl) {
		this.authorbizImpl = authorbizImpl;
	}

	@Resource(name = "novelChapterbizImpl")
	public void setNovelChapterbizImpl(NovelChapterbizImpl novelChapterbizImpl) {
		this.novelChapterbizImpl = novelChapterbizImpl;
	}

	// 主页面显示数据
	@RequestMapping(value = "/toindex_zpd")
	public String Index(Model model,HttpServletRequest request) {
		logger.info("toIndex.....");
		List<NovelType> list = novelTypebizImpl.showType(noveltype); // 小说类型
		List<Novel> novel = novelbizImpl.ShowNovel(); // 小说信息

		// 根据类型显示所有的小说信息
		for (int tnum = 0; tnum < list.size(); tnum++) {
			String tyname = list.get(tnum).getTname(); // 每种类型下的小说名
			List<Alllist> Alllist = new ArrayList<Alllist>(); // 整合小说id-小说名 -作者名
			List<Alllist> Alllist1 = new ArrayList<Alllist>();
			List<Alllist> Alllist2 = new ArrayList<Alllist>();
			List<Alllist> Alllist3 = new ArrayList<Alllist>();
			List<Alllist> Alllist4 = new ArrayList<Alllist>();
			List<Alllist> Alllist5 = new ArrayList<Alllist>();
			switch (tnum) {
			case 0:
				Alllist = tNovelUtils.ListNovel(tyname);

				model.addAttribute("Alllist", Alllist);
				break;

			case 1:
				Alllist1 = tNovelUtils.ListNovel(tyname);
				model.addAttribute("Alllist1", Alllist1);
				break;

			case 2:
				Alllist2 = tNovelUtils.ListNovel(tyname);

				model.addAttribute("Alllist2", Alllist2);
				break;

			case 3:
				Alllist3 = tNovelUtils.ListNovel(tyname);

				model.addAttribute("Alllist3", Alllist3);
				break;

			case 4:
				Alllist4 = tNovelUtils.ListNovel(tyname);

				model.addAttribute("Alllist4", Alllist4);
				break;

			case 5:
				Alllist5 = tNovelUtils.ListNovel(tyname);

				model.addAttribute("Alllist5", Alllist5);
				break;

			}
		}

		model.addAttribute("list", list);
		model.addAttribute("novel", novel);

		// 根据点击数最高的显示小说信息
		for (int r = 0; r < list.size(); r++) {
			List<Novel> n = new ArrayList<Novel>();
			List<Novel> n1 = new ArrayList<Novel>();
			List<Novel> n2 = new ArrayList<Novel>();
			List<Novel> n3 = new ArrayList<Novel>();
			List<Novel> n4 = new ArrayList<Novel>();
			List<Novel> n5 = new ArrayList<Novel>();
			List<Author> author = authorbizImpl.Show_Author(r);
			switch (r) {
			case 0:
				n = rutils.RankInformation(r);
				if (rutils.RankInformation(r) != null) {
					model.addAttribute("author", author);
					model.addAttribute("n", n);
					break;
				}
			case 1:
				n1 = rutils.RankInformation(r);
				if (rutils.RankInformation(r) != null) {
					model.addAttribute("author", author);
					model.addAttribute("n1", n1);
					break;
				}
			case 2:
				n2 = rutils.RankInformation(r);
				if (rutils.RankInformation(r) != null) {
					model.addAttribute("author", author);
					model.addAttribute("n2", n2);
					break;
				}
			case 3:
				n3 = rutils.RankInformation(r);
				if (rutils.RankInformation(r) != null) {
					model.addAttribute("author", author);
					model.addAttribute("n3", n3);
					break;
				}
			case 4:
				n4 = rutils.RankInformation(r);
				if (rutils.RankInformation(r) != null) {
					model.addAttribute("author", author);
					model.addAttribute("n4", n4);
					break;
				}
			case 5:
				n5 = rutils.RankInformation(r);
				if (rutils.RankInformation(r) != null) {
					model.addAttribute("author", author);
					model.addAttribute("n5", n5);
					break;
				}
			}
		}
		
		return "index";
	}
	
	// 显示小说的页面
	@RequestMapping(value = "/toindex_id/{nid}")
	public String Index_id(@PathVariable int nid, Model model) {
		List<NovelType> list1 = novelTypebizImpl.showType(noveltype); // 小说类型
		List list = new ArrayList();
		logger.info("toIndex.....");
		list = novelbizImpl.ShowNovel_id(nid);
		List author = authorbizImpl.Show_Author(nid);
		List chapter = novelChapterbizImpl.NewChapter(nid);
		List<NovelChapter> nchapter = novelChapterbizImpl.ShowAllChapter(nid);
		// System.out.println(list+"=你是什么");
		// System.out.println(author+"=输出作者");
		model.addAttribute("nchapter", nchapter);
		model.addAttribute("novel_id", list);
		model.addAttribute("author", author);
		model.addAttribute("chapter", chapter);
		model.addAttribute("list1",list1);
		// System.out.println(list);

		/*
		 * 排行榜
		 */
		Novel nname = (Novel) list.get(0);
		String name = nname.getNname();
		RedisUtils redis = new RedisUtils();
		redis.Ranking(name);

		return "Novel2";
	}

	//检查是否登陆
	@RequestMapping(value="/checkloging",produces = {"application/text;charset=UTF-8"})
	@ResponseBody
	public String checkloging(HttpServletRequest request){
		Gson gson=new Gson();
		if(request.getSession().getAttribute("users")!=null){
			User user=(User) request.getSession().getAttribute("users");
			user.setStatus("1");
			return gson.toJson(user);
		}else{
			User user=new User();
			user.setStatus("-1");
			return gson.toJson(user);
		}
	}
		
	//登录验证
	@RequestMapping(value="/logger",produces = {"application/text;charset=UTF-8"})
	@ResponseBody
	public String logger(HttpServletRequest request,Model model) {
		logger.info("AuthorPrefecture.......");
		User user=new User();
		Gson gson=new Gson();
		HttpSession session = request.getSession();
		String validateCode=request.getParameter("validateCode");
		if(validateCode!=null &&validateCode!=""){
			String randCode=(String) session.getAttribute("rand");
			if(!validateCode.equals(randCode)){
				session.setAttribute("errmsg", "验证码错误");
				user.setStatus("-2");
				return gson.toJson(user);
			}
		}
			//Map<String,Object> map = new HashMap<String,Object>(); 
			String uname=request.getParameter("uname");
			String upassword=request.getParameter("upassword");
			List<User> list=userbiz.findUserName(uname);
			
			if(uname!="" || uname!=null && upassword!="" || upassword!=null){
				if(!list.isEmpty()){
					if(uname.equals(list.get(0).getU_number()) && upassword.equals(list.get(0).getUpassword())){
						Integer uuid=list.get(0).getUid();
						
						user.setUname(list.get(0).getUname());
						user.setUid(list.get(0).getUid());
						user.setU_number(list.get(0).getU_number());
						user.setUpassword(upassword);
						user.setStatus("1");
						session.setAttribute("users",user);
						return gson.toJson(user);	
					}
					user.setStatus("-1");
					return gson.toJson(user);
				}else{
					user.setStatus("-1");
					return  gson.toJson(user);
				}		
				//return "index";
			}else{
				user.setStatus("-1");
				return  gson.toJson(user);
			}
//		}else{
//			user.setStatus("-2");
//			return gson.toJson(user);
//		}
	
			
	}
	
	//前往用户信息页面
	@RequestMapping(value="/showUser")
	public String showUser(Model model,HttpServletRequest request){
		List<NovelType> list1 = novelTypebizImpl.showType(noveltype); // 小说类型
		model.addAttribute("list1",list1);
		if(request.getSession().getAttribute("users")!=null){
			User user=(User) request.getSession().getAttribute("users");
			List<User> listuser=this.userbiz.findUserInfo(user);
			model.addAttribute("listuser",listuser);
		}else{
			return "userlogin";
		}
		return "showuserinfo";
	}
	
	
	//用户忘记密码
	@RequestMapping(value="/forgivepasswordUname")
	@ResponseBody
	public String forgivepassword(HttpServletRequest request){
		String uname=request.getParameter("uname");
		request.getSession().setAttribute("forgiveUser", uname);
		System.out.println(uname);
		return "1";
		
	}
	//发送验证码
	@RequestMapping(value="sendcode")
	@ResponseBody
	public String sendcode(HttpServletRequest request){
		logger.info("sendcode.....");
		String standby_1=request.getParameter("standby_1");
		if(request.getSession().getAttribute("forgiveUser")==null){
			return "toindex_zpd";
		}else{
			String val=(String) request.getSession().getAttribute("forgiveUser");
			List<User> list=userbiz.findUserName(val);
			if(list.get(0).getStandby_1().equals(standby_1)){
				Integer value=null;
				try {
					value = DuanxinJudge.sendJudgeCode(standby_1);
				} catch (Exception e) {
					e.printStackTrace();
				}
				request.getSession().setAttribute("code", value+"");
				return "1";
			}else{
				return "-2";
			}
			
		
	}
}
	//判断用户忘记密码的验证码是否正确
	@RequestMapping(value="/judgecode")
	@ResponseBody
	public String judgecode(HttpServletRequest request){
		logger.info("judgecode....");
		String number=request.getParameter("number");
		if(request.getSession().getAttribute("code")==null){
			return "-1";
		}else{
			if(number.equals(request.getSession().getAttribute("code"))){
				return "1";
			}else{
				return "0";
			}
		}
		
		
	}
	//用户信息修改
	@RequestMapping(value="/updateUserInfo")
	@ResponseBody
	public String updateUserInfo(HttpServletRequest request){
		logger.info("updateUserInfo....");
		String uname=request.getParameter("uname");
		String usex_2=request.getParameter("usex_2");
		String standby_1=request.getParameter("standby_1");
		if(request.getSession().getAttribute("users")!=null){
			User user=(User) request.getSession().getAttribute("users");
			user.setUname(uname);
			List<User> list_uname=this.userbiz.findUserInfo(user);
			if(!list_uname.isEmpty()){
				int num1=list_uname.get(0).getUid();
				int num2=user.getUid();
				if(num1!=num2){
					return "0";
				}
			}
			user.setStandby_1(standby_1);
			user.setUsex(usex_2);
			this.userbiz.updateUserInfo(user);
			return "1";
		}else{
			return "-1";
		}
		
	}
	//修改用户密码已经有原密码
	@RequestMapping(value="/updatePasswordInfo")
	@ResponseBody
	public String updatePasswordInfo(HttpServletRequest request){
		logger.info("updatePasswordInfo....");
		String xinupassword=request.getParameter("xinupassword");
		String upassword=request.getParameter("upassword");
		
		if(request.getSession().getAttribute("users")!=null){
			User user=(User) request.getSession().getAttribute("users");
			if(user.getUpassword().equals(upassword)){//如果输入的原密码和数据库的密码一样
				user.setUpassword(xinupassword);
				this.userbiz.updateUser(user);
				return "1";
			}else{
				return "0";
			}
			
		}else{
			return "-1";
		}
		
	}
	//修改用户密码
	@RequestMapping(value="/updatepassword")
	@ResponseBody
	public String updatepassword(HttpServletRequest request){
		logger.info("updatepassword....");
		try {
			String xinpassword=request.getParameter("xinpassword");
			String val=(String) request.getSession().getAttribute("forgiveUser");
			request.getSession().removeAttribute("forgiveUser");
			request.getSession().removeAttribute("code");
			User user=new User();
			user.setUpassword(xinpassword);
			user.setU_number(val);
			this.userbiz.updateUser(user);
			return "1";
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return "0";
		}
		
		
		
	}
	//用户注册
		@RequestMapping(value="/register",produces = {"application/text;charset=UTF-8"})
		@ResponseBody
		public String register(HttpServletRequest request,Model model) {
			logger.info("register.......");
			User user=new User();
			Gson gson=new Gson();
			HttpSession session = request.getSession();
			String validateCode=request.getParameter("validateCode");
			if(validateCode!=null &&validateCode!=""){
				String randCode=(String) session.getAttribute("rand");
				if(!validateCode.equals(randCode)){
					session.setAttribute("errmsg", "验证码错误");
					user.setStatus("-2");
					return gson.toJson(user);
				}
			}
				//Map<String,Object> map = new HashMap<String,Object>(); 
				String uname=request.getParameter("uname");
				String upassword=request.getParameter("upassword");
				String u_number=request.getParameter("u_number");
				String standby_1=request.getParameter("standby_1");
				User userlist=new User();
				userlist.setU_number(u_number);
				
				List<User> list_uname=this.userbiz.findUserInfo(userlist);
				if(!list_uname.isEmpty()){
					user.setStatus("0");
					return gson.toJson(user);
				}
				userlist.setUname(uname);
				userlist.setU_number(null);
				list_uname=this.userbiz.findUserInfo(userlist);
				if(!list_uname.isEmpty()){
					user.setStatus("-1");
					return gson.toJson(user);
				}
				userlist.setUname(uname);
				userlist.setU_number(u_number);
				userlist.setUpassword(upassword);
				userlist.setStandby_1(standby_1);
				this.userbiz.addUser(userlist);
				user.setStatus("1");
				return gson.toJson(user);
				
		}
	//
	
	//注销登陆
	@RequestMapping(value="/uploging")
	@ResponseBody
	public String uploging(HttpServletRequest request){
		logger.info("注销登陆.....");
			request.getSession().setAttribute("users", null);
			request.getSession().removeAttribute("users");
			return "1";
	}
	// 排行榜，按类型显示数据
	@RequestMapping(value = "/toindex_type")
	public String Index_type(Model model) {

		logger.info("toIndex.....");
		List<Object> listAll = new ArrayList<Object>();
		List<String> dlist = new ArrayList<String>();// 点击量
		List<String> Ranklist = new ArrayList<String>();// 排名
		RedisUtils redis = new RedisUtils();
		List<NovelType> typelist = novelTypebizImpl.showType(noveltype);
		// System.out.println(typelist.get(1)+"=======你还不是修仙");

		// System.out.println("进来没？");
		List<Novel> list = novelbizImpl.TypeNovel(typelist.get(0).getTname());
		for (int i = 0; i < list.size(); i++) {
			String rname = list.get(i).getNname();
			Double num = redis.ShowRank(rname);
			String Stnum = String.valueOf(num);
			String inum = String.valueOf(i + 1);
			// System.out.println("num===== "+num);
			dlist.add(Stnum);
			Ranklist.add(inum);
		}

		for (int j = 0; j < list.size(); j++) {
			Rank rank = new Rank();
			rank.setNovelname(list.get(j).getNname());
			rank.setRanknum(dlist.get(j));
			rank.setDoll(Ranklist.get(j));
			listAll.add(rank);
		}
		model.addAttribute("listAll", listAll);

		return "rank";
	}
	
	//作家专区
	@RequestMapping(value = "/authorPrefectrue")
	public String authorPrefectrue(HttpServletRequest request,HttpServletResponse response,Model model) throws IOException{
		List<Author> list=new ArrayList<Author>();	
		HttpSession session = request.getSession();
		User uuser=(User)(session.getAttribute("users"));
		//Object uuid=session.getAttribute("uuid");
		
		if(uuser.getUname()!=null && uuser.getUpassword()!=null){			
			Integer uid=Integer.parseInt(String.valueOf(uuser.getUid()));
			list=authorbiz.inforByunumber(uid);
			Integer aid=list.get(0).getAid();
			List<Novel> novel=authorbiz.inforByaid(aid);
			//System.out.println("进来了");
			if(list.get(0).getUid()!=null){
				model.addAttribute("author",list);
				model.addAttribute("novel",novel);
			}else{
				response.sendRedirect("toauthor");
			}
		}else{
			//System.out.println("没进来");	
				response.sendRedirect("jsp/bookcase.jsp");
		}
		
		return "AuthorPrefecture";		
	}
	
	//作家信息编辑
	@RequestMapping(value = "/editor")
	public String editor(HttpServletRequest request,Model model){
		HttpSession session = request.getSession();
		User uuser=(User)(session.getAttribute("users"));
		Integer uid=Integer.parseInt(String.valueOf(uuser.getUid()));
		List<Author> list=authorbiz.inforByunumber(uid);
//		Integer aid=list.get(0).getAid();
//		List<Novel> novel=authorbiz.inforByaid(aid);
		
		model.addAttribute("author",list);
	return "EditorAuthor";		
	}
	
	
	//保存作家信息
	@RequestMapping(value = "/saveAuthor")
	public String save(HttpServletRequest request,Model model){
		String Said=request.getParameter("aid");
		int aid=Integer.parseInt(Said);
		String pan_name=request.getParameter("pan_name");
		String Saage=request.getParameter("aage");
		int aage=Integer.parseInt(Saage);
		String acard=request.getParameter("acard");
		String atel=request.getParameter("atel");
		authorbiz.updataAuthor(pan_name, aage, acard, atel, aid);
		
		List<Author> list=authorbiz.FindAuthor();	
		model.addAttribute("author",list);
	return "AuthorPrefecture";		
	}
	
	
	//首页标题的类型分类显示
	@RequestMapping(value = "/toindex_Type/{tname}")
	public String Index_Type(@PathVariable String tname, Model model) throws SQLException, UnsupportedEncodingException {
		byte[] t_byte = tname.getBytes("ISO-8859-1");//把Windows默认的编码集解码
		String str = new String(t_byte, "utf-8"); //组装成utf-8
		List<NovelType> list = novelTypebizImpl.showType(noveltype); // 小说类型
		List<Alllist> list1=randomUtils.Type_infor(str);
		model.addAttribute("list",list);
		model.addAttribute("tname",str);
		model.addAttribute("list1",list1);
		return "TypeAll";
	}
	//前往注册页面
	@RequestMapping(value="/toregister")
	public String register(Model model){
		List<NovelType> list1 = novelTypebizImpl.showType(noveltype); // 小说类型
		model.addAttribute("list1",list1);
		return "register";
	}

}
