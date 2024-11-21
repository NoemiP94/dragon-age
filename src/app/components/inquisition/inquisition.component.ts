import { Component, OnInit } from '@angular/core';
import { GameService } from '../../services/game.service';
import { firstValueFrom } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inquisition',
  templateUrl: './inquisition.component.html',
  styleUrl: './inquisition.component.css',
})
export class InquisitionComponent implements OnInit {
  characterData: any[] = [];
  gameData: any;

  constructor(private games: GameService, private router: Router) {}

  ngOnInit(): void {
    this.getData(3);
    this.getGameDetail(3);
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
