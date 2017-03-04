package com.yc.bean;

import java.io.Serializable;

import org.springframework.stereotype.Repository;
@Repository
public class NovelChapter implements Serializable {
	//小说章节信息
	
	private static final long serialVersionUID = 6662575089312146692L;
	private Integer cid ;//		--小说章节id
	private Integer nid ;//			--小说id
	private String cname ;//			--章节名字
	private String caddress ;//		--章节存放地址
	public Integer getCid() {
		return cid;
	}
	public void setCid(Integer cid) {
		this.cid = cid;
	}
	public Integer getNid() {
		return nid;
	}
	public void setNid(Integer nid) {
		this.nid = nid;
	}
	public String getCname() {
		return cname;
	}
	public void setCname(String cname) {
		this.cname = cname;
	}
	public String getCaddress() {
		return caddress;
	}
	public void setCaddress(String caddress) {
		this.caddress = caddress;
	}
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((caddress == null) ? 0 : caddress.hashCode());
		result = prime * result + ((cid == null) ? 0 : cid.hashCode());
		result = prime * result + ((cname == null) ? 0 : cname.hashCode());
		result = prime * result + ((nid == null) ? 0 : nid.hashCode());
		return result;
	}
	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		NovelChapter other = (NovelChapter) obj;
		if (caddress == null) {
			if (other.caddress != null)
				return false;
		} else if (!caddress.equals(other.caddress))
			return false;
		if (cid == null) {
			if (other.cid != null)
				return false;
		} else if (!cid.equals(other.cid))
			return false;
		if (cname == null) {
			if (other.cname != null)
				return false;
		} else if (!cname.equals(other.cname))
			return false;
		if (nid == null) {
			if (other.nid != null)
				return false;
		} else if (!nid.equals(other.nid))
			return false;
		return true;
	}
	@Override
	public String toString() {
		return "NovelChapter [cid=" + cid + ", nid=" + nid + ", cname=" + cname + ", caddress=" + caddress + "]";
	}
	
	
}
