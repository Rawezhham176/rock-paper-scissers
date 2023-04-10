import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Game } from 'src/app/model/Game';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css'],
})
export class ResultComponent implements OnInit {
  myGame!: Game;

  constructor(private gameService: ApiService, private router: Router) {}

  ngOnInit() {
    this.myGame = new Game();

    this.gameService.getWinner().subscribe(
      (data) => {
        this.myGame = data;
        this.gameService.addToDb(data).subscribe((data) => console.log(data));
      },
      (error) => console.log(error)
    );
  }

  playAgain() {
    this.router.navigate(['game']);
  }
}
