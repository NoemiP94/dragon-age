import { Component, OnInit } from '@angular/core';
import { GameService } from '../../services/game.service';
import { firstValueFrom } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-char-detail',
  templateUrl: './char-detail.component.html',
  styleUrl: './char-detail.component.css',
})
export class CharDetailComponent implements OnInit {
  character: any;

  constructor(private games: GameService, private route: ActivatedRoute) {}
  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam !== null) {
      const id = +idParam;
      this.getCharacterDetail(id);
    } else {
      console.error('ID is null');
    }
  }

  async getCharacterDetail(character_id: number): Promise<void> {
    try {
      (this.character = await firstValueFrom(
        this.games.getSingleCharacter(character_id)
      )),
        console.log(this.character);
    } catch (error) {
      console.error('Error in the request', error);
    }
  }
}
