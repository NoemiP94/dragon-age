import { Component, OnInit } from '@angular/core';
import { GameService } from '../../services/game.service';

@Component({
  selector: 'app-origins',
  templateUrl: './origins.component.html',
  styleUrl: './origins.component.css',
})
export class OriginsComponent implements OnInit {
  characterData: any[] = [];
  game_id: number = 1;
  constructor(private games: GameService) {}
  ngOnInit(): void {
    this.games.getCharacters(this.game_id).subscribe((data: any) => {
      this.characterData = data;
      console.log(data);
    });
  }
}
