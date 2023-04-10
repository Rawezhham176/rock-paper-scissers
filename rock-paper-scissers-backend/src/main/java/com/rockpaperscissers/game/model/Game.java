package com.rockpaperscissers.game.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;
import java.util.Date;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Game implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false, updatable = false)
    private Long id;
    private Choice COMPUTER;
    private Choice PLAYER;
    private String WINNER;
    private Date DATE;

    public Game(String playerChoice) {
        this.PLAYER = Choice.valueOf(playerChoice);
        this.COMPUTER = Choice.randomChoice();
        this.DATE = new Date();
        this.WINNER = "";
    }

    private boolean computerWon(Choice COMPUTER, Choice PLAYER) {
        Boolean case1 = COMPUTER.equals(Choice.ROCK) && PLAYER.equals(Choice.SCISSOR);
        Boolean case2 = COMPUTER.equals(Choice.PAPER) && PLAYER.equals(Choice.ROCK);
        Boolean case3 = COMPUTER.equals(Choice.SCISSOR) && PLAYER.equals(Choice.PAPER);
        if(case1 || case2 || case3) return true;
        return false;
    }

    public String result() {
        if(this.PLAYER.equals(this.COMPUTER)) this.WINNER = "no winner!";
        else if (computerWon(this.COMPUTER,this.PLAYER)) this.WINNER = "The Computer has won!";
        else this.WINNER = "You won!";
        return this.WINNER;
    }
}
