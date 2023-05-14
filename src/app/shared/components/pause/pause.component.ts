import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { interval, Observable, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import {GameState} from "../../models/enums/game-state";
import {TetrisQuery} from "../../../state/tetris/tetris.query";

@Component({
  selector: 't-pause',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './pause.component.html',
  styleUrls: ['./pause.component.scss']
})
export class PauseComponent {
  paused$: Observable<boolean> = this.query.gameState$.pipe(
    switchMap((state) => {
      if (state === GameState.Paused) {
        return interval(250).pipe(map((num) => !!(num % 2)));
      }
      return of(false);
    })
  );

  constructor(private query: TetrisQuery) {}
}
