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

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];

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

  displayedColumns: string[] = [
    'name',
    'requirements',
    'points',
    'award_type',
    'image_base64',
  ];
  // dataSource = ELEMENT_DATA;

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
