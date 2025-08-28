package com.football.app.user;

import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class UserService {
	
	private final UserRepository userRepository;
	
	public UserService(UserRepository userRepository) {
		this.userRepository = userRepository;
	}

	public List<UserVO> getList() throws Exception {
		return userRepository.findAll();
	}
}
