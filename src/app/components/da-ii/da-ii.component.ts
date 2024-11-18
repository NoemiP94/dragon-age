import { Component, OnInit } from '@angular/core';
import { GameService } from '../../services/game.service';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-da-ii',
  templateUrl: './da-ii.component.html',
  styleUrl: './da-ii.component.css',
})
export class DaIIComponent implements OnInit {
  characterData: any[] = [];

  constructor(private games: GameService) {}
  ngOnInit(): void {
    this.getData(2);
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
}
