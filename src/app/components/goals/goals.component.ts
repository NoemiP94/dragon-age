import {
  Component,
  Input,
  OnInit,
  QueryList,
  ViewChildren,
} from '@angular/core';
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
  @ViewChildren('dlcId') dlcIds!: QueryList<any>;
  goalData: any;
  dlcData: any;
  goalDlcData: { [key: number]: any[] } = {};

  constructor(private games: GameService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.gameId = +params['id'];
    });
    this.getGoalByGame(this.gameId);
    this.getDlcByGame(this.gameId)
      .then(() => {
        if (this.dlcData && this.dlcData.length > 0) {
          this.dlcData.forEach((dlc: any) =>
            this.getGoalByGameAndDlc(this.gameId, dlc.id)
          );
        }
      })
      .catch((error) => {
        console.error('Failed to load DLC data', error);
      });
  }

  async getGoalByGame(game_id: number): Promise<void> {
    try {
      this.goalData = await firstValueFrom(this.games.getGoalsByGame(game_id));
      console.log(this.goalData);
    } catch (error) {
      console.error('Error in the request', error);
    }
  }

  async getDlcByGame(game_id: number): Promise<void> {
    try {
      this.dlcData = await firstValueFrom(this.games.getDlcByGame(game_id));
      console.log(this.dlcData);
    } catch (error) {
      console.error('Error in the request', error);
    }
  }

  async getGoalByGameAndDlc(game_id: number, dlc_id: number): Promise<void> {
    try {
      const goals = await firstValueFrom(
        this.games.getGoalsByGameAndDlc(game_id, dlc_id)
      );
      this.goalDlcData[dlc_id] = goals;
      console.log(`Goals for DLC ${dlc_id}:`, this.goalDlcData[dlc_id]);
    } catch (error) {
      console.error('Error in the request', error);
    }
  }

  getImageBase64(imageBase64: string): string {
    return `data:image/jpeg;base64,${imageBase64}`;
  }
}
