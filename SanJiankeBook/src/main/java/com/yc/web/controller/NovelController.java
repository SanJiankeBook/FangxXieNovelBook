package com.yc.web.controller;


import java.util.List;
import javax.annotation.Resource;
import java.io.IOException;
import java.util.Map;
import java.util.Map.Entry;
import javax.servlet.http.HttpServletRequest;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import com.google.gson.Gson;
import com.yc.bean.Novel;
import com.yc.bean.NovelType;
import com.yc.biz.impl.AuthorbizImpl;
import com.yc.biz.impl.NovelChapterbizImpl;
import com.yc.biz.impl.NovelTypebizImpl;
import com.yc.biz.impl.NovelbizImpl;
import com.yc.bean.Author;
import com.yc.bean.NovelChapter;
import com.yc.bean.User;
import com.yc.biz.Authorbiz;
import com.yc.biz.NovelChapterbiz;
import com.yc.biz.NovelTypebiz;
import com.yc.biz.Novelbiz;
import com.yc.biz.Userbiz;
import com.yc.biz.impl.NovelTypebizImpl;
import com.yc.dao.BaseDao;
import com.yc.help.StaticContain;
import com.yc.web.upload.ForFile;
import com.yc.web.upload.UploadFileUtil;
import com.yc.web.upload.UploadFileUtil.UploadFile;

@Controller
public class NovelController {
    private static final Log logger=LogFactory.getLog(NovelController.class);

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
    
    
    @Resource(name="novelChapterbizImpl")
    public void setNovelchapterbiz(NovelChapterbiz novelchapterbiz) {
		this.novelchapterbiz = novelchapterbiz;
	}
	@Resource(name="novelbizImpl")
    public void setNovelbiz(Novelbiz novelbiz) {
		this.novelbiz = novelbiz;
	}
	@Resource(name="novelTypebizImpl")
    public void setNoveltypebiz(NovelTypebiz noveltypebiz) {
		this.noveltypebiz = noveltypebiz;
	}
	@Resource(name="authorbizImpl")
    public void setAuthorbiz(Authorbiz authorbiz) {
		this.authorbiz = authorbiz;
	}
    @Resource(name="userbizImpl")
	public void setUser(Userbiz userbiz) {
		this.userbiz = userbiz;
	}
    
    
    @Resource(name="novel")
    public void setNovel(Novel novel) {
		this.novel = novel;
	}

	@Resource(name="novelType")
    public void setNoveltype(NovelType noveltype) {
		this.noveltype = noveltype;
	}

	@Resource(name="novelbizImpl")
    public void setNovelbizImpl(NovelbizImpl novelbizImpl) {
		this.novelbizImpl = novelbizImpl;
	}

	@Resource(name="novelTypebizImpl")
	public void setNovelTypebizImpl(NovelTypebizImpl novelTypebizImpl) {
		this.novelTypebizImpl = novelTypebizImpl;
	}
	
	@Resource(name="authorbizImpl")
	public void setAuthorbizImpl(AuthorbizImpl authorbizImpl) {
		this.authorbizImpl = authorbizImpl;
	}
	
	
	@Resource(name="novelChapterbizImpl")
	public void setNovelChapterbizImpl(NovelChapterbizImpl novelChapterbizImpl) {
		this.novelChapterbizImpl = novelChapterbizImpl;
	}




	//跳转到前台
    @RequestMapping(value="/toindex_zpd")
	public String Index(){
    	logger.info("toindex_zpd.....");
    	return "index";
    }

    
    //搜索
    @RequestMapping(value="/tosousuo")
    public String sousuo(Model model,Novel novel){
    	logger.info("tosousuo.....");
    	model.addAttribute("novel",novel.getNname());
    	return "findnovel";
    }
    //搜索页面
    @RequestMapping(value="/quearyNovel")
    public String quearyNovel(@RequestParam String text){
    	logger.info("quearyNovel.....");
    	logger.info(text+"值");
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
    	StaticContain.USERID=author.getAid();
    	return "creatnovel";
    }
    @RequestMapping(value="/test")
    public String test(){
    	logger.info("test....");
    	return "findnovel";
    }
    
    
    private String pdfRootName="uploadPdfs";
    //插入书籍信息
    @RequestMapping(value="/InsertNovel")
    public String InsertNovel(@ModelAttribute Novel novel,@ModelAttribute NovelType noveltype,Model model,HttpServletRequest request) throws IOException{
    	logger.info("InsertNovel....");
    	String npicture="";
    	
    	if(novel.getNname()!=null ){
			Map<String,UploadFile> map= UploadFileUtil.uploadFile(request, novel.getPdfsUrl(), pdfRootName);
			for(Entry<String,UploadFile> entry:map.entrySet()){
				UploadFile uploadFile=entry.getValue();
				npicture+=uploadFile.getNewFileUrl();
			}
			novel.setNpicture(npicture);
			novel.setAid(StaticContain.USERID);
			//novel.setAid(1);
			novel.setNstatus("更新");
			this.novelbiz.InsertNovel(novel);
			model.addAttribute("novel",novel);
			return "writenovel";
    	}else{
    		return "index";
    	}
    	
    }
    
    @RequestMapping(value="/insertNovlChapter")
    @ResponseBody
    public String insertNovlChapter(@ModelAttribute NovelChapter novelchapter,@RequestParam String des,HttpServletRequest request,Model model) throws IOException{
    	logger.info("insertNovlChapter....");
    	String caddress=ForFile.createFile(request, des,novelchapter.getCname());
    	novelchapter.setCaddress(caddress);
    	novelchapter.setStandby_1("待审");
    	String value="";
    	try {
			this.novelchapterbiz.insertNovelChapter(novelchapter);
			value= "章节上传成功，正在等待审核";
		} catch (Exception e) {
			e.printStackTrace();
			value= "章节上传失败，请与管理员联系";
		}
    	return value;
    }
    
    //produces告诉浏览器我是用utf8格式编码
    //得到书籍类型
    @RequestMapping(value="/showNovelTypes",produces = "application/json; charset=utf-8")
    @ResponseBody
    public String showNovelTypes(Model model){
    	logger.info("showNovelTypes....");
    	List list=this.noveltypebiz.AllNovelType(new NovelType());
    	Gson gson=new Gson();
		return gson.toJson(list);
		
		
    }
	
}

