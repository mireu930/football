package com.football.app.court;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("court")
public class CourtController {

	private final CourtService courtService;
	
	@GetMapping
	public List<CourtVO> getList() throws Exception {
		return courtService.getList();
	}
}
