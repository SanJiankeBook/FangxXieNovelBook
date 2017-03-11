package com.yc.bean;

import org.springframework.stereotype.Repository;

@Repository
public class Rank {
	public String ranknum;
	public String novelname;
	public String doll;
	
	public String getRanknum() {
		return ranknum;
	}
	public void setRanknum(String ranknum) {
		this.ranknum = ranknum;
	}
	public String getNovelname() {
		return novelname;
	}
	public void setNovelname(String novelname) {
		this.novelname = novelname;
	}
	public String getDoll() {
		return doll;
	}
	public void setDoll(String doll) {
		this.doll = doll;
	}
	
	@Override
	public String toString() {
		return "Rank [ranknum=" + ranknum + ", novelname=" + novelname + ", doll=" + doll + "]";
	}
	
	
	
	
	
}
