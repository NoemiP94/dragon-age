import { Component, OnInit } from '@angular/core';
import { GameService } from '../../services/game.service';
import { firstValueFrom } from 'rxjs';
import { Router } from '@angular/router';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-origins',
  templateUrl: './origins.component.html',
  styleUrl: './origins.component.css',
})
export class OriginsComponent implements OnInit {
  characterData: any[] = [];
  gameData: any;
  gameDataArray: any[] = [];
  displayedColumns: string[] = ['data', 'pc', 'mac'];

  constructor(
    private games: GameService,
    private router: Router,
    private sanitizer: DomSanitizer
  ) {}
  ngOnInit(): void {
    this.getData(1);
    this.getGameDetail(1);
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
      this.gameDataArray = [gameDetail];
      console.log(this.gameDataArray);
    } catch (error) {
      console.error('Error in the request', error);
    }
  }
}
