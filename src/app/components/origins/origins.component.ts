import { Component, OnInit } from '@angular/core';
import { GameService } from '../../services/game.service';
import { firstValueFrom } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-origins',
  templateUrl: './origins.component.html',
  styleUrl: './origins.component.css',
})
export class OriginsComponent implements OnInit {
  characterData: any[] = [];
  gameData: any;
  selectedGameId = 1;

  constructor(private games: GameService, private router: Router) {}
  ngOnInit(): void {
    this.getData(this.selectedGameId);
    this.getGameDetail(this.selectedGameId);
  }

  async getData(game_id: number): Promise<void> {
    try {
      this.characterData = await firstValueFrom(
        //firstValueFrom => trasforma Observable in Promise
        this.games.getCharacters(game_id)
      );

      // console.log(this.characterData);
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

  goToGoals() {
    this.router.navigate(['/goal', this.selectedGameId]);
  }

  getImageBase64(imageBase64: string): string {
    return `data:image/jpeg;base64,${imageBase64}`;
  }

  goToDlc() {
    this.router.navigate(['/dlc', this.selectedGameId]);
  }
}
