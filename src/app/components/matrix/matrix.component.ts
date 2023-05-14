import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { combineLatest, Observable, of, timer } from 'rxjs';
import { Tile } from '@shared/figures/tile/tile';
import { TetrisQuery } from '@state/tetris/tetris.query';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { GameState } from '@shared/models/enums/game-state';
import { MatrixUtil } from '@shared/matrix/matrix';
import { map, switchMap, takeWhile } from 'rxjs/operators';
import { TileComponent } from '@shared/components/tile/tile.component';
import { AsyncPipe, NgForOf } from '@angular/common';

@UntilDestroy()
@Component({
  selector: 't-matrix',
  templateUrl: './matrix.component.html',
  styleUrls: ['./matrix.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TileComponent, AsyncPipe, NgForOf],
  standalone: true,
})
export class MatrixComponent implements OnInit {
  matrix$: Observable<Tile[]>;

  constructor(private tetrisQuery: TetrisQuery) {}

  ngOnInit(): void {
    this.matrix$ = this.getMatrix();
  }

  getMatrix(): Observable<Tile[]> {
    return combineLatest([this.tetrisQuery.gameState$, this.tetrisQuery.matrix$]).pipe(
      untilDestroyed(this),
      switchMap(([gameState, matrix]) => {
        if (gameState !== GameState.Over && gameState !== GameState.Loading) return of(matrix);
        const newMatrix = [...matrix];
        const rowsLength = MatrixUtil.Height * 2;
        return timer(0, rowsLength).pipe(
          map((x) => x + 1),
          takeWhile((x) => x <= rowsLength + 1),
          switchMap((idx) => {
            const gridIndex = idx - 1;
            if (gridIndex < MatrixUtil.Height) {
              newMatrix.splice(gridIndex * MatrixUtil.Width, MatrixUtil.Width, ...MatrixUtil.FullRow);
            }
            if (gridIndex > MatrixUtil.Height && gridIndex <= rowsLength) {
              const startIdx = (MatrixUtil.Height - (gridIndex - MatrixUtil.Height)) * MatrixUtil.Width;
              newMatrix.splice(startIdx, MatrixUtil.Width, ...MatrixUtil.EmptyRow);
            }
            return of(newMatrix);
          })
        );
      })
    );
  }
}
