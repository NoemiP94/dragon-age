import { Component, OnInit } from '@angular/core';
import { GameService } from '../../services/game.service';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-goals',
  templateUrl: './goals.component.html',
  styleUrl: './goals.component.css',
})
export class GoalsComponent implements OnInit {
  goalData: any;

  constructor(private games: GameService) {}

  ngOnInit(): void {
    this.getGoalByGame(1);
  }

  async getGoalByGame(game_id: number): Promise<void> {
    try {
      this.goalData = await firstValueFrom(this.games.getGoalsByGame(game_id));
      console.log(this.goalData);
    } catch (error) {
      console.error('Error in the request', error);
    }
  }

  getImageBase64(imageBase64: string): string {
    return `data:image/jpeg;base64,${imageBase64}`;
  }
}
