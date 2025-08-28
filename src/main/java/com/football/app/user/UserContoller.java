package com.football.app.user;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/users/*")
@RequiredArgsConstructor
public class UserContoller {

	private final UserService userService;
	
	
	@GetMapping("login")
	public String login(UserVO userVO) throws Exception {
		
		if(userVO != null) {
			return "redirect:/";
		}
		
		return "/users/login";
	}
	
	@PostMapping("join")
	public Map<String, Object> join(@RequestBody UserVO userVO) throws Exception {
		UserVO saveUser = userService.join(userVO);
		Map<String, Object> result = new HashMap<>();
		result.put("username", saveUser.getUsername());
		result.put("email", saveUser.getEmail());
		result.put("phone", saveUser.getPhone());
		return result;
	}
	
	@GetMapping("list")
	public List<UserVO> getList() throws Exception {
		return userService.getList();
	}
}
