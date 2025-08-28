package com.football.app.user;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/users")
@RequiredArgsConstructor
public class UserContoller {

	private final UserService userService;
	
	@GetMapping
	public List<UserVO> getList() throws Exception {
		return userService.getList();
	}
}
