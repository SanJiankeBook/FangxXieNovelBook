
--create database novel character set utf8;
alter database novel character set utf8;
--show variables like ‘%character%’;

create table novel_type(					
	tid int auto_increment,		
	tname varchar(15),						
	standby_1 varchar(100),		
	standby_2 varchar(100),
	standby_3 varchar(100),
	primary key (tid)
)ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

insert into novel_type(tname,standby_1,standby_2,standby_3) values('玄幻',1,1,1);
insert into novel_type(tname,standby_1,standby_2,standby_3) values('修仙',1,1,1);
insert into novel_type(tname,standby_1,standby_2,standby_3) values('都市',1,1,1);
insert into novel_type(tname,standby_1,standby_2,standby_3) values('言情',1,1,1);
insert into novel_type(tname,standby_1,standby_2,standby_3) values('轻小说',1,1,1);
insert into novel_type(tname,standby_1,standby_2,standby_3) values('恐怖',1,1,1);
insert into novel_type(tname,standby_1,standby_2,standby_3) values('穿越',1,1,1);
insert into novel_type(tname,standby_1,standby_2,standby_3) values('科幻',1,1,1);

drop table novel_type;
select * from novel_type;
select tname from novel_type;




--=======================================================================================
create table novel(						
	nid int auto_increment,		
	tid int not null,						
	aid int not null,					
	nname varchar(30),						
	npicture varchar(100),						
	ndescription varchar(500),				
	nstatus varchar(15),					
	standby_1 varchar(100),
	standby_2 varchar(100),
	standby_3 varchar(100),
	primary key (nid),
	foreign key (tid) references novel_type(tid),
	foreign key (aid) references author(aid)
)ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;


insert into novel(tid,aid,nname,npicture,ndescription,nstatus,standby_1,standby_2,standby_3) 
values(2,1,'君王再临','c:\aii\aa','某一天...','未完结',1,1,1);
insert into novel(tid,aid,nname,npicture,ndescription,nstatus,standby_1,standby_2,standby_3) 
values(2,2,'再临','c:\aii\aa','某一天...','未完结',1,1,1);

select * from novel






--=======================================================================================
create table novel_chapter(					
	cid int auto_increment,		
	nid int not null,						
	cname varchar(100),						
	caddress varchar(300),					
	standby_1 varchar(100),
	standby_2 varchar(100),
	standby_3 varchar(100),
	primary key (cid),
	foreign key (nid) references novel(nid)
)ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;


insert into novel_chapter(nid,cname,caddress,standby_1,standby_2,standby_3)
values(1,'第一章：45651','d:\ssss\sswq',1,1,1);
insert into novel_chapter(nid,cname,caddress,standby_1,standby_2,standby_3)
values(2,'第一章：45651','d:\ssss\sswq',1,1,1);
select * from novel_chapter;



--=======================================================================================
create table author(					
	aid int auto_increment,	
	uid int,							
	aname varchar(30),					
	pan_name varchar(30),				
	aage int,							
	agrade varchar(20),					
	acard varchar(30),					
	atel varchar(30),					
	standby_1 varchar(100),
	standby_2 varchar(100),
	standby_3 varchar(100),
	primary key (aid),
	foreign key (uid) references user(uid)
)ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

insert into author(uid,aname,pan_name,aage,agrade,acard,atel,standby_1,standby_2,standby_3) 
values(1,'赵亮','天魁',12,'至尊','45203696661233','123589666',1,1,1);
insert into author(uid,aname,pan_name,aage,agrade,acard,atel,standby_1,standby_2,standby_3) 
values(2,'赵亮_1','天魁_1',10,'大成','45203696661233','123589666',1,1,1);

drop table author;
select * from author;



--=======================================================================================
create table user(						
	uid int auto_increment,	
	uname varchar(30),					
	u_number varchar(30),				
	upassword varchar(30),				
	usex varchar(10),					
	standby_1 varchar(100),
	standby_2 varchar(100),
	standby_3 varchar(100),
	primary key (uid)
)ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

insert into user(uname,u_number,upassword,usex,standby_1,standby_2,standby_3)
values('巨无霸','469058237','123456','男',1,1,1);
insert into user(uname,u_number,upassword,usex,standby_1,standby_2,standby_3)
values('巨无霸2','469058','123','女',1,1,1);

drop table user;
select * from user;



--=======================================================================================
create table user_talk(						
	utid int primary key auto_increment,	
	nid int not null,						
	uid int not null,						
	utdate varchar(30),						
	utcontent varchar(500),					
	standby_1 varchar(100),
	standby_2 varchar(100),
	standby_3 varchar(100),
	foreign key (uid) references user(uid),
	foreign key (nid) references novel(nid)
)ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;


insert into user_talk(nid,uid,utdate,utcontent,standby_1,standby_2,standby_3)
values(1,1,'2016-5-6','很好看',1,1,1);


select * from  user_talk;



--=======================================================================================
create table user_book(					
	ubid int primary key auto_increment,	
	nid int not null,						
	uid int not null,						
	ubdate varchar(30),						
	standby_1 varchar(100),
	standby_2 varchar(100),
	standby_3 varchar(100),
	foreign key (uid) references user(uid),
	foreign key (nid) references novel(nid)
)ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;


insert into user_book(nid,uid,ubdate,standby_1,standby_2,standby_3)
values(1,1,'2016-5-8',1,1,1);

select * from user_book;


--=======================================================================================
create table admin(							
	adid int primary key auto_increment,		
	adnumber varchar(30),					
	adpassword varchar(30),					
	standby_1 varchar(100),
	standby_2 varchar(100),
	standby_3 varchar(100)
)ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;


commit;

--测试
	select from 




