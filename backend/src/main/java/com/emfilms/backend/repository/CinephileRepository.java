package com.emfilms.backend.repository;

import com.emfilms.backend.entities.Cinephile;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<Cinephile, Long> {


}
