package com.rockpaperscissers.game.controller;

import com.rockpaperscissers.game.model.Game;
import com.rockpaperscissers.game.service.GameService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/rock-paper-scissers/api/")
public class GameController {

    @Autowired
    private GameService gameService;

    @GetMapping("/game")
        public Game getOptions() {
            return gameService.options();
        }

        @PostMapping("/game")
        public void play(@RequestBody String playerChoice) {
            gameService.play(playerChoice);
        }


    @GetMapping("/allGames")
    public ResponseEntity<List<Game>> getAllEntity(){
        List<Game> games = gameService.allGames();
        return new ResponseEntity<>(games, HttpStatus.OK);
    }

    @GetMapping("/findGame/{id}")
    public ResponseEntity<Game> getEntityById(@PathVariable("id") Long id){
        Game game = gameService.findGame(id);
        return new ResponseEntity<>(game, HttpStatus.OK);
    }

    @PostMapping("/addGame")
    public ResponseEntity<Game> postEntity(@RequestBody Game game){
        Game newGame = gameService.addGame(game);
        return new ResponseEntity<>(newGame, HttpStatus.CREATED);
    }


    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> updateEntity(@PathVariable Long id){
        gameService.deleteGame(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
