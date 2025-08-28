package com.football.app.reservation;

import java.sql.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Table(name = "reservation")
@Data
public class ReservationVO {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long reservationId;
	private Long userId;
	private Long courtId;
	private Date reservationDate;
	private Date startTime;
	private Date endTime;
	private boolean status;
}
