import { AsyncPipe, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { NumberComponent } from '../number/number.component';
import {TetrisQuery} from "../../../state/tetris/tetris.query";

@Component({
  selector: 't-level',
  standalone: true,
  imports: [AsyncPipe, NgIf, NumberComponent],
  templateUrl: './level.component.html',
  styleUrls: ['./level.component.scss']
})
export class LevelComponent {
  speed$ = this.query.speed$;
  hasCurrent$ = this.query.hasCurrent$;
  initSpeed$ = this.query.initSpeed$;

  constructor(private query: TetrisQuery) {}
}
