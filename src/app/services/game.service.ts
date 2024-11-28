import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  charactersUrl = 'http://localhost:8000/characters/game/';
  detailCharacterUrl = 'http://127.0.0.1:8000/characters/all/';
  detailGameUrl = 'http://127.0.0.1:8000/games/detail/';
  goalsByGameUrl = 'http://127.0.0.1:8000/goal/goal/';
  dlcByGameUrl = 'http://127.0.0.1:8000/dlc/';
  goalByGameAndDlcUrl = 'http://127.0.0.1:8000/goal/goal/';

  constructor(private http: HttpClient) {}

  getCharacters(game_id: number): Observable<any[]> {
    const url = `${this.charactersUrl}${game_id}/`;
    return this.http.get<any[]>(url);
  }

  getSingleCharacter(character_id: number): Observable<any[]> {
    const url = `${this.detailCharacterUrl}${character_id}/`;
    return this.http.get<any[]>(url);
  }

  getGameData(game_id: number): Observable<any[]> {
    const url = `${this.detailGameUrl}${game_id}/`;
    return this.http.get<any[]>(url);
  }

  getGoalsByGame(game_id: number): Observable<any[]> {
    const url = `${this.goalsByGameUrl}${game_id}/`;
    return this.http.get<any[]>(url);
  }

  getDlcByGame(game_id: number): Observable<any[]> {
    const url = `${this.dlcByGameUrl}${game_id}/`;
    return this.http.get<any[]>(url);
  }

  getGoalsByGameAndDlc(game_id: number, dlc_id: number): Observable<any[]> {
    const url = `${this.goalByGameAndDlcUrl}${game_id}/dlc/${dlc_id}/`;
    return this.http.get<any[]>(url);
  }
}
