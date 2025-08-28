package com.football.app.user;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserService implements UserDetailsService {
	
	private final UserRepository userRepository;
	
	@Autowired
	private PasswordEncoder passwordEncoder;
	
	public UserService(UserRepository userRepository) {
		this.userRepository = userRepository;
	}
	
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		UserVO userVO = new UserVO();
		userVO.setUsername(username);
		
		userVO = userRepository.findByUsername(userVO);
		return userVO;
	}
	
	public UserVO login(UserVO userVO) throws Exception {
		UserVO factuserVO = userRepository.findByUsername(userVO);
		if(factuserVO.getPassword().equals(userVO.getPassword())) {
			return factuserVO;
		}
		return null;
	}
	
	public UserVO join(UserVO userVO) throws Exception {
		userVO.setPassword(passwordEncoder.encode(userVO.getPassword()));
		userVO.setAccountNonExpired(true);
		userVO.setAccountNonLocked(true);
		userVO.setCredentialsNonExpired(true);
		userVO.setEnabled(true);
		
		return userRepository.save(userVO);
	}

	public List<UserVO> getList() throws Exception {
		return userRepository.findAll();
	}
}
