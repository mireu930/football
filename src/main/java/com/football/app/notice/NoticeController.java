package com.football.app.notice;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("notice")
public class NoticeController {

	private final NoticeService noticeService;
	
	@GetMapping
	public List<NoticeVO> getList() throws Exception {
		return noticeService.getList();
	}
}
