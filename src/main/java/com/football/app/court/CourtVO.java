package com.football.app.court;

import java.sql.Date;
import java.sql.Time;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Table(name = "court")
@Data
public class CourtVO {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long courtId;
	private String courtName;
	private String location;
	private Integer fee;
	private Time openTime;
	private Time closeTime;
	private String originName;
	private String saveName;
}
