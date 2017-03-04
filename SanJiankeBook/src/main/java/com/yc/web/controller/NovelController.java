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

@Controller
public class NovelController {
    private static final Log logger=LogFactory.getLog(NovelController.class);

    @RequestMapping(value="/toindex")
	public String Index(){
    	logger.info("toIndex.....");
    	return "index";
    }
    
    @RequestMapping(value="/tosousuo")
    public String sousuo(){
    	logger.info("tosousuo.....");
    	//这个功能并没有从数据库中拿数据
    	return "findnovel";
    }
}
