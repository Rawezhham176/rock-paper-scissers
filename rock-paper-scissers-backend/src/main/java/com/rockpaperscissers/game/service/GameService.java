package com.rockpaperscissers.game.service;

import com.rockpaperscissers.game.exceptions.GameNotFoundException;
import com.rockpaperscissers.game.model.Game;
import com.rockpaperscissers.game.repository.GameRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class GameService {
    private Game game;

    @Autowired
    private GameRepository gameRepository;

    public void play(String playerChoice) {
        this.game = new Game(playerChoice);
        this.game.result();
    }

    public Game options() {
        return this.game;
    }

    public List<Game> allGames(){
        return gameRepository.findAll();
    }

    public Game findGame(Long id){
        return gameRepository.findGameById(id).orElseThrow(() -> new GameNotFoundException("Game not found!"));
    }

    public Game addGame(Game game){
        return gameRepository.save(game);
    }

    public Game deleteGame(Long id){
        return gameRepository.deleteGameById(id);
    }

}
