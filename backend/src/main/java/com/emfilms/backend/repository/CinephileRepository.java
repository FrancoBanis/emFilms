package com.emfilms.backend.repository;

import com.emfilms.backend.dto.UserRegistrationDTO;
import com.emfilms.backend.entities.Cinephile;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.Optional;

@Repository
public interface CinephileRepository extends JpaRepository<Cinephile, Long> {
    Optional<Cinephile> findByEmail(String email);
    boolean existsByEmail(String email);
}
