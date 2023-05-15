import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable, interval, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { GameState } from '../../models/enums/game-state';
import { TetrisQuery } from '@state/tetris/tetris.query';

@Component({
  selector: 't-pause',
  templateUrl: './pause.component.html',
  styleUrls: ['./pause.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [AsyncPipe],
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
