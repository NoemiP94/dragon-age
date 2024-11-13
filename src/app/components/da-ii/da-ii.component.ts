import { Component, OnInit } from '@angular/core';
import { GameService } from '../../services/game.service';

@Component({
  selector: 'app-da-ii',
  templateUrl: './da-ii.component.html',
  styleUrl: './da-ii.component.css',
})
export class DaIIComponent implements OnInit {
  characterData: any[] = [];
  game_id: number = 2;
  constructor(private games: GameService) {}
  ngOnInit(): void {
    this.games.getCharacters(this.game_id).subscribe((data: any) => {
      this.characterData = data;
      console.log(data);
    });
  }
}
