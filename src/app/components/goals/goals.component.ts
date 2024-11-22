import { Component, Input, OnInit } from '@angular/core';
import { GameService } from '../../services/game.service';
import { firstValueFrom } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-goals',
  templateUrl: './goals.component.html',
  styleUrl: './goals.component.css',
})
export class GoalsComponent implements OnInit {
  @Input() gameId!: number;
  goalData: any;

  constructor(private games: GameService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.gameId = +params['id'];
    });
    this.getGoalByGame(this.gameId);
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
