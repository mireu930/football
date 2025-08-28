package com.football.app.reservation;

import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class ReservationService {

	private final ReservationRepository reservationRepository;
	
	public ReservationService(ReservationRepository reservationRepository) {
		this.reservationRepository = reservationRepository;
	}
	
	public List<ReservationVO> getList() throws Exception {
		return reservationRepository.findAll();
	}
}
