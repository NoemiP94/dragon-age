import { Component, OnInit } from '@angular/core';
import { GameService } from '../../services/game.service';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-origins',
  templateUrl: './origins.component.html',
  styleUrl: './origins.component.css',
})
export class OriginsComponent implements OnInit {
  characterData: any[] = [];
  constructor(private games: GameService) {}
  ngOnInit(): void {
    this.getData(1);
  }

  async getData(game_id: number): Promise<void> {
    try {
      this.characterData = await firstValueFrom(
        //firstValueFrom => trasforma Observable in Promise
        this.games.getCharacters(game_id)
      );
      console.log(this.characterData);
    } catch (error) {
      console.error('Error in the request', error);
    }
  }
}
