package com.yc.utils;

import java.util.ArrayList;
import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Component;

import com.yc.bean.Novel;
import com.yc.bean.Rank;
import com.yc.biz.Novelbiz;

@Component
public class RankUtils {
	private Novelbiz novelbiz;

	@Resource(name = "novelbizImpl")
	public void setNovelbiz(Novelbiz novelbiz) {
		this.novelbiz = novelbiz;
	}

	//按类型排行榜
	public List<Object> RankType(String tname) {
		int first=1;
		List<Object> listAll = new ArrayList<Object>();
		List<String> Novelname = new ArrayList<String>();// 小说名
		List<String> dlist = new ArrayList<String>();// 点击量
		List<String> Ranklist = new ArrayList<String>();// 排名
		RedisUtils redis = new RedisUtils();
		List<Novel> list = novelbiz.TypeNovel(tname);// 修仙
		List<String> Rlist = redis.ShowRankNum1();

		for (int r = 0; r < Rlist.size(); r++) {

			for (int i = 0; i < list.size(); i++) {
				
				String rname = list.get(i).getNname();
				if (rname == Rlist.get(r) || rname.equals(Rlist.get(r))) {
					Double num = redis.ShowRank(rname); //
					String Stnum = String.valueOf(num); // 点击量				
					String inum = String.valueOf(first); // 排名
					// System.out.println("num===== "+num);
					Novelname.add(rname);
					dlist.add(Stnum);
					Ranklist.add(inum);
					++first;
				}
				
			}

		}

		for (int j = 0; j < Novelname.size(); j++) {
			Rank rank = new Rank();
			rank.setNovelname(Novelname.get(j));
			rank.setRanknum(Ranklist.get(j));
			rank.setDoll(dlist.get(j));
			listAll.add(rank);
		}
			
		return listAll;
	}

}
