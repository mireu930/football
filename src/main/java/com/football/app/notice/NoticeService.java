package com.football.app.notice;

import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class NoticeService {

	private final NoticeRepository noticeRepository;
	
	public NoticeService(NoticeRepository noticeRepository) {
		this.noticeRepository = noticeRepository;
	}
	
	public List<NoticeVO> getList() throws Exception {
		return noticeRepository.findAll();
	}
}
