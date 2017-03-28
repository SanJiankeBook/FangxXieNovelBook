package com.yc.utils;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import javax.annotation.Resource;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;
import org.springframework.stereotype.Component;

import com.yc.bean.NovelChapter;
import com.yc.biz.NovelChapterbiz;
import com.yc.utils.Unicode;

@Component
public class JsoupUtils{
	
	private NovelChapterbiz novelChapterbiz;
	
	@Resource(name = "novelChapterbizImpl")
	public void setNovelchapterbiz(NovelChapterbiz novelChapterbiz){
		this.novelChapterbiz = novelChapterbiz;
	}
	
			
	
	public byte[] Chapter(int nid) throws IOException{
		Unicode uc=new Unicode();
		StringBuilder s = new StringBuilder("");
		List<NovelChapter> Chapter=novelChapterbiz.ShowAllChapter(nid);
		String chapter=Chapter.get(0).getCaddress();
		
		String url=chapter.substring(0,22);
		String urll="E:\\apache-tomcat-7.0.47\\webapps\\"+chapter.substring(22); //服务器路径
		File in = new File(urll);
		Document doc = Jsoup.parse(in, "UTF-8", url); 
		//Document doc = Jsoup.connect(chapter).get(); //你要抽取的地址
		
		Elements divs = doc.select("html");
		byte[] contentInBytes=null;
		for (Element div: divs) { 
	 		//System.out.println(div.select("div[class=Lyric_right]")); //你要抽取的标签<div class=Lyric_right></div>
	 	
	     	String content =div.select("body").toString();
	     	//String cte=uc.decodeUnicode(content);
	     	
	     	  
           // String regEx="[`~!@#$%^&*()+=|{}';',.<>/?~！@#￥%……&*（）——+|{}【】‘；：”“’。，、？/\"/gbody]";
            String regEx = "<[^>]*>";    //去除所有的标签
            Pattern p = Pattern.compile(regEx);
            Matcher m = p.matcher(uc.decodeUnicode(content));
            System.out.println(m.replaceAll("").trim());
      
         	String con =m.replaceAll("").trim();
         	
         	contentInBytes = con.getBytes(); //字节流输入
         	
         	
			
	}
		return contentInBytes;
			
	
	 
	}
}
