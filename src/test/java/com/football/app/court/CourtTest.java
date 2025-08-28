package com.football.app.court;

import static org.junit.jupiter.api.Assertions.*;

import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.football.app.reservation.ReservationService;
import com.football.app.reservation.ReservationVO;

@SpringBootTest
class CourtTest {

	@Autowired
	private CourtService courtService;
	
	@Test
	void getList() throws Exception {
		List<CourtVO> list = courtService.getList();
		assertEquals(0, list.size());
	}

}
