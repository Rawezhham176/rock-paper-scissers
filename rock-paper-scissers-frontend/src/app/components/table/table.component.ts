import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  games: any = [];
  constructor(private gameService: ApiService) {}
  ngOnInit() {
    this.gameService.getAllGames().subscribe((data) => (this.games = data));
  }
}
