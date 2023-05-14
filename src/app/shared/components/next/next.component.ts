import {AsyncPipe, NgFor} from '@angular/common';
import {ChangeDetectionStrategy, Component} from '@angular/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {TileComponent} from '../tile/tile.component';
import {Tile, TileValue} from "../../figures/tile/tile";
import {TetrisQuery} from "@state/tetris/tetris.query";

@Component({
  selector: 't-next',
  templateUrl: './next.component.html',
  styleUrls: ['./next.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [TileComponent, NgFor, AsyncPipe],
})
export class NextComponent {
  next$: Observable<Tile[][]> = this.tetrisQuery.next$.pipe(
    map((piece) => piece.next.map((row) => row.map((value) => new Tile(value as TileValue))))
  );

  constructor(private tetrisQuery: TetrisQuery) {}
}
