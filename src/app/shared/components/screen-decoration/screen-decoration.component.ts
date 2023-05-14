import { Component } from '@angular/core';
import { TileComponent } from '../tile/tile.component';
import {FilledTile} from "../../figures/tile/filled-tile";

@Component({
  selector: 't-screen-decoration',
  standalone: true,
  imports: [TileComponent],
  templateUrl: './screen-decoration.component.html',
  styleUrls: ['./screen-decoration.component.scss']
})
export class ScreenDecorationComponent {
  title = 'Angular Tetris';
  filled = new FilledTile();
}
