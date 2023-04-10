import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from './../../environments/environment.development';
import { Game } from '../model/Game';

const httpHeaders = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  playGame(player: string) {
    return this.http.post(`${environment.baseUrl}/game`, player);
  }

  getWinner(): Observable<any> {
    return this.http.get(`${environment.baseUrl}/game`);
  }

  addToDb(game: Game) {
    return this.http.post(`${environment.baseUrl}/addGame`, game);
  }

  getAllGames(): Observable<Game[]> {
    return this.http.get<Game[]>(`${environment.baseUrl}/allGames`);
  }

  findGamefromDb(id: number): Observable<Game> {
    return this.http.get<Game>(`${environment.baseUrl}/findGame/${id}`);
  }

  deleteTask(id: number): Observable<Game> {
    return this.http.delete<Game>(`${environment.baseUrl}/delete/${id}`);
  }
}
