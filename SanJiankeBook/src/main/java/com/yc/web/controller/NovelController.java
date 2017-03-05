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
import com.yc.biz.Hotbiz;

@Controller
public class NovelController {
    private static final Log logger=LogFactory.getLog(NovelController.class);
    
    private Hotbiz hotbiz;
 
    private 
    
    @RequestMapping(value="/toindex")
	public String Index(Model  model){
    	logger.info("toIndex.....");
    		List list=
    	
    	return "index";
    }
}