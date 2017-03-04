package com.yc.web.controller;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import com.yc.bean.Novel;
import com.yc.bean.NovelType;
import com.yc.biz.Hotbiz;

@Controller
public class NovelController {
	
	private NovelType nt;
	private Hotbiz hb;
	private Novel novel;
	
	
	@Resource(name="novelType")
	public void setNt(NovelType nt) {
		this.nt = nt;
	}
	
	@Resource(name="hotbizImpl")
	public void setHb(Hotbiz hb) {
		this.hb = hb;
	}
	
	@Resource(name="novel")
	public void setNovel(Novel novel) {
		this.novel = novel;
	}
	
	
	@RequestMapping(value="ShowAll.action")
	public String hello(Model model){
		
		return null;
	}
	
	
}
