package com.yc.web.controller;

import java.util.ArrayList;
import java.util.List;

import javax.annotation.Resource;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

import com.yc.bean.Novel;
import com.yc.bean.NovelChapter;
import com.yc.bean.NovelType;
import com.yc.bean.Rank;
import com.yc.biz.Authorbiz;
import com.yc.biz.NovelChapterbiz;
import com.yc.biz.NovelTypebiz;
import com.yc.biz.Novelbiz;
import com.yc.biz.Userbiz;
import com.yc.biz.impl.AuthorbizImpl;
import com.yc.biz.impl.NovelChapterbizImpl;
import com.yc.biz.impl.NovelTypebizImpl;
import com.yc.biz.impl.NovelbizImpl;
import com.yc.utils.RedisUtil;

@Controller
public class ZpdNovelController {

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

    
	
	//主页面显示数据
  	@RequestMapping(value="/toindex_zpd")
  	public String Index(Model  model){
      	logger.info("toIndex.....");
      	List list=novelTypebizImpl.showType(noveltype);
      	List novel=novelbizImpl.ShowNovel();
      	model.addAttribute("list", list);
      	model.addAttribute("novel", novel);
      	return "index";
      }
  	
  	
  	//显示小说的页面
  	@RequestMapping(value="/toindex_id/{nid}")
  	public String Index_id(@PathVariable int nid,Model  model){
  		
  		List list=new ArrayList();
      	logger.info("toIndex.....");
      	list=novelbizImpl.ShowNovel_id(nid);
      	List author=authorbizImpl.Show_Author(nid);
      	List chapter=novelChapterbizImpl.NewChapter(nid);
      	List<NovelChapter> nchapter=novelChapterbizImpl.ShowAllChapter(nid);
      	//System.out.println(list+"=你是什么");
      	//System.out.println(author+"=输出作者");
      	model.addAttribute("nchapter",nchapter);
      	model.addAttribute("novel_id",list);
      	model.addAttribute("author",author);
      	model.addAttribute("chapter",chapter);
      	//System.out.println(list);
      	
      	/*
      	 * 排行榜
      	 */
      		Novel nname= (Novel) list.get(0);
      		String name=nname.getNname();
      		RedisUtil redis=new RedisUtil();
      		redis.Ranking(name);
      	
      	return "Novel";
      }


  	
  
	
		//排行榜，按类型显示数据
		@RequestMapping(value="/toindex_type")
		public String Index_type(Model  model){
			
			logger.info("toIndex.....");
/*			List<Object> listAll=new ArrayList<Object>();
			List<String> dlist=new ArrayList<String>();//点击量
			List<String> Ranklist=new ArrayList<String>();//排名
			RedisUtil redis=new RedisUtil();
	    	List<String> list=redis.ShowRankNum1();//小说名
	    	
	    	List list_type=novelTypebizImpl.showType(noveltype); //小说类型
	    	
	    	
	    	
	    	for(int i=0;i<list.size();i++){
	    		String rname=(String) list.get(i);
	    		Double num=redis.ShowRank(rname);
	    		String Stnum=String.valueOf(num);
	    		String inum=String.valueOf(i+1);
	    		//System.out.println("num=====  "+num);	
	    		dlist.add(Stnum);
	    		Ranklist.add(inum);
	    	} 
	    	
	    	for(int j=0;j<list.size();j++){
	    		Rank rank=new Rank();
	    		rank.setNovelname(list.get(j));
	    		rank.setRanknum(dlist.get(j));
	    		rank.setDoll(Ranklist.get(j));
	    		listAll.add(rank);	
	    	}
	    	model.addAttribute("listAll",listAll);*/
	    		
			List<Object> listAll=new ArrayList<Object>();
			List<String> dlist=new ArrayList<String>();//点击量
			List<String> Ranklist=new ArrayList<String>();//排名
			RedisUtil redis=new RedisUtil();
			List typelist=novelTypebizImpl.showType(noveltype);
			//System.out.println(typelist.get(1)+"=======你还不是修仙");  
			
				//System.out.println("进来没？");
				List<Novel> list=novelbizImpl.TypeNovel("玄幻");
				for(int i=0;i<list.size();i++){
		    		String rname=  list.get(i).getNname();
		    		Double num=redis.ShowRank(rname);
		    		String Stnum=String.valueOf(num);
		    		String inum=String.valueOf(i+1);
		    		//System.out.println("num=====  "+num);	
		    		dlist.add(Stnum);
		    		Ranklist.add(inum);
		    	} 
		    	
		    	for(int j=0;j<list.size();j++){
		    		Rank rank=new Rank();
		    		rank.setNovelname(list.get(j).getNname());
		    		rank.setRanknum(dlist.get(j));
		    		rank.setDoll(Ranklist.get(j));
		    		listAll.add(rank);	
		    	}
		    	model.addAttribute("listAll",listAll);
		    	
			return "rank";
	    }
}
