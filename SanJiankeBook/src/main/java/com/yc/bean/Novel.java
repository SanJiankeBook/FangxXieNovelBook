package com.yc.bean;

import java.io.Serializable;

import java.util.List;

import org.springframework.stereotype.Repository;
import org.springframework.web.multipart.MultipartFile;
@Repository
public class Novel implements Serializable {
	private static final long serialVersionUID = -3615390225191887788L;
	private Integer nid ;//		--小说ID
	private Integer tid ;//			--类型id
	private Integer aid ;//		--作者id
	private String nname ;//		--小说名字
	private String npicture ;//		--小说封面存放地址	
	private String ndescription ;//	--小说描述
	private String nstatus ;//	--小说状态
	
	private String tname;      //类型名
	private String aname;      //作者名
	private String pan_name;  //笔名
	
	private List<String> originalFilename;//小说图片的原名
	private List<MultipartFile> pdfsUrl;//文件集合，对应前台上的<input type="file" name="pdfsUrl">
	
	
	public List<String> getOriginalFilename() {
		return originalFilename;
	}
	public void setOriginalFilename(List<String> originalFilename) {
		this.originalFilename = originalFilename;
	}
	public List<MultipartFile> getPdfsUrl() {
		return pdfsUrl;
	}
	public void setPdfsUrl(List<MultipartFile> pdfsUrl) {
		this.pdfsUrl = pdfsUrl;
	}
	

	@Override
	public String toString() {
		return "Novel [nid=" + nid + ", tid=" + tid + ", aid=" + aid + ", nname=" + nname + ", npicture=" + npicture
				+ ", ndescription=" + ndescription + ", nstatus=" + nstatus + ", tname=" + tname + ", aname=" + aname
				+ ", pan_name=" + pan_name + "]";
	}
	
	public String getPan_name() {
		return pan_name;
	}

	public void setPan_name(String pan_name) {
		this.pan_name = pan_name;
	}

	public String getTname() {
		return tname;
	}

	public void setTname(String tname) {
		this.tname = tname;
	}

	public String getAname() {
		return aname;
	}

	public void setAname(String aname) {
		this.aname = aname;
	}

	
	
	//>>>>>>> Stashed changes
	public Integer getNid() {
		return nid;
	}
	public void setNid(Integer nid) {
		this.nid = nid;
	}
	public Integer getTid() {
		return tid;
	}
	public void setTid(Integer tid) {
		this.tid = tid;
	}
	public Integer getAid() {
		return aid;
	}
	public void setAid(Integer aid) {
		this.aid = aid;
	}
	public String getNname() {
		return nname;
	}
	public void setNname(String nname) {
		this.nname = nname;
	}
	public String getNpicture() {
		return npicture;
	}
	public void setNpicture(String npicture) {
		this.npicture = npicture;
	}
	public String getNdescription() {
		return ndescription;
	}
	public void setNdescription(String ndescription) {
		this.ndescription = ndescription;
	}
	public String getNstatus() {
		return nstatus;
	}
	public void setNstatus(String nstatus) {
		this.nstatus = nstatus;
	}
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((aid == null) ? 0 : aid.hashCode());
		result = prime * result + ((ndescription == null) ? 0 : ndescription.hashCode());
		result = prime * result + ((nid == null) ? 0 : nid.hashCode());
		result = prime * result + ((nname == null) ? 0 : nname.hashCode());
		result = prime * result + ((npicture == null) ? 0 : npicture.hashCode());
		result = prime * result + ((nstatus == null) ? 0 : nstatus.hashCode());
		result = prime * result + ((tid == null) ? 0 : tid.hashCode());
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
		Novel other = (Novel) obj;
		if (aid == null) {
			if (other.aid != null)
				return false;
		} else if (!aid.equals(other.aid))
			return false;
		if (ndescription == null) {
			if (other.ndescription != null)
				return false;
		} else if (!ndescription.equals(other.ndescription))
			return false;
		if (nid == null) {
			if (other.nid != null)
				return false;
		} else if (!nid.equals(other.nid))
			return false;
		if (nname == null) {
			if (other.nname != null)
				return false;
		} else if (!nname.equals(other.nname))
			return false;
		if (npicture == null) {
			if (other.npicture != null)
				return false;
		} else if (!npicture.equals(other.npicture))
			return false;
		if (nstatus == null) {
			if (other.nstatus != null)
				return false;
		} else if (!nstatus.equals(other.nstatus))
			return false;
		if (tid == null) {
			if (other.tid != null)
				return false;
		} else if (!tid.equals(other.tid))
			return false;
		return true;
	}
	
	
	
}
