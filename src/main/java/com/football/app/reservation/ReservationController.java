package com.football.app.reservation;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("reservation")
public class ReservationController {

	private final ReservationService reservationService;
	
	@GetMapping
	public List<ReservationVO> getList() throws Exception {
		return reservationService.getList();
	}
}
