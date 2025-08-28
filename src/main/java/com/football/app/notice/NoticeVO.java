package com.football.app.notice;

import java.sql.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Table(name = "notice")
@Data
public class NoticeVO {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long noticeId;
	private String title;
	private String content;
	private int hit;
	private Long userId;
	private Date noticeDate;
}
