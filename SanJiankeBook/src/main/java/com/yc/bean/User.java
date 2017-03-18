package com.yc.bean;

import java.io.Serializable;

import org.springframework.stereotype.Repository;
@Repository
public class User implements Serializable {
	//--用户信息表
	private static final long serialVersionUID = -4750369623346428567L;
	private Integer uid ;//	--用户id
	private String uname ;//		--用户姓名
	private String u_number ;//	--用户账号
	private String upassword;//,	--用户密码
	private String usex ;//		--用户性别;

	@Override
	public String toString() {
		return "User [uid=" + uid + ", uname=" + uname + ", u_number=" + u_number + ", upassword=" + upassword
				+ ", usex=" + usex + "]";
	}
	

	public Integer getUid() {
		return uid;
	}
	public void setUid(Integer uid) {
		this.uid = uid;
	}
	public String getUname() {
		return uname;
	}
	public void setUname(String uname) {
		this.uname = uname;
	}
	public String getU_number() {
		return u_number;
	}
	public void setU_number(String u_number) {
		this.u_number = u_number;
	}
	public String getUpassword() {
		return upassword;
	}
	public void setUpassword(String upassword) {
		this.upassword = upassword;
	}
	public String getUsex() {
		return usex;
	}
	public void setUsex(String usex) {
		this.usex = usex;
	}
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((u_number == null) ? 0 : u_number.hashCode());
		result = prime * result + ((uid == null) ? 0 : uid.hashCode());
		result = prime * result + ((uname == null) ? 0 : uname.hashCode());
		result = prime * result + ((upassword == null) ? 0 : upassword.hashCode());
		result = prime * result + ((usex == null) ? 0 : usex.hashCode());
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
		User other = (User) obj;
		if (u_number == null) {
			if (other.u_number != null)
				return false;
		} else if (!u_number.equals(other.u_number))
			return false;
		if (uid == null) {
			if (other.uid != null)
				return false;
		} else if (!uid.equals(other.uid))
			return false;
		if (uname == null) {
			if (other.uname != null)
				return false;
		} else if (!uname.equals(other.uname))
			return false;
		if (upassword == null) {
			if (other.upassword != null)
				return false;
		} else if (!upassword.equals(other.upassword))
			return false;
		if (usex == null) {
			if (other.usex != null)
				return false;
		} else if (!usex.equals(other.usex))
			return false;
		return true;
	}
	
	
}
