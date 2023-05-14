import {AsyncPipe, NgFor} from '@angular/common';
import {ChangeDetectionStrategy, Component} from '@angular/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {TileComponent} from '../tile/tile.component';
import {TetrisService} from "@state/tetris/tetris.service";
import {Tile, TileValue} from "../../figures/tile/tile";

@Component({
  selector: 't-hold',
  templateUrl: './hold.component.html',
  styleUrls: ['./hold.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [NgFor, TileComponent, AsyncPipe],
})
export class HoldComponent {
  hold$: Observable<Tile[][]> = this.tetrisService.hold$.pipe(
    map((piece) => piece.next.map((row) => row.map((value) => new Tile(value as TileValue))))
  );

  constructor(private tetrisService: TetrisService) {}
}
