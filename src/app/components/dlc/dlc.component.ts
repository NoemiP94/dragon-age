import { Component, Input, OnInit } from '@angular/core';
import { GameService } from '../../services/game.service';
import { ActivatedRoute } from '@angular/router';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-dlc',
  templateUrl: './dlc.component.html',
  styleUrl: './dlc.component.css',
})
export class DlcComponent implements OnInit {
  @Input() gameId!: number;
  dlcData: any;

  constructor(private games: GameService, private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.gameId = +params['id'];
    });
    this.getDlcByGame(this.gameId);
  }

  async getDlcByGame(game_id: number): Promise<void> {
    try {
      this.dlcData = await firstValueFrom(this.games.getDlcByGame(game_id));
      console.log(this.dlcData);
    } catch (error) {
      console.error('Error in the request', error);
    }
  }

  getImageBase64(imageBase64: string): string {
    return `data:image/jpeg;base64,${imageBase64}`;
  }
}
