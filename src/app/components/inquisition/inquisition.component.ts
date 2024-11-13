import { Component, OnInit } from '@angular/core';
import { GameService } from '../../services/game.service';

@Component({
  selector: 'app-inquisition',
  templateUrl: './inquisition.component.html',
  styleUrl: './inquisition.component.css',
})
export class InquisitionComponent implements OnInit {
  characterData: any[] = [];
  game_id: number = 3;
  constructor(private games: GameService) {}

  ngOnInit(): void {
    this.games.getCharacters(this.game_id).subscribe((data: any) => {
      this.characterData = data;
      console.log(data);
    });
  }
}
