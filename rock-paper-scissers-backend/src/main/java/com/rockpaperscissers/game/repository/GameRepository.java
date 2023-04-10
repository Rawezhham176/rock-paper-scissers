package com.rockpaperscissers.game.repository;

import com.rockpaperscissers.game.model.Game;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface GameRepository extends JpaRepository<Game, Long> {
    Optional<Game> findGameById(Long id);
    Game deleteGameById(Long id);
}
