package com.rockpaperscissers.game.model;


import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import java.util.Random;

public enum Choice {
    ROCK,
    PAPER,
    SCISSOR;

    static Random radom = new Random();
    static List<Choice> values = List.of(Choice.values());

    protected static Choice randomChoice(){
        return values.get(radom.nextInt(values.size()));
    }
}
