import { Component, OnInit } from '@angular/core';
import { GameService } from '../../services/game.service';
import { firstValueFrom } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-da-ii',
  templateUrl: './da-ii.component.html',
  styleUrl: './da-ii.component.css',
})
export class DaIIComponent implements OnInit {
  characterData: any[] = [];
  gameData: any;

  constructor(private games: GameService, private router: Router) {}
  ngOnInit(): void {
    this.getData(2);
    this.getGameDetail(2);
  }

  async getData(game_id: number): Promise<void> {
    try {
      this.characterData = await firstValueFrom(
        this.games.getCharacters(game_id)
      );
      console.log(this.characterData);
    } catch (error) {
      console.error('Error in the request', error);
    }
  }

  getDetail(id: number): void {
    console.log(id);
    this.router.navigate(['/detail', id]);
  }

  async getGameDetail(game_id: number): Promise<void> {
    try {
      const gameDetail = await firstValueFrom(this.games.getGameData(game_id));
      this.gameData = gameDetail;
    } catch (error) {
      console.error('Error in the request', error);
    }
  }
}
