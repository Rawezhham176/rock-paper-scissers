import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Choice } from 'src/app/enum/Choice';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css'],
})
export class BoardComponent implements OnInit {
  // boxes = [
  //   { num: 1, check: false },
  //   { num: 2, check: false },
  //   { num: 3, check: false },
  //   { num: 4, check: false },
  //   { num: 5, check: false },
  //   { num: 6, check: false },
  //   { num: 7, check: false },
  //   { num: 8, check: false },
  //   { num: 9, check: false },
  // ];
  // onClick(boxNum: Number) {
  //   this.boxes.map((item) => {
  //     if (item.num === boxNum) {
  //       item.check = true;
  //     }
  //   });
  // }
  player!: string;
  choices: string[] = Object.keys(Choice);

  constructor(private gameService: ApiService, private router: Router) {}

  ngOnInit() {
    this.choices = this.choices.slice(this.choices.length / 2);
  }

  playGame() {
    this.gameService.playGame(this.player);
  }

  playGameClick(mychoice: string) {
    this.gameService
      .playGame(mychoice)
      .subscribe((data) => this.router.navigate(['result']));
    console.log(mychoice);
  }

  parseValue(value: string) {
    this.player = value;
  }
}
