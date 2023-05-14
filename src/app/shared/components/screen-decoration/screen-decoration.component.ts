import {ChangeDetectionStrategy, Component} from '@angular/core';
import {TileComponent} from '../tile/tile.component';
import {FilledTile} from "../../figures/tile/filled-tile";

@Component({
  selector: 't-screen-decoration',
  templateUrl: './screen-decoration.component.html',
  styleUrls: ['./screen-decoration.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [TileComponent],
})
export class ScreenDecorationComponent {
  title = 'Angular Tetris';
  filled = new FilledTile();
}
