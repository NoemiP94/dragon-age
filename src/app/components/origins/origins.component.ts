import { Component, OnInit } from '@angular/core';
import { GameService } from '../../services/game.service';
import { firstValueFrom } from 'rxjs';
import { Router } from '@angular/router';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079 },
  { position: 2, name: 'Helium', weight: 4.0026 },
  { position: 3, name: 'Lithium', weight: 6.941 },
  { position: 4, name: 'Beryllium', weight: 9.0122 },
  { position: 5, name: 'Boron', weight: 10.811 },
  { position: 6, name: 'Carbon', weight: 12.0107 },
  { position: 7, name: 'Nitrogen', weight: 14.0067 },
  { position: 8, name: 'Oxygen', weight: 15.9994 },
  { position: 9, name: 'Fluorine', weight: 18.9984 },
  { position: 10, name: 'Neon', weight: 20.1797 },
];

@Component({
  selector: 'app-origins',
  templateUrl: './origins.component.html',
  styleUrl: './origins.component.css',
})
export class OriginsComponent implements OnInit {
  characterData: any[] = [];
  gameData: any;
  displayedColumns: string[] = ['position', 'name', 'weight'];
  dataSource = ELEMENT_DATA;

  constructor(private games: GameService, private router: Router) {}
  ngOnInit(): void {
    this.getData(1);
    this.getGameDetail(1);
  }

  async getData(game_id: number): Promise<void> {
    try {
      this.characterData = await firstValueFrom(
        //firstValueFrom => trasforma Observable in Promise
        this.games.getCharacters(game_id)
      );

      // console.log(this.characterData);
    } catch (error) {
      console.error('Error in the request', error);
    }
  }

  getDetail(id: number): void {
    console.log(id);
    this.router.navigate(['/detail', id]);
  }

  async getGameDetail(game_id: number): Promise<void> {
    try {
      this.gameData = await firstValueFrom(this.games.getGameData(game_id));
      // console.log(this.gameData);
    } catch (error) {
      console.error('Error in the request', error);
    }
  }
}
