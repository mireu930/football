package com.football.app.user;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;


@Repository
public interface UserRepository extends JpaRepository<UserVO, Long> {
	 UserVO findByUsername(UserVO userVO);
}
