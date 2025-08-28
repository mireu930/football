package com.football.app.court;

import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class CourtService {

	private final CourtRepository courtRepository;
	
	public CourtService(CourtRepository courtRepository) {
		this.courtRepository = courtRepository;
	}
	
	public List<CourtVO> getList() throws Exception {
		return courtRepository.findAll();
	}
}
