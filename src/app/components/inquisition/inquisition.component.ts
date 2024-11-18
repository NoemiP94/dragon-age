import { Component, OnInit } from '@angular/core';
import { GameService } from '../../services/game.service';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-inquisition',
  templateUrl: './inquisition.component.html',
  styleUrl: './inquisition.component.css',
})
export class InquisitionComponent implements OnInit {
  characterData: any[] = [];

  constructor(private games: GameService) {}

  ngOnInit(): void {
    this.getData(3);
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
