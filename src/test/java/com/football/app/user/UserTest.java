package com.football.app.user;

import static org.junit.jupiter.api.Assertions.*;

import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class UserTest {

	@Autowired
	private UserService userService;
	
	@Test
	void test() throws Exception {
		List<UserVO> list = userService.getList();
		
		assertEquals(0,list.size());
	}

}
